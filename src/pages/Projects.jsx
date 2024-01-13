import React, { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "../SASS/projects.scss";

export default function App() {
  return <ListWithSlidingColumns />;
}

const itemsWithAttributes = [
  {
    src: "./place.jpg",
    title: "Item 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    src: "./place.jpg",
    title: "Item 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    src: "./place.jpg",
    title: "Item 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    src: "./place.jpg",
    title: "Item 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    src: "./place.jpg",
    title: "Item 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    src: "./place.jpg",
    title: "Item 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  // Add more items as needed
];

const itemsPerColumn = 3;

const useAnimeSlideIn = (elements, duration = 500, delay = 500) => {
  useEffect(() => {
    const animation = anime({
      targets: elements,
      translateX: [600, 0], // Adjust the value based on the desired slide direction
      opacity: [0, 1],
      duration: duration,
      delay: delay,
      easing: "easeInOutQuad",
    });
    return () => {
      animation.pause();
    };
  }, [elements, duration, delay]);
};

const ListWithSlidingColumns = () => {
  const [currentColumn, setCurrentColumn] = useState(0);

  const totalColumns = Math.ceil(itemsWithAttributes.length / itemsPerColumn);

  const visibleItems = itemsWithAttributes.slice(
    currentColumn * itemsPerColumn,
    (currentColumn + 1) * itemsPerColumn
  );

  const handleNextColumn = () => {
    setCurrentColumn((prevColumn) => (prevColumn + 1) % totalColumns);
  };

  const handlePrevColumn = () => {
    setCurrentColumn(
      (prevColumn) => (prevColumn - 1 + totalColumns) % totalColumns
    );
  };

  const listItems = visibleItems.map((item, index) => (
    <li key={index}>
      <img src={item.src} alt={item.title} />
      <div className="description">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button>View more</button>
      </div>
    </li>
  ));

  useAnimeSlideIn(
    document.querySelectorAll(".list-with-transition li"),
    500,
    200
  );

  return (
    <div className="list">
      <ul className="list-with-transition">{listItems}</ul>
      <div className="switch">
        <div>
          <h2>
            <span>{"0" + (currentColumn + 1)}</span>
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
            <span>{"0" + totalColumns}</span>
          </h2>
        </div>
        <div>
          <button onClick={handlePrevColumn} disabled={currentColumn === 0}>
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
          <button
            onClick={handleNextColumn}
            disabled={currentColumn === totalColumns - 1}
          >
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
      </div>
    </div>
  );
};
