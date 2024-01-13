import React from "react";
import { Header, Footer } from "./Basic";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Certifications from "./Certifications";
import Contacts from "./Contacts";
import Projects from "./Projects";

import NoPage from "./NoPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="projects" element={<Projects />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
