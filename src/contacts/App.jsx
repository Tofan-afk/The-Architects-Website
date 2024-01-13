import React, { useRef, useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "../SASS/contacts.scss";
import { Header, Footer } from "../basic/Basic";

export default function App() {
  return (
    <>
      <Header />
      <Data />
      <Footer />
    </>
  );
}

function Data() {
  return (
    <div className="data">
      <div className="info">
        <h1>
          <span>CONTACT</span>
          <span>Informations</span>
        </h1>
        <h1>
          <span>Company Name</span>
          <span>1234 Sample Street Austin Texas 76401</span>
        </h1>

        <h1>
          <span>512.333.2222</span>
        </h1>

        <h1>
          <span></span>
          <span>sampleemail@gmail.com</span>
        </h1>
      </div>
      <div className="maps">
        <img src="/maps.jpg" />
      </div>
    </div>
  );
}
