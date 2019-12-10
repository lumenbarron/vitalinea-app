import React from "react";
import "./../styles/footer.css";
import logo from "./../images/img-logo-footer.png";
import danone from "./../images/img-logo-danone.png";

export class Footer extends React.Component {
  render() {
    return (
      <section className="footer-content">
        <div className="footer-brands">
          <img src={danone} alt="danone"></img>
          <img src={logo} alt="logo"></img>
        </div>
        <div className="footer-text">
          <p>
            Términos y condiciones| Políticas de privacidad | Aviso de
            privacidad
          </p>
          <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
        </div>
      </section>
    );
  }
}
