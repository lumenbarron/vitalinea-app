import React from "react";
import "./../styles/main.css";

export class Main extends React.Component {
  render() {
    return (
      <main>
        <h4>Información nutrimental.</h4>
        <div className="content-ingredients">
        <div className="title-ingredients">
        <p className="bold">Vitalínea® Bebible Guayaba 217gr</p>
        <p className="bold">Valor promedio por porción de 217gr</p>
        <p className="bold">Porciones por envase: 1</p>
        <div className="text-ingredients">
          <p>
            <b>Ingredientes:</b>
          </p>
          <p>
            Leche descremada pasteurizada y/o reconstituida pasteurizada de
            vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
            (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
            lácticos.
          </p>
        </div>
        </div>
        <div className="info-nutrimental">
          <div className="title-info">
            <p>Contenido energético kJ/kcal</p>
            <p>Proteínas (g)</p>
            <p>Grasas (lípidos) (g)</p>
            <p>Grasas saturadas (g)</p>
            <p>Carbohidratos (Hidratos de carbono) (g)</p>
            <p>Azúcares (g)</p>
            <p>Azúcares añadidos (g)</p>
            <p>Fibra dietética (g)</p>
            <p>Sodio (mg)</p>
            <p>Calcio (mg)</p>
            <p>%VNR*</p>
          </div>
          <div className="number-info">
            <p>413,2/97,9</p>
            <p>5.3</p>
            <p>2.1</p>
            <p>1.4</p>
            <p>12.4</p>
            <p>7.7</p>
            <p>0.1</p>
            <p>0.0</p>
            <p>92.7</p>
            <p>199.6</p>
            <p>22</p>
          </div>
        </div>
        </div>
      </main>
    );
  }
}
