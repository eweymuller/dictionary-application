import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div clasName="phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        {props.phonetics.text}
      </div>
    );
  }
}
