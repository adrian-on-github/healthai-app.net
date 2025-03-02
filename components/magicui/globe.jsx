"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [48.8566, 2.3522], size: 0.08 }, // Paris, France
    { location: [51.5074, -0.1278], size: 0.1 }, // London, UK
    { location: [35.6895, 139.6917], size: 0.07 }, // Tokyo, Japan
    { location: [-33.8688, 151.2093], size: 0.09 }, // Sydney, Australia
    { location: [55.7558, 37.6173], size: 0.08 }, // Moscow, Russia
    { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco, USA
    { location: [-22.9068, -43.1729], size: 0.07 }, // Rio de Janeiro, Brazil
    { location: [28.6139, 77.209], size: 0.1 }, // New Delhi, India
    { location: [31.2304, 121.4737], size: 0.1 }, // Shanghai, China
    { location: [41.9028, 12.4964], size: 0.06 }, // Rome, Italy
    { location: [-34.6037, -58.3816], size: 0.08 }, // Buenos Aires, Argentina
    { location: [52.52, 13.405], size: 0.08 }, // Berlin, Germany
    { location: [40.4168, -3.7038], size: 0.07 }, // Madrid, Spain
    { location: [45.4642, 9.19], size: 0.07 }, // Milan, Italy
    { location: [35.6762, 139.6503], size: 0.1 }, // Tokyo (Shibuya), Japan
    { location: [-1.286389, 36.817223], size: 0.05 }, // Nairobi, Kenya
    { location: [13.7563, 100.5018], size: 0.08 }, // Bangkok, Thailand
    { location: [25.276987, 55.296249], size: 0.1 }, // Dubai, UAE
    { location: [59.3293, 18.0686], size: 0.06 }, // Stockholm, Sweden
    { location: [39.9042, 116.4074], size: 0.1 }, // Beijing, China
    { location: [6.5244, 3.3792], size: 0.07 }, // Lagos, Nigeria
    { location: [50.8503, 4.3517], size: 0.05 }, // Brussels, Belgium
    { location: [1.3521, 103.8198], size: 0.1 }, // Singapore
    { location: [47.6062, -122.3321], size: 0.07 }, // Seattle, USA
    { location: [60.1699, 24.9384], size: 0.06 }, // Helsinki, Finland
    { location: [19.076, 72.8777], size: 0.1 }, // Mumbai, India
    { location: [55.9533, -3.1883], size: 0.05 }, // Edinburgh, UK
    { location: [23.8103, 90.4125], size: 0.05 }, // Dhaka, Bangladesh
    { location: [-37.8136, 144.9631], size: 0.08 }, // Melbourne, Australia
    { location: [64.1355, -21.8954], size: 0.04 }, // Reykjavik, Iceland
    { location: [30.0444, 31.2357], size: 0.07 }, // Cairo, Egypt
    { location: [53.3498, -6.2603], size: 0.06 }, // Dublin, Ireland
    { location: [33.8688, 151.2093], size: 0.1 }, // Sydney, Australia
    { location: [34.0522, -118.2437], size: 0.1 }, // Los Angeles, USA
    { location: [14.5995, 120.9842], size: 0.03 }, // Manila, Philippines
    { location: [40.7128, -74.006], size: 0.1 }, // New York City, USA
    { location: [41.0082, 28.9784], size: 0.06 }, // Istanbul, Turkey
    { location: [-26.2041, 28.0473], size: 0.07 }, // Johannesburg, South Africa
    { location: [44.4268, 26.1025], size: 0.05 }, // Bucharest, Romania
    { location: [35.1856, 33.3823], size: 0.04 }, // Nicosia, Cyprus
    { location: [40.6401, 22.9444], size: 0.05 }, // Thessaloniki, Greece
    { location: [32.0853, 34.7818], size: 0.07 }, // Tel Aviv, Israel
    { location: [-3.745, -38.523], size: 0.07 }, // Fortaleza, Brazil
    { location: [54.6872, 25.2797], size: 0.05 }, // Vilnius, Lithuania
    { location: [46.9481, 7.4474], size: 0.05 }, // Bern, Switzerland
    { location: [18.5204, 73.8567], size: 0.07 }, // Pune, India
    { location: [10.7769, 106.7009], size: 0.08 }, // Ho Chi Minh City, Vietnam
    { location: [43.6532, -79.3832], size: 0.08 }, // Toronto, Canada
    { location: [52.52, 13.405], size: 0.08 },
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
