import { useState, useRef } from "react";
import h from "../assets/h.jpg";
import i from "../assets/i.jpg";
import r from "../assets/r.jpg";
import e from "../assets/e.jpg";
import m from "../assets/m.jpg";
import e2 from "../assets/e2.jpg";

const Images = () => {
  const images = document.getElementsByClassName("image");

  let globalIndex = 0,
    last = { x: 0, y: 0 };

  const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.dataset.status = "active";
    last = { x, y };
  };

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
  };

  window.onmousemove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > 100) {
      const lead = images[globalIndex % images.length],
        tail = images[(globalIndex - 5) % images.length];

      activate(lead, e.clientX, e.clientY);
      if (tail) tail.dataset.status = "inactive";
      globalIndex++;
    }
  };

  return (
    <>
      <div
        // onMouseMove={(e) => handleMove(e)}

        id="images"
        className=" hidden lg:block relative bg-[#0A0A0A] h-screen m-0 overflow-hidden">
        <div className="text-gradient flex">
          <p className=" mx-auto mt-2">
            Move your mouse and find the secret message
          </p>
        </div>
        <img
          src={h}
          alt="letter h"
          //  ref={ref}
          className="image"
          data-index="0"
          data-status="inactive"
        />

        <img
          src={i}
          alt="letter i"
          //   ref={ref}
          className="image"
          data-index="1"
          data-status="inactive"
        />
        <img
          src={r}
          alt="letter r"
          //   ref={ref}
          className="image"
          data-index="2"
          data-status="inactive"
        />
        <img
          src={e}
          alt="letter e"
          //   ref={ref}
          className="image"
          data-index="3"
          data-status="inactive"
        />
        <img
          src={m}
          alt="letter m"
          //   ref={ref}
          className="image"
          data-index="4"
          data-status="inactive"
        />
        <img
          src={e2}
          alt="letter e2"
          //   ref={ref}
          className="image"
          data-index="5"
          data-status="inactive"
        />
        <img
          src={h}
          alt="letter h"
          //  ref={ref}
          className="image"
          data-index="6"
          data-status="inactive"
        />
        <img
          src={i}
          alt="letter i"
          //   ref={ref}
          className="image"
          data-index="7"
          data-status="inactive"
        />
        <img
          src={r}
          alt="letter r"
          //   ref={ref}
          className="image"
          data-index="8"
          data-status="inactive"
        />
        <img
          src={e}
          alt="letter e"
          //   ref={ref}
          className="image"
          data-index="9"
          data-status="inactive"
        />
        <img
          src={m}
          alt="letter m"
          //   ref={ref}
          className="image"
          data-index="10"
          data-status="inactive"
        />
        <img
          src={e2}
          alt="letter e2"
          //   ref={ref}
          className="image"
          data-index="11"
          data-status="inactive"
        />
      </div>
    </>
  );
};

export default Images;
