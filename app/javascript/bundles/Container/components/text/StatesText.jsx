import PropTypes from "prop-types";
import React from "react";

const IndicatorsText = ({}) => (

  <section className="text">

    <h1> Characteristics Of Solids Liquids and Gases </h1>

    <table border="0" align="center" class="table">

      <tr>
        <th scope="col"> </th>
        <th scope="col"> Solids </th>
        <th scope="col"> Liquids </th>
        <th scope="col"> Gases </th>
      </tr>

      <tr>
        <th scope="row">
          <span id="text-1">Distance</span>
          </th>
          <td> Particles are closely packed </td>
          <td> Particles are loosely packed </td>
          <td> Particles are very loosely packed </td>
      </tr>
      <tr>
        <th scope="row" >
          <span id="text-2">Shape and Volume</span>
          </th>
          <td> Very rigid, has fixed shape and volume </td>
          <td> No fixed shape , but has fixed volume </td>
          <td> No fixed shape or volume, assumes shape of the container </td>
      </tr>
      <tr>
        <th scope="row">
          <span id="text-3">Compressibility</span>
          </th>
          <td> Incompressible </td>
          <td> Difficult to compress </td>
          <td> Easily Compressible </td>
      </tr>
      <tr>
        <th scope="row">
          <span id="text-1">Density</span>
          </th>
          <td> High density </td>
          <td> Lower than solids but higher than liquids </td>
          <td> Least density </td>
      </tr>
    </table>

  </section>

);

export default IndicatorsText;
