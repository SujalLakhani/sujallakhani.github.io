import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

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
      
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.left = `${x}px`;
        outlineRef.current.style.top = `${y}px`;
      }
      setHidden(false);
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    // Event delegation for hovers on clickable elements
    const onMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".skills__header") || 
        target.closest(".projects__card") ||
        target.closest(".services__button") ||
        target.style.cursor === "pointer";
      
      if (isClickable) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
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
