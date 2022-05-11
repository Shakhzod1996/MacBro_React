import React, { Component } from "react";
import "./App.css";
import Container from "./Container/Container";
import Navbar from "./Navbar/Navbar";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container />
        </div>
    );
  }
}
