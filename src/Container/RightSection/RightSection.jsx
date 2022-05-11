import React from "react";

export default function RightSection({
  position,
  ram,
  xotira1,
  xotira2,
  ram1,
  xotira3,
  xotira4,
  xotira5,
  narx256,
  narx512,
  clickRamHandler16,
  clickRamHandler8,
  clickXotiraHandler512,
  narxPos,
  clickRamHandler256,
  clickXotiraHandlerRam16512,
  narx3,
  clickXotiraHandlerRam16256,
  clickXotiraHandlerRam161024,
  count,
  plusCountHandler,
  minusCountHandler,
  tillaToSilver,
  tillaToKosmik,
  tilltoTilla,
  tilla,
  topChange,
  gold
}) {
  return (
    <div className="right-sec">
      <h1>
        MacBook Air 13-inch <br /> M1/{position? ram1 : ram}/
        {topChange === "one"
          ? xotira1
          : topChange === "two"
          ? xotira2
          : topChange === "three"
          ? xotira3
          : topChange === "four"
          ? xotira4
          : topChange === "five"
          ? xotira5
          : null}
        /{gold}
      </h1>
      <h5 className="ram-h5">Ram</h5>
      <div className="Ram">
        <button
          className={`${position ? "btns" : "active btns"}`}
          onClick={clickRamHandler8}
        >
          {ram} GB
        </button>
        <button
          className={`${position ? "active btns" : "btns"}`}
          onClick={clickRamHandler16}
        >
          {ram1} GB
        </button>
      </div>
      <div className="xotira-main">
        <h5 className="xot">Xotira Hajmi</h5>
        {position ? (
          <div className="xotir-div">
            <button
              className={`${narx3 === "first" ? "active btns " : "btns"}`}
              onClick={clickXotiraHandlerRam16256}
            >
              {xotira3} GB
            </button>
            <button
              className={`${narx3 === "second" ? "active btns " : "btns"}`}
              onClick={clickXotiraHandlerRam16512}
            >
              {xotira4} GB
            </button>
            <button
              className={`${narx3 === "third" ? "active btns " : "btns"}`}
              onClick={clickXotiraHandlerRam161024}
            >
              {xotira5} GB
            </button>
          </div>
        ) : (
          <div className="xotir-div">
            <button
              className={`${narxPos === "one" ? "active btns" : "btns"}`}
              onClick={clickRamHandler256}
            >
              {xotira1} GB
            </button>
            <button
              className={`${narxPos === "two" ? "active btns" : "btns"}`}
              onClick={clickXotiraHandler512}
            >
              {xotira2} GB
            </button>
          </div>
        )}

        <div className="xotira"></div>
        <h5 className="rang">Ranglar</h5>
        <div className="btns-color"></div>
        <div className="ranglar">
          {/* Tilla */}
          <button
            className={`${
              tilla === "tilla" ? "btns rang-btn active" : "btns rang-btn"
            }`}
            onClick={tilltoTilla}
          >
            <div className="rang-tillo"></div>
            <div>Gold</div>
          </button>

          {/* Kumush */}
          <button
            className={`${
              tilla === "kumush" ? "btns rang-btn active" : "btns rang-btn"
            }`}
            onClick={tillaToSilver}
          >
            <div className="rang-kumush"></div>
            <div>Silver</div>
          </button>

          {/* Kosmik */}
          <button
            className={`${
              tilla === "kosmik" ? "btns rang-btn active" : "btns rang-btn"
            }`}
            onClick={tillaToKosmik}
          >
            <div className="rang-kosmik"></div>
            <div>Kosmik</div>
          </button>
        </div>
        <div className="soni">
          <button className="plus" onClick={plusCountHandler}>
            +
          </button>
          <p className="num">{count}</p>
          {count < 2 ? (
            <button disabled className="minus" onClick={minusCountHandler}>
              -
            </button>
          ) : (
            <button className="minus" onClick={minusCountHandler}>
              -
            </button>
          )}
        </div>
        <div className="narxi">{narx256 * count} $</div>
        <div className="eski-narxi">{narx256 * count + 100} $</div>

        <button className="savat">Savatga Qushish</button>
      </div>
    </div>
  );
}
