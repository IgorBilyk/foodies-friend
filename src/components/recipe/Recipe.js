import React, { useState } from "react";

import "../../App.css";
import { BsBook, BsInfo } from "react-icons/bs";

export const Recipe = ({ recipe }) => {
  const [instruction, setInstruction] = useState(false);
  const [description, setDescription] = useState(false);
  const { title, image, summary, analyzedInstructions } = recipe;

  const instructions = analyzedInstructions[0].steps.map((item) => item.step);
  return (
    <div className="col-md-4 card">
      <div className="justify-content-end d-flex">
        <button
          className="btn btn-success mx-1"
          onClick={() => {
            setInstruction((prev) => !prev);
            setDescription(false);
          }}
        >
          <BsBook></BsBook>
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setDescription((prev) => !prev);
            setInstruction(false);
          }}
        >
          <BsInfo></BsInfo>
        </button>
      </div>
      <img src={`${image}`} className="card-img-top" alt="dish" />
      <div className="wrapper-card">
        <h5 className="card-title">{title}</h5>
        <p
          className="card-text"
          style={{ display: description ? "block" : "none" }}
        >
          <p className="fw-bold">Description</p>

          {summary.replace(/(<([^>]+)>)/gi, "")}
        </p>
        <ol style={{ display: instruction ? "block" : "none" }}>
          <p className="fw-bold">Instructions</p>
          {instructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
      <div></div>
    </div>
  );
};
