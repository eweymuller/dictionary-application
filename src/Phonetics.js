import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div clasName="phonetic section">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>{" "}
        {props.phonetics.text}
      </div>
    );
  }
}
