import React, { useState } from "react";

import { BsDashCircleFill } from "react-icons/bs";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { fetchRecipeByName, fetchRandomRecipe } from "./utils/actions";
import { Search } from "./components/search/Search";
import { Main } from "./components/recipe/main/Main";
import { Recipe } from "./components/recipe/Recipe";
import { Preloader } from "./components/preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [recipe, setRecipe] = useState("");

  const loadRecipe = async (query) => {
    setLoading(true);
    const { result, status } = await fetchRecipeByName(query);
    if (status !== "ok") {
      setError({
        msg:
          result.code.status == 402
            ? "Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API."
            : "Something went wrong, try again later!",
        code: result.code.status,
      });
      setLoading(false);
      throw new Error("You probably reached your daily limit 150 requests!");
    } else {
      setRecipe(result.data.results);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="m-3 header">
        <Search loadRecipe={loadRecipe} />
      </header>
      {error && (
        <>
          <p className="badge text-bg-danger">{error.msg}</p>{" "}
          <span>
            <BsDashCircleFill className="text-danger bg-white delete-icon" />
          </span>
        </>
      )}
      {loading && <Preloader />}
      {recipe && <Main recipes={recipe} />}
      {!recipe && (
        <h3 className="text-bg-info text-light text-center w-20">
          No recipes to Dispay!
        </h3>
      )}
    </div>
  );
}

export default App;
