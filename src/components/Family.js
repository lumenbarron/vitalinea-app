import React from "react";
import "./../styles/family.css";
import griego from "./../images/img-vitalinea-griego.png";
import sinAzucar from "./../images/img-vitalinea-sin-azucar.png";
import bebible from "./../images/img-vitalinea-bebible.png";

export class Family extends React.Component {
  render() {
    return (
      <section className="family-content">
        <h3>LA FAMILIA VITALÍNEA</h3>
        <div className="family-imgs">
          <div className="img-family">
            <img src={griego} alt="griego"></img>
            <p>Vitalínea Griego</p>
          </div>
          <div className="img-family">
            <img
              src={sinAzucar}
              alt="sinAzucar"
              className="img-sin-azucar"
            ></img>
            <p>Vitalínea sin Azúcar</p>
          </div>
          <div id="bebible" className="img-family">
            <img
              src={bebible}
              alt="bebible"
              className="img-bebible"
            ></img>
            <p>Vitalínea Bebible</p>
          </div>
        </div>
      </section>
    );
  }
}
