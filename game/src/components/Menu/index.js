import React from "react";
import { Link } from "react-router-dom";
import Instruction from "../Instruction";
import "./style.css";

const Menu = () => {
  return (
    <div className="menuWrapper">
      <div className="menuTitle">
        <h1>Flip Card</h1>
      </div>
      <div className="menuButtons">
        <button>
          <Link to="/gamelevel">START</Link>
        </button>
        <button>
          <Link to="/instruction">instruction</Link>
        </button>
      </div>
    </div>
  );
};

export default Menu;
