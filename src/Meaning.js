import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
              <br />
              {definition.example && (
                <>
                  <strong>Example:</strong> <em>{definition.example}</em>
                </>
              )}
              <br />
              <Synonyms synonyms={props.meaning.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
