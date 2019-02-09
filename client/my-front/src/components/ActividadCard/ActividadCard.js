import React, { Component } from 'react';
import './ActividadCard.scss';


class ActividadCard extends Component {

  render() {
    return (
      <div className="blog-card spring-fever">
        <div className="title-content">
          <h3>{this.props.actividad.estado}</h3>
          <hr />
          <div className="intro">{this.props.actividad.descripcion}</div>
        </div>
        <div className="card-info">
          <p>{this.props.actividad.responsable}</p>
        </div>
        <div className="utility-info">
                <ul className="utility-list">
                  <li className="date">FL: {this.props.actividad.fecha_limite}</li>
                  <li className="date">FR: {this.props.actividad.fecha_registro}</li>
                </ul>
              </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </div> 
    );
  }
}

export default ActividadCard;