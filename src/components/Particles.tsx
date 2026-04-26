import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  speed: number;
  brightness: number;
  phase: number;
};

const BASE_PARTICLE_COUNT = 2800;
const PIXELS_PER_PREVIOUS_PIXEL = 1;
const PARTICLE_COUNT = BASE_PARTICLE_COUNT * PIXELS_PER_PREVIOUS_PIXEL;
const BASE_WIDTH = 768;
const BASE_HEIGHT = 192;
const PIXEL_SIZE = 1;
const TARGET_FPS = 60;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const VIEWPORT_PRELOAD_MARGIN = 128;

const createRandom = (seed: number) => {
  let value = seed;

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
};

const createParticles = (): Particle[] => {
  const random = createRandom(8173);

  return Array.from({ length: PARTICLE_COUNT }, () => {
    const waveBias = Math.pow(random(), 1.85);
    const y = 0.22 + waveBias * 0.62 + (random() - 0.5) * 0.14;

    return {
      x: random(),
      y: Math.min(0.96, Math.max(0.05, y)),
      speed: 0.014 + random() * 0.038,
      brightness: 0.28 + random() * 0.72,
      phase: random() * Math.PI * 2,
    };
  });
};

const particles = createParticles();

const getParticleColor = () =>
  document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000';

const isElementNearViewport = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();

  return (
    rect.bottom >= -VIEWPORT_PRELOAD_MARGIN &&
    rect.top <= window.innerHeight + VIEWPORT_PRELOAD_MARGIN &&
    rect.right >= -VIEWPORT_PRELOAD_MARGIN &&
    rect.left <= window.innerWidth + VIEWPORT_PRELOAD_MARGIN
  );
};

const drawParticles = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  particleColor: string,
) => {
  context.clearRect(0, 0, width, height);
  context.imageSmoothingEnabled = false;

  const centerY = height * 0.55;
  const amplitude = height * 0.23;
  const streamHeight = height * 0.4;
  const noiseFrame = Math.floor(time * 12);
  const particleCount = Math.min(
    PARTICLE_COUNT,
    Math.max(
      1,
      Math.ceil(PARTICLE_COUNT * ((width * height) / (BASE_WIDTH * BASE_HEIGHT))),
    ),
  );

  context.fillStyle = particleColor;

  for (let index = 0; index < particleCount; index += 1) {
    const particle = particles[index];

    const drift = (particle.x + time * particle.speed) % 1;
    const x = Math.round(drift * width);

    const wave =
      Math.sin(drift * Math.PI * 2.45 + time * 1.75 + particle.phase) * amplitude +
      Math.sin(drift * Math.PI * 6.1 - time * 0.8 + particle.phase * 0.35) *
        amplitude *
        0.22;

    const y = Math.round(
      centerY +
        wave +
        (particle.y - 0.5) * streamHeight +
        Math.sin(time * 2.2 + particle.phase) * height * 0.018,
    );

    const edgeFade = Math.min(1, drift * 8, (1 - drift) * 8);
    const flicker = Math.sin(noiseFrame * 0.9 + particle.phase * 4.2) > 0.82 ? 0.64 : 1;
    const brightness = particle.brightness * edgeFade * flicker;

    const dither = Math.sin((x * 12.9898 + y * 78.233 + noiseFrame) * 43758.5453) % 1;
    const threshold = 0.22 + Math.abs(dither) * 0.44;

    if (brightness < threshold) {
      continue;
    }

    context.fillRect(x, y, 1, 1);
  }

  context.globalAlpha = 1;
};

export const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return undefined;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width / PIXEL_SIZE));
      const height = Math.max(1, Math.round(rect.height / PIXEL_SIZE));

      canvas.width = width;
      canvas.height = height;

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.imageSmoothingEnabled = false;

      return { width, height };
    };

    let size = resize();
    let particleColor = getParticleColor();
    let isNearViewport = isElementNearViewport(canvas);

    const startedAt = performance.now();
    let lastDrawAt = startedAt - FRAME_INTERVAL;

    const drawFrame = (now: number) => {
      drawParticles(
        context,
        size.width,
        size.height,
        (now - startedAt) / 1000,
        particleColor,
      );
    };

    const stopAnimation = () => {
      if (frameRef.current === undefined) {
        return;
      }

      cancelAnimationFrame(frameRef.current);
      frameRef.current = undefined;
    };

    const animate = (now: number) => {
      frameRef.current = undefined;

      if (!isNearViewport || motionQuery.matches) {
        return;
      }

      if (now - lastDrawAt >= FRAME_INTERVAL) {
        lastDrawAt = now - ((now - lastDrawAt) % FRAME_INTERVAL);
        drawFrame(now);
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (motionQuery.matches || !isNearViewport || frameRef.current !== undefined) {
        return;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      size = resize();

      if (motionQuery.matches && isNearViewport) {
        drawFrame(performance.now());
      }
    });

    const themeObserver = new MutationObserver(() => {
      particleColor = getParticleColor();

      if (motionQuery.matches && isNearViewport) {
        drawFrame(performance.now());
      }
    });

    const viewportObserver = new IntersectionObserver(
      ([entry]) => {
        isNearViewport = entry?.isIntersecting ?? false;

        if (isNearViewport) {
          const now = performance.now();

          drawFrame(now);
          lastDrawAt = now;
          startAnimation();
          return;
        }

        stopAnimation();
      },
      {
        rootMargin: `${VIEWPORT_PRELOAD_MARGIN}px 0px`,
        threshold: 0,
      },
    );

    const handleMotionChange = () => {
      if (motionQuery.matches) {
        stopAnimation();

        if (isNearViewport) {
          drawFrame(performance.now());
        }

        return;
      }

      startAnimation();
    };

    resizeObserver.observe(canvas);
    viewportObserver.observe(canvas);

    themeObserver.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    });

    motionQuery.addEventListener('change', handleMotionChange);

    if (isNearViewport) {
      drawFrame(startedAt);
      startAnimation();
    }

    return () => {
      resizeObserver.disconnect();
      themeObserver.disconnect();
      viewportObserver.disconnect();
      motionQuery.removeEventListener('change', handleMotionChange);
      stopAnimation();
    };
  }, []);

  return (
    <div
      className="mx-auto my-6 aspect-4/1 w-full max-w-768px overflow-hidden"
      style={{ maxHeight: BASE_HEIGHT, maxWidth: BASE_WIDTH }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="block h-full w-full"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
};
