"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";

type AnimCounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function AnimCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const node = ref.current;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = `${prefix}${Math.round(value).toLocaleString()}${suffix}`;
      },
    });

    return controls.stop;
  }, [isInView, target, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
