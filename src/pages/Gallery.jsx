import React, { useRef, useEffect } from "react";
import "../SASS/gallery.scss";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import autoAnimate from "@formkit/auto-animate";

export default function Gallery() {
  return <PhotoGallery />;
}

const images = [
  "/build_1.jpg",
  "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  "https://source.unsplash.com/qDkso9nvCg0/600x799",
  "https://source.unsplash.com/iecJiKe_RNg/600x799",
  "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  "https://source.unsplash.com/zh7GEuORbUw/600x799",
  "https://source.unsplash.com/PpOHJezOalU/800x599",
  "https://source.unsplash.com/I1ASdgphUH4/800x599",
];

// A function to render each image
const renderImage = (image, index) => {
  return (
    <img
      src={image}
      alt=""
      key={index}
      style={{ width: "100%", display: "block", height: "250px" }}
    />
  );
};

// A function to render the masonry component
const renderMasonry = () => {
  // Define the breakpoints for the number of columns
  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter="10px">{images.map(renderImage)}</Masonry>
    </ResponsiveMasonry>
  );
};

// The main component
const PhotoGallery = () => {
  // Create a reference to the photo-gallery div
  const galleryRef = useRef(null);

  // Use the useEffect hook to call the autoAnimate function
  useEffect(() => {
    if (galleryRef.current) {
      autoAnimate(galleryRef.current);
    }
  }, [galleryRef]);
  return (
    <div className="photo-gallery" ref={galleryRef}>
      <h1>
        <span>PHOTO</span>
        <span>Gallery</span>
      </h1>
      {renderMasonry()}
    </div>
  );
};
