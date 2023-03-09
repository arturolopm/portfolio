// import { useRef } from "react";
import h from "../assets/h.jpg";
import i from "../assets/i.jpg";
import r from "../assets/r.jpg";
import e from "../assets/e.jpg";
import m from "../assets/m.jpg";
import e2 from "../assets/e2.jpg";
// import { useState } from "react";
const Images = () => {
  //   const ref = useRef(null);
  //   const images = ref.current;
  //   let globalIndex = 0;

  //   const activate = (image, x, y) => {
  //     image.style.left = `${x}px`;
  //     image.style.top = `${y}px`;
  //     image.dataset.status = "active";
  //   };

  //   const handleMove = (e) => {
  //     const lead = images[globalIndex];
  //     activate(lead, e.clientX, e.clientY);
  //   };
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
        className=" relative bg-[#0A0A0A] h-screen m-0 overflow-hidden">
        <img
          src={h}
          alt=""
          //  ref={ref}
          className="image"
          data-index="0"
          data-status="inactive"
        />

        <img
          src={i}
          alt=""
          //   ref={ref}
          className="image"
          data-index="1"
          data-status="inactive"
        />
        <img
          src={r}
          alt=""
          //   ref={ref}
          className="image"
          data-index="2"
          data-status="inactive"
        />
        <img
          src={e}
          alt=""
          //   ref={ref}
          className="image"
          data-index="3"
          data-status="inactive"
        />
        <img
          src={m}
          alt=""
          //   ref={ref}
          className="image"
          data-index="4"
          data-status="inactive"
        />
        <img
          src={e2}
          alt=""
          //   ref={ref}
          className="image"
          data-index="5"
          data-status="inactive"
        />
        <img
          src={h}
          alt=""
          //  ref={ref}
          className="image"
          data-index="6"
          data-status="inactive"
        />
        <img
          src={i}
          alt=""
          //   ref={ref}
          className="image"
          data-index="7"
          data-status="inactive"
        />
        <img
          src={r}
          alt=""
          //   ref={ref}
          className="image"
          data-index="8"
          data-status="inactive"
        />
        <img
          src={e}
          alt=""
          //   ref={ref}
          className="image"
          data-index="9"
          data-status="inactive"
        />
        <img
          src={m}
          alt=""
          //   ref={ref}
          className="image"
          data-index="10"
          data-status="inactive"
        />
        <img
          src={e2}
          alt=""
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
