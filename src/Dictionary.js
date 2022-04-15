import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyWord}`);
  }
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeyWordChange} />
        </form>
      </div>
    </div>
  );
}
