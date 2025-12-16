import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * InfiniteMarquee — GSAP-driven infinite horizontal scroll
 * Based on https://codepen.io/GreenSock/pen/XWzRraJ
 *
 * Usage:
 *   <InfiniteMarquee speed={1} direction="left" pauseOnHover>
 *     <span>Item 1</span>
 *     <span>Item 2</span>
 *   </InfiniteMarquee>
 */
const InfiniteMarquee = ({
  children,
  speed = 1,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // Clone children to create seamless loop
    const items = Array.from(inner.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      inner.appendChild(clone);
    });

    const totalWidth = inner.scrollWidth / 2;

    // GSAP tween: translate inner wrapper infinitely
    const directionMultiplier = direction === 'left' ? -1 : 1;
    tweenRef.current = gsap.to(inner, {
      x: directionMultiplier * totalWidth,
      duration: totalWidth / (60 * speed),
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const num = parseFloat(x);
          return direction === 'left'
            ? ((num % totalWidth) + totalWidth) % totalWidth - totalWidth
            : num % totalWidth;
        }),
      },
    });

    // Pause/resume on hover
    const handleMouseEnter = () => {
      if (pauseOnHover && tweenRef.current) tweenRef.current.pause();
    };
    const handleMouseLeave = () => {
      if (pauseOnHover && tweenRef.current) tweenRef.current.resume();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [children, speed, direction, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden
    >
      <div ref={innerRef} className="inline-flex items-center gap-8">
        {children}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
