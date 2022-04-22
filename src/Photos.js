import React from "react";
import "./Photo.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div>
                <div className="col" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="d-flex"
                      alt="Related Media"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
