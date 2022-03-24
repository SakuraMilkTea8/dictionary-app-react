import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          🔊
        </a>
        {props.phonetic.text}
      </div>
    );
  } else {
    return <div className="Phonetics">{props.phonetic.text}</div>;
  }
}
