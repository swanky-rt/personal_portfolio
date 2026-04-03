import React from "react";
import { galleryImages } from "../data/gallery";

function Gallery() {
  return (
    <section id="gallery" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header reveal">
          <p className="section-kicker">Gallery</p>
          <h2 className="section-title">Snapshots from the Journey</h2>
          <p className="section-subtitle">
            Moments from hackathons, team events, research, and campus life that
            shaped my path as an engineer and ML practitioner.
          </p>
        </div>

        <div className="gallery-masonry reveal">
          {galleryImages.map((img, idx) => (
            <figure key={idx} className="gallery-tile">
              <img
                src={img.src}
                alt={img.caption}
                className="gallery-image"
                loading="lazy"
              />
              <figcaption className="gallery-caption">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
