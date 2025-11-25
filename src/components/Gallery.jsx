import React from "react";
import { galleryImages } from "../data/gallery";

function Gallery() {
  return (
    <section id="gallery" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-kicker">Gallery</p>
          <h2 className="section-title">Snapshots from the Journey</h2>
          <p className="section-subtitle">
            A few moments from hackathons, team events, and campus life that shaped my path
            as a software engineer and aspiring ML practitioner.
          </p>
        </div>

        <div className="gallery-masonry">
          {galleryImages.map((src, idx) => (
            <figure key={idx} className="gallery-tile">
              <img
                src={src}
                alt={`Gallery item ${idx + 1}`}
                className="gallery-image"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
