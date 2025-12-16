import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/all';

gsap.registerPlugin(Observer);

/**
 * ScrollSections — Full-page vertical scroll-snap sections with GSAP animations
 * Based on https://codepen.io/GreenSock/pen/XWzRraJ
 *
 * Each child element becomes a full-screen section.
 * Scroll/swipe to navigate between sections with parallax + text animations.
 */

const ScrollSections = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);
  const backgroundsRef = useRef([]);
  const headingsRef = useRef([]);
  const currentIndexRef = useRef(-1);
  const animatingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = sectionsRef.current.filter(Boolean);
    const outerWrappers = outerWrappersRef.current.filter(Boolean);
    const innerWrappers = innerWrappersRef.current.filter(Boolean);
    const backgrounds = backgroundsRef.current.filter(Boolean);
    const headings = headingsRef.current.filter(Boolean);

    const wrap = gsap.utils.wrap(0, sections.length);

    // Initial state - set all sections offscreen except the first one
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });
    
    // Make first section visible immediately
    gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });
    gsap.set([outerWrappers[0], innerWrappers[0]], { yPercent: 0 });
    gsap.set(backgrounds[0], { yPercent: 0 });
    gsap.set(headings[0], { autoAlpha: 1, yPercent: 0 });

    const gotoSection = (index, direction) => {
      index = wrap(index);
      animatingRef.current = true;

      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => {
          animatingRef.current = false;
        },
      });

      if (currentIndexRef.current >= 0) {
        const prevIndex = currentIndexRef.current;
        gsap.set(sections[prevIndex], { zIndex: 0 });
        tl.to(backgrounds[prevIndex], { yPercent: -15 * dFactor }).set(sections[prevIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      )
        .fromTo(backgrounds[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          headings[index],
          {
            autoAlpha: 0,
            yPercent: 80 * dFactor,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: 'power2.out',
          },
          0.2
        );

      currentIndexRef.current = index;
    };

    // Create scroll observer
    const observer = Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => {
        if (!animatingRef.current) {
          gotoSection(currentIndexRef.current - 1, -1);
        }
      },
      onUp: () => {
        if (!animatingRef.current) {
          gotoSection(currentIndexRef.current + 1, 1);
        }
      },
      tolerance: 10,
      preventDefault: true,
    });

    // Set current index to 0 (already visible from initial state)
    currentIndexRef.current = 0;

    return () => {
      observer.kill();
    };
  }, [children]);

  const childArray = React.Children.toArray(children);

  return (
    <div ref={containerRef} className={`fixed inset-0 h-screen w-screen overflow-hidden ${className}`}>
      {childArray.map((child, index) => (
        <section
          key={index}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          className="invisible fixed left-0 top-0 h-full w-full"
          style={{ zIndex: 0 }}
        >
          <div
            ref={(el) => {
              outerWrappersRef.current[index] = el;
            }}
            className="h-full w-full overflow-hidden"
          >
            <div
              ref={(el) => {
                innerWrappersRef.current[index] = el;
              }}
              className="h-full w-full overflow-hidden"
            >
              <div
                ref={(el) => {
                  backgroundsRef.current[index] = el;
                }}
                className="absolute inset-0 h-full w-full"
              >
                <div
                  ref={(el) => {
                    headingsRef.current[index] = el;
                  }}
                  className="relative z-10 h-full w-full pt-16"
                >
                  {child}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ScrollSections;
