import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Store mouse coordinates and animated coordinates in refs to prevent re-renders
  const mouseCoords = useRef({ x: 0, y: 0 });
  const dotCoords = useRef({ x: 0, y: 0 });
  const outlineCoords = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Check if the device is a touchscreen or mobile device
    const checkDevice = () => {
      const mobile = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      mouseCoords.current = { x, y };
      setHidden(false);
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    // Track state locally to prevent redundant React state updates on every hover event
    let isCurrentlyHovered = false;
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isClickable = !!(
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".skills__header") || 
        target.closest(".projects__card") ||
        target.closest(".services__button") ||
        (target.style && target.style.cursor === "pointer")
      );
      
      if (isClickable !== isCurrentlyHovered) {
        isCurrentlyHovered = isClickable;
        setHovered(isClickable);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);

    // Smooth animation loop using linear interpolation (lerp)
    const updateCursor = () => {
      // Lerp for immediate cursor dot (fast trail)
      dotCoords.current.x += (mouseCoords.current.x - dotCoords.current.x) * 0.35;
      dotCoords.current.y += (mouseCoords.current.y - dotCoords.current.y) * 0.35;

      // Lerp for trailing cursor outline (slower trail)
      outlineCoords.current.x += (mouseCoords.current.x - outlineCoords.current.x) * 0.16;
      outlineCoords.current.y += (mouseCoords.current.y - outlineCoords.current.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotCoords.current.x}px, ${dotCoords.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlineCoords.current.x}px, ${outlineCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(updateCursor);
    };

    animationFrameId.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={outlineRef}
        className={`custom-cursor ${hidden ? "cursor-hidden" : ""} ${
          hovered ? "cursor-hover" : ""
        }`}
      />
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${hidden ? "cursor-hidden" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
