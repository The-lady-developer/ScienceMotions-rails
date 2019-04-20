import PropTypes from "prop-types";
import React from "react";

import Monika from "./Monika";
import Cytosine from "images/Cytosine.png";
import TubeTwo from "images/tube-2.png";

export default class Team extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 className syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-className
  }

  render() {
    return (
      <div>
        <Monika />
        <img src={Cytosine} className="profile" />
        <img className="img-responsive" src={TubeTwo} alt="" />
      </div>
    );
  }
}
