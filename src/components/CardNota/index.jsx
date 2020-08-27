import React, { Component} from 'react';

import style from './style.css'
import {ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

    render() {
        return (
         <section className="card-nota">
            <header>
              <h3>{this.props.titulo}</h3>
              <DeleteSVG onClick={this.apagar.bind(this)} />
              <h4>{this.props.categoria}</h4>
            </header>
            <p>{this.props.texto}</p>
          </section>
        );
    }
}

export default CardNota;