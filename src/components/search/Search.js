import React, { useState } from "react";
import "../../App.css";

export const Search = ({ loadRecipe, loadRandomRecipe }) => {
  const [query, setQuery] = useState();

  return (
    <>
      <div className="search-wrapper">
        <span className="f">F</span>
        <h1 className="logo">oodie's Frien</h1>
        <form>
          <input
            placeholder="Search for recipe..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                e.preventDefault();
                loadRecipe(query);
                setQuery("");
              }
            }}
          />
        </form>
      </div>
    </>
  );
};
