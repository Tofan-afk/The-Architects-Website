import "../SASS/home.scss";
import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  return (
    <>
      <Present />
      <About />
      <Mission />
      <Projects />
      <Contact />
    </>
  );
  function Present() {
    const images = [
      { src: "./build_1.jpg", overlay: "something" },
      { src: "./build_2.jpg", overlay: "skkraa" },
      { src: "./place.jpg", overlay: "skya" },
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    };

    const prevImage = () => {
      const newIndex = (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImageIndex(newIndex);
    };

    return (
      <div className="present">
        <div className="present_content">
          <h1>
            <span>PROJECT</span>
            <span>Lorum</span>
          </h1>
          <div>
            <div>
              <button onClick={prevImage}>
                <svg
                  className="arrow"
                  width="100%"
                  height="100%"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 4.5C18 4.22386 17.7761 4 17.5 4L1.5 4C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5L17.5 5C17.7761 5 18 4.77614 18 4.5Z"
                    fill="#333333"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.35355 0.646447C5.15829 0.451184 4.84171 0.451184 4.64645 0.646447L0.792894 4.5L4.64645 8.35355C4.84171 8.54882 5.15829 8.54882 5.35355 8.35355C5.54882 8.15829 5.54882 7.84171 5.35355 7.64645L2.20711 4.5L5.35355 1.35355C5.54882 1.15829 5.54882 0.841709 5.35355 0.646447Z"
                    fill="#333333"
                  />
                </svg>
              </button>
              <button onClick={nextImage}>
                <svg
                  className="arrow"
                  width="100%"
                  height="100%"
                  viewBox="0 0 19 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.935303 4.5C0.935303 4.22386 1.15916 4 1.4353 4L17.4353 4C17.7114 4 17.9353 4.22386 17.9353 4.5C17.9353 4.77614 17.7114 5 17.4353 5L1.4353 5C1.15916 5 0.935303 4.77614 0.935303 4.5Z"
                    fill="#333333"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5817 0.646447C13.777 0.451184 14.0936 0.451184 14.2889 0.646447L18.1424 4.5L14.2889 8.35355C14.0936 8.54882 13.777 8.54882 13.5817 8.35355C13.3865 8.15829 13.3865 7.84171 13.5817 7.64645L16.7282 4.5L13.5817 1.35355C13.3865 1.15829 13.3865 0.841709 13.5817 0.646447Z"
                    fill="#333333"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h2>
                <span>{"0" + (currentImageIndex + 1)}</span>
                <svg
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-1"
                    x2="43.8219"
                    y2="-1"
                    transform="matrix(-0.706805 0.707408 -0.706805 -0.707408 31.9285 0)"
                    stroke="#E0E0E0"
                    strokeWidth="2"
                  />
                </svg>
                <span>{"0" + images.length}</span>
              </h2>
            </div>
          </div>
          <button id="btn_proj">See project</button>
          <div className="container_image">
            <div
              className="image-slider"
              style={{
                width: `${images.length * 100}%`,
                transform: `translateX(-${currentImageIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="image-wrapper">
                  <img
                    src={image.src}
                    alt={`Project Image ${index + 1}`}
                    className="carousel-image"
                  />

                  <div className="overlay">
                    <h2>{image.overlay}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function About() {
    return (
      <div className="about">
        <div className="about_content">
          <div id="about_images">
            <img src="./place.jpg" alt="placeholder" />
            <img src="./place.jpg" alt="placeholder" />
            <img src="./place.jpg" alt="placeholder" />
          </div>
          <div id="about_text">
            <h2>About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button>
              Read more{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 11.4998C3 11.2236 3.22386 10.9998 3.5 10.9998L19.5 10.9998C19.7761 10.9998 20 11.2236 20 11.4998C20 11.7759 19.7761 11.9998 19.5 11.9998L3.5 11.9998C3.22386 11.9998 3 11.7759 3 11.4998Z"
                  fill="#333333"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.6464 7.6462C15.8417 7.45094 16.1583 7.45094 16.3536 7.6462L20.2071 11.4998L16.3536 15.3533C16.1583 15.5486 15.8417 15.5486 15.6464 15.3533C15.4512 15.158 15.4512 14.8415 15.6464 14.6462L18.7929 11.4998L15.6464 8.35331C15.4512 8.15805 15.4512 7.84146 15.6464 7.6462Z"
                  fill="#333333"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  function Mission() {
    return (
      <div className="mission">
        <div className="mission_content">
          <h2>
            Main Focus/ {window.innerWidth <= 1200 ? <br /> : ""}Mission
            Statement
          </h2>
          <div>
            <h3>1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div>
            <h3>2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </div>
    );
  }

  function Projects() {
    return (
      <div className="projects">
        <div className="projects_content">
          <h2>Our Projects</h2>
          <div className="project_gallery">
            <img src="./place.jpg" alt="placeholder" />
            <img src="./place.jpg" alt="placeholder" />
            <img src="./place.jpg" alt="placeholder" />
            <img src="./place.jpg" alt="placeholder" />
            <img src="./place.jpg" alt="placeholder" />
          </div>
          <button>All Projects</button>
        </div>
      </div>
    );
  }

  function Contact() {
    return (
      <div className="contact">
        <div className="contact_content">
          <h2>Contact Us</h2>
          <div>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder="Interested in..." />
              <textarea placeholder="Message"></textarea>
            </form>
            <img src="./place.jpg" alt="placeholder" />
          </div>
        </div>
      </div>
    );
  }
}
