import React from "react";

export default function LeftSection({
  tilla1,
  tilla2,
  tilla3,
  tilla4,
  tilla5,
  moveToSecond,
  moveToFirst,
  secondSlide,
  moveToThird,
  moveToFourth,
  moveToFive,
}) {
  return (
    <div className="left-sec">
      <div className="top-img-container">
        <div
          className={`${
            secondSlide === "first"
              ? "img-slide to-firstSlide"
              : secondSlide === "second"
              ? "img-slide to-secondSlide"
              : secondSlide === "third"
              ? "img-slide to-thirdSlide"
              : secondSlide === "four"
              ? "img-slide to-fourSlide"
              : secondSlide === "five"
              ? "img-slide to-fiveSlide"
              : "img-slide"
          }`}
        >
          <img src={tilla1} alt="img" />
          <img src={tilla2} alt="img" />
          <img src={tilla3} alt="img" />
          <img src={tilla4} alt="img" />
          <img src={tilla5} alt="img" />
        </div>
      </div>
      {/* Pastdagi rasmlar */}
      <div className="bottom-im-slider">
        <img
          src={tilla1}
          alt="img"
          onClick={moveToFirst}
          className={`${secondSlide === "first" ? "active2" : ""}`}
        />
        <img
          src={tilla2}
          alt="img"
          onClick={moveToSecond}
          className={`${secondSlide === "second" ? "active2" : ""}`}
        />
        <img
          src={tilla3}
          alt="img"
          onClick={moveToThird}
          className={`${secondSlide === "third" ? "active2" : ""}`}
        />
        <img
          src={tilla4}
          alt="img"
          onClick={moveToFourth}
          className={`${secondSlide === "four" ? "active2" : ""}`}
        />
        <img
          src={tilla5}
          alt="img"
          onClick={moveToFive}
          className={`${secondSlide === "five" ? "active2" : ""}`}
        />
      </div>
    </div>
  );
}
