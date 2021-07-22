import React from 'react';

import logo from "../../src/logo.svg";

export default function Navbar() {
  return (
      <div className="navbar">
      <img alt="profilepic" src={logo} className="App-logo"></img>
        <h1>Portofolio de Joris Maupied</h1>
      <a href="/home">Projects</a>
      <a href="/Contact">Contact</a>
      <button type="button">Toggle</button>
      </div>
  );
}