import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps an image in a parallax container. Translates the inner element
 * vertically as the user scrolls. Subtle by default (strength 0.15).
 */
export function Parallax({
  children,
  strength = 0.15,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    let ticking = false;
    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: -1 (above) -> 0 (centered) -> 1 (below)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const offset = -progress * strength * rect.height;
      inner.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced, strength]);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className ?? ""}`}>
      <div ref={innerRef} className="absolute inset-0 -top-[10%] -bottom-[10%] parallax-img">
        {children}
      </div>
    </div>
  );
}
