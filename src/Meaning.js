import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 5) {
          return (
            <div key={index}>
              <section className="section">
                {definition.definition}
                {definition.example && (
                  <>
                    <br />
                    <em>{definition.example}</em>
                    <br />
                  </>
                )}
                <Synonyms synonyms={definition.synonyms} />
              </section>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
