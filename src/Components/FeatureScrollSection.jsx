import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const sideCardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Set initial states
      gsap.set(textRef.current, { opacity: 0, visibility: "hidden" });
      gsap.set(sideCardRef.current, { opacity: 0, x: 50 });

      // PHASE 1: Heading moves up, video width grows (pinned)
      const phase1Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "+=800",
          scrub: 1,
          pin: true,
          markers: false, // Set to true for debugging
          onEnter: () => videoRef.current?.play().catch(e => console.warn(e)),
          onEnterBack: () => videoRef.current?.play().catch(e => console.warn(e)),
          onLeave: () => videoRef.current?.pause(),
          onLeaveBack: () => videoRef.current?.pause(),
        }
      });

      phase1Timeline
        .to(headingRef.current, { 
          y: -200, 
          opacity: 0, 
          duration: 0.5 
        }, 0)
        .to(mediaRef.current, { 
          width: "80%", // Grows from 70% to 80% (about 14% increase)
          duration: 0.5 
        } , 1);

      // PHASE 2: Video shrinks, text appears
      const phase2Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "+=900",
          end: "+=1200",
          scrub: 1,
          markers: false,
        }
      });

      phase2Timeline
        .to(mediaRef.current, {
          scale: 0.7,
          x: -200,
          y: 100,
          transformOrigin: "top left",
          duration: 1
        }, 0)
        .to(textRef.current, { 
          opacity: 1, 
          visibility: "visible",
          duration: 0.5 
        }, 0);

      // PHASE 3: Side card appears
      const phase3Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "+=2200",
          end: "+=400",
          scrub: 1,
          markers: false,
        }
      });

      phase3Timeline.to(sideCardRef.current, { 
        opacity: 1, 
        x: 0,
        duration: 0.5 
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="feature-scroll" ref={sectionRef}>
      {/* Heading behind image/video */}
      <h1 className="feature-heading" ref={headingRef}>
        The fast way to do things online
      </h1>

      {/* Image/Video section */}
      <div className="feature-media-section" ref={mediaRef}>
        <video
          poster="/first-img.webp"
          ref={videoRef}
          className="feature-video"
          preload="auto"
          loop
          muted
          playsInline
          src="/chrome-video.mp4"
        />
      </div>

      {/* Phase 2 text section */}
      <div className="feature-text-section" ref={textRef}>
        <h2 className="feature-text-section-heading">
          Prioritise performance
        </h2>
        <p className="feature-text-section-content">
          Chrome is built for performance. Optimise your experience with
          features like Energy Saver and Memory Saver.
        </p>
      </div>

      {/* Phase 3 side card */}
      <div className="feature-side-card" ref={sideCardRef}>
        <h3>Stay on top of tabs</h3>
        <p>
          Chrome helps you organize and manage your tabs efficiently with 
          grouping and search features.
        </p>
      </div>
    </section>
  );
}

export default ScrollSection;