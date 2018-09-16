import PropTypes from "prop-types";
import React from "react";
import StatesText from "./text/StatesText";

import changeState from "../../../scimo/scripts/States.js";



const States = ({}) => (
  <section className="visual">
    <div className="buttons">
      <button className="solid" onClick={changeState(500)}>SOLID</button>
      <button className="liquid" onClick={changeState(200)}>LIQUID</button>
      <button className="gas" onClick={changeState(50)}>GAS</button>
    </div>
    <canvas className="myCanvas" width="1000" height="1000">

    </canvas>
    <StatesText/>

  </section>
);

export default States;
