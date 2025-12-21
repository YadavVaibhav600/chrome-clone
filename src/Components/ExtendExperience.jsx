import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ExtendExperience() {
  const firstImgRef = useRef(null);
  const secondImgRef = useRef(null);
  const thirdImgRef = useRef(null);
  const fourthImgRef = useRef(null);
  const fifthImgRef = useRef(null);
  const mainImgRef = useRef(null);
  const ImgContRef = useRef(null);

  useEffect(() => {
    const container = ImgContRef.current;
    const mainImg = mainImgRef.current;
    
    // Get the position of the main image for calculations
    const mainImgRect = mainImg.getBoundingClientRect();
    
    // Icon refs array for easier iteration
    // NEGATIVE values move left/up, POSITIVE values move right/down
    const icons = [
      { ref: firstImgRef, finalX: -50, finalY: 100 },     // Icon 1: top-right area
      { ref: secondImgRef, finalX: 100, finalY: 100 },   // Icon 2: top-left area
      { ref: thirdImgRef, finalX: 100, finalY: -150 },    // Icon 3: bottom-left area
      { ref: fourthImgRef, finalX: -150, finalY: -150 }, // Icon 4: bottom-right area
      { ref: fifthImgRef, finalX: -50, finalY: 0}   // Icon 5: right side
    ];

    // Animate each icon
    icons.forEach((icon) => {
      const iconElement = icon.ref.current;
      
      // Set initial state
      gsap.set(iconElement, { opacity: 0, scale: 1 });
      
      gsap.to(iconElement, {
        x: icon.finalX,
        y: icon.finalY,
        scale: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top 60%",      // Start when container is 80% from top
          end: "top 20%",        // End when container is 20% from top
          scrub: 1,              // Smooth scrubbing, 1 second delay
          markers: false,        // Set to true for debugging
          onEnter: () => gsap.to(iconElement, { opacity: 1, duration: 0.1 }),
          onLeaveBack: () => gsap.to(iconElement, { opacity: 0, duration: 0.1 })
        }
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="experience-container">
        <div className="experience-content">
          <h1 className="experience-content-heading">Extend Your Experience</h1>
          <p className="experience-content-text" style={{ paddingLeft: "50px" }}>
            From shopping and entertainment to productivity, find extensions to improve your experience in the Chrome Web Store.
          </p>
        </div>

        <div className="experience-image-section" ref={ImgContRef}>
          <img ref={firstImgRef} className="experience-section-img-1" src="./icon-img-1.png" alt="img not found" />
          <img ref={secondImgRef} className="experience-section-img-2" src="./icon-img-2.png" alt="img not found" />
          <img ref={thirdImgRef} className="experience-section-img-3" src="./icon-img-3.png" alt="img not found" />
          <img ref={fourthImgRef} className="experience-section-img-4" src="./icon-img-4.png" alt="img not found" />
          <img ref={fifthImgRef} className="experience-section-img-5" src="./icon-img-5.png" alt="img not found" />
          <img ref={mainImgRef} className="experience-section-img-main" src="./icon-main-img.webp" alt="img not found" />
        </div>
      </section>
    </>
  );
}

export default ExtendExperience;