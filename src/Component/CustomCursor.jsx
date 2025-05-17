import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const isMoving = useRef(false);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const tails = document.querySelectorAll(".cursor-tail");
    const positions = Array.from({ length: tails.length }, () => ({ x: 0, y: 0 }));

    let moveTimeout;

    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      dot.style.top = `${mouseY}px`;
      dot.style.left = `${mouseX}px`;

      positions[0] = { x: mouseX, y: mouseY };

      for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.8;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.8;
      }

      tails.forEach((tail, index) => {
        tail.style.top = `${positions[index].y}px`;
        tail.style.left = `${positions[index].x}px`;
      });

      if (!isMoving.current) {
        isMoving.current = true;
        setMoving(true);
      }

      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving.current = false;
        setMoving(false);
      }, 100); // 300ms feels natural
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  const totalTails = 30;

  return (
    <>
      <div className="cursor-dot"></div>
      {[...Array(totalTails)].map((_, index) => {
        const size = 26 - index * 0.6;
        return (
          <div
            key={index}
            className={`cursor-tail ${moving ? "active" : ""}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          ></div>
        );
      })}
    </>
  );
};

export default CustomCursor;
