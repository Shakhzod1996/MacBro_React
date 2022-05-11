import React, { Component } from "react";
import "./Container.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection/RightSection";

// ?Tilla Images
import tilla1 from "../assets/tilla_1.webp";
import tilla2 from "../assets/tilla_2.webp";
import tilla3 from "../assets/tilla_3.webp";
import tilla4 from "../assets/tilla_4.webp";
import tilla5 from "../assets/tilla_5.webp";

// ?Kumush Images
import kumush1 from "../assets/kumush_1.webp";
import kumush2 from "../assets/kumush_2.webp";
import kumush3 from "../assets/kumush_3.webp";
import kumush4 from "../assets/kumush_4.webp";
import kumush5 from "../assets/kumush_5.webp";

// ?Kumush Images
import kosmik1 from "../assets/kosmik_1.webp";
import kosmik2 from "../assets/kosmik_2.webp";
import kosmik3 from "../assets/kosmik_3.webp";
import kosmik4 from "../assets/kosmik_4.webp";
import kosmik5 from "../assets/kosmik_5.webp";

export default class Container extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      ram: 8,
      xotira1: 256,
      xotira2: 512,

      ram1: 16,

      position: false,

      narx256: 1200,
      narxPos: "one",

      narx3: "first",
      count: 1,
      btnDisabled: false,

      // ?Rasmlar Tilla
      tilla1: tilla1,
      tilla2: tilla2,
      tilla3: tilla3,
      tilla4: tilla4,
      tilla5: tilla5,
      tilla: "tilla",

      // ?For Image Slider
      secondSlide: "first",

      topChange: "one",
      gold: "Gold"
    };
  }

  // ?Moving slider to first Img
  moveToFirst = () => {
    this.setState({
      secondSlide: "first",
    });
  };

  // ?Moving slider to second Img
  moveToSecond = () => {
    this.setState({
      secondSlide: "second",
    });
  };

  // ?Moving slider to third Img
  moveToThird = () => {
    this.setState({
      secondSlide: "third",
    });
  };

  // ?Moving slider to fourth Img
  moveToFourth = () => {
    this.setState({
      secondSlide: "four",
    });
  };

  // ?Moving slider to fifth Img
  moveToFive = () => {
    this.setState({
      secondSlide: "five",
    });
  };

  // ?Ram 8
  clickRamHandler8 = () => {
    this.setState({
      position: false,
      xotira3: 256,
      xotira4: 512,
      narx256: 1200,
      narx3: "first",
      narxPos: "one",
    });
  };

  // ?Ram 8 ichidagi  512GB
  clickXotiraHandler512 = () => {
    this.setState({
      narx256: 1400,
      narxPos: "two",
      topChange: "two",
    });
  };

  // ?Ram 8 ichidagi  256GB
  clickXotiraHandler256 = () => {
    this.setState({
      narx256: 1200,
      narxPos: "one",
      topChange: "one",
    });
  };

  // ? Ram 16
  clickRamHandler16 = () => {
    this.setState({
      position: true,
      xotira3: 256,
      xotira4: 512,
      xotira5: 1024,
      narx256: 1250,
      narx3: "first",
    });
  };

  // ?Ram 16 ichidagi 512 GB
  clickXotiraHandlerRam16512 = () => {
    this.setState({
      narx256: 1450,
      narx3: "second",
      topChange: "four",
    });
  };

  // ?Ram 16 ichidagi 256 GB
  clickXotiraHandlerRam16256 = () => {
    this.setState({
      narx256: 1250,
      narx3: "first",
      topChange: "three",
    });
  };

  // ?Ram 16 ichidagi 1024 GB
  clickXotiraHandlerRam161024 = () => {
    this.setState({
      narx256: 1850,
      narx3: "third",
      topChange: "five",
    });
  };

  plusCountHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  minusCountHandler = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  // ?Tilla Change to Silver
  tillaToSilver = () => {
    this.setState({
      tilla1: kumush1,
      tilla2: kumush2,
      tilla3: kumush3,
      tilla4: kumush4,
      tilla5: kumush5,
      tilla: "kumush",
      gold: "Silver"
    });
  };

  // ?Tilla Change to kOSMIK
  tillaToKosmik = () => {
    this.setState({
      tilla1: kosmik1,
      tilla2: kosmik2,
      tilla3: kosmik3,
      tilla4: kosmik4,
      tilla5: kosmik5,
      tilla: "kosmik",
      gold: 'Kosmik'
    });
  };

  // ?To Tilla
  tilltoTilla = () => {
    this.setState({
      tilla1: tilla1,
      tilla2: tilla2,
      tilla3: tilla3,
      tilla4: tilla4,
      tilla5: tilla5,
      tilla: "tilla",
      gold: 'Gold'
    });
  };

  render() {
    let {
      ram,
      xotira1,
      xotira2,
      ram1,
      xotira3,
      xotira4,
      xotira5,
      narx256,
      narx512,
    } = this.state;
    return (
      <div className="container">
        <div className="cont-flex">
          <LeftSection
            tilla1={this.state.tilla1}
            tilla2={this.state.tilla2}
            tilla3={this.state.tilla3}
            tilla4={this.state.tilla4}
            tilla5={this.state.tilla5}
            moveToSecond={this.moveToSecond}
            moveToFirst={this.moveToFirst}
            secondSlide={this.state.secondSlide}
            moveToThird={this.moveToThird}
            moveToFourth={this.moveToFourth}
            moveToFive={this.moveToFive}
          />

          <RightSection
            ram={ram}
            xotira1={xotira1}
            xotira2={xotira2}
            narx256={narx256}
            narx512={narx512}
            ram1={ram1}
            xotira3={xotira3}
            xotira4={xotira4}
            xotira5={xotira5}
            clickRamHandler16={this.clickRamHandler16}
            clickRamHandler8={this.clickRamHandler8}
            narxPos={this.state.narxPos}
            clickRamHandler256={this.clickXotiraHandler256}
            clickXotiraHandler512={this.clickXotiraHandler512}
            clickXotiraHandlerRam16512={this.clickXotiraHandlerRam16512}
            clickXotiraHandlerRam16256={this.clickXotiraHandlerRam16256}
            clickXotiraHandlerRam161024={this.clickXotiraHandlerRam161024}
            narx3={this.state.narx3}
            position={this.state.position}
            count={this.state.count}
            plusCountHandler={this.plusCountHandler}
            minusCountHandler={this.minusCountHandler}
            tillaToSilver={this.tillaToSilver}
            tillaToKosmik={this.tillaToKosmik}
            tilltoTilla={this.tilltoTilla}
            tilla={this.state.tilla}
            topChange={this.state.topChange}
            gold={this.state.gold}
          />
        </div>
      </div>
    );
  }
}
