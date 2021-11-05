import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Levels = () => {
  return (
    <>
      <div className="menuWrapper">
        <div className="menuTitle">
          <div className="menuButtons">
            <button><Link to="/Easy">Easy</Link></button>
            <button><Link to="/gamenormal">Intermediate</Link></button>
            <button><Link to="/gamehard">Hard</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Levels;
