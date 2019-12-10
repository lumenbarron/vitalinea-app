import React from "react";
import "./../styles/header.css";
import logo from "./../images/img-logo-vitalinea.png";
import hamburguer from "./../images/hamburguer.png";
import boteFresa from "./../images/img-bote-fresa.png";
import fmd from "./../images/img-sello-avalado.png";
import kcal from "./../images/img-100-kcal.png";
import flecha from "./../images/flecha.png";
import fb from "./../images/img-social-facebook.png";
import instagram from "./../images/img-social-instagram.png";
import youtube from "./../images/img-social-youtube.png";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <section className="nav-bar">
          <img src={logo} alt="logo-vitalinea" className="logo-vitalinea"></img>
          <label htmlFor="toggle">
            <img src={hamburguer} alt="hamburguer-menu"></img>
          </label>
          <input type="checkbox" id="toggle"></input>
          <div className="menu">
            <a href="nuestros-productos">Nuestros productos</a>
            <a href="disfruto-cuidarte">Disfruto cuidarte</a>
            <a href="blog">Blog</a>
            <a href="blog"><img src={fb} alt="facebook" /></a>
            <a href="blog"><img src={instagram} alt="instagram" /></a>
            <a href="blog"><img src={youtube} alt="youtube" /></a>
          </div>
        </section>
        <section className="header-content">
        <div className="img-bote-fresa">
          <img src={boteFresa} alt="img-bote-fresa"></img>
        </div>
        <div className="header-content-info">
        <div className="flavor">
          <p>Sabor : </p>
          <button className="active">Fresa</button>
          <button className="desactive">Guayaba</button>
          <button className="desactive">Toronja</button>
        </div>
        <div className="flavor-text">
          <h4>Vitalínea® Bebible Fresa 217 gr.</h4>
          <p>
            ¡La presentación ideal para llevar contigo! Vitalínea bebible es la
            opción si eres de las personas que siempre están activas y quieren
            probar algo sano, rico y práctico.
          </p>
          <button>Comprar en Walmart</button>
          <div className="brands">
            <img src={fmd} alt="fmd"></img>
            <img src={kcal} alt="kcal"></img>
          </div>
          <div className="round-container">
            <button className="round">
              <img src={flecha} alt="flecha"></img>
            </button>
          </div>
        </div>
        </div>
        </section>
      </header>
    );
  }
}
