import PropTypes from "prop-types";
import React from "react";
import monika from "images/team/monika.png";
import Cytosine from "images/Cytosine.png";
import TubeTwo from "images/tube-2.png";

const Monika = ({}) => (
  <div>
    <img src={Cytosine} className="profile" />
    <img className="img-responsive" src={TubeTwo} alt="" />

    <p>
      Monika Singh is a full stack developer. She loves loves coding, badminton,
      exploring new places and always tries to stay uptodate about her
      interests.
    </p>
  </div>
);

export default Monika;
