import React from "react";
import { Recipe } from "../Recipe";

export const Main = ({ recipes }) => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row justify-content-between">
          {recipes?.map((recipe, index) => (
            <Recipe recipe={recipe} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};
