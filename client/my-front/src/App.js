import React, { Component } from 'react';
import './App.scss';
import Axios from 'axios';
import ActividadCard from './components/ActividadCard/ActividadCard'


class App extends Component {
  state = {
    actividades: [],
  }


  _fetchActividades() {
    Axios({
      method: 'get',
      url: 'http://localhost:3000/api/actividad/getAllActividades'

    }).then(response => {
      let arreglo = response.data.data
      console.log(arreglo)
      this.setState({ actividades: arreglo })
    })
  }

  actividadesByEstado = (estado) => {
    console.log(estado);
    Axios({
      method: 'get',
      url: 'http://localhost:3000/api/actividad/getActividadesbyEstado/' + estado

    }).then(response => {
      let arreglo = response.data.data
      this.setState({ actividades: arreglo })
    })
  }

  componentWillMount() {
    this._fetchActividades();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let d = this._descripcion;
    let fr = this._fecharegistro;
    let fl = this._fechalimite;
    let r = this._responsable;
    let e = this._estado;

    const actividad = 
    {
      Actividad: {
        descripcion:d.value,
        fecha_registro:fr.value,
        fecha_limite:fl.value,
        responsable:r.value,
        estado:e.value
      }
    }
    Axios({
      method: 'post',
      url: 'http://localhost:3000/api/actividad/create',
      data: actividad,
      dataType: "json"
      }).then(response => {
        this._fetchActividades();
    })
  }


  render() {
    return (
      <div className="App">
        <h1 className="App-title">GESTOR DE ACTIVIDADES</h1>
        <form className="App-form-container" onSubmit={this.handleSubmit}>
          <div className="Descripcion">
            <p className="Descripcion-title">
              Descripcion
              </p>
            <input className="Input-descripcion" type="text" name="descripcion" placeholder="descripcion" ref={(input) => { this._descripcion = input }} /><br />
          </div>

          <div className="FechaRegistro">
            <p className="FechaRegistro-title">
              Fecha de Registro
              </p>
            <input className="Input-fecharegistro" type="date" name="fecharegistro " ref={(input) => { this._fecharegistro = input }} />
          </div>

          <div className="FechaLimite">
            <p className="FechaRegistro-title">
              Fecha Limite
              </p>
            <input className="Input-fechalimite" type="date" name="fechalimite " ref={(input) => { this._fechalimite = input }} />
          </div>

          <div className="Responsable">
            <p className="Responsable-title">
              Responsable
              </p>
            <input className="Input-responsable" type="text" name="responsable" placeholder="responsable" ref={(input) => { this._responsable = input }} /><br />
          </div>

          <div className="Estado">
            <p className="Estado-title">
              Estado
              </p>
            <select className="Select-estado" ref={(select) => { this._estado = select }}>
              <option value=""></option>
              <option value="en desarrollo">en desarrollo</option>
              <option value="terminada">terminada</option>
            </select>
          </div>

          <input className="Btn-submit" type="submit" value="Crear Actividad" />
        </form>

        <div className="App-buttons-container">
          <p className="App-boton" onClick={() => this.actividadesByEstado("en desarrollo")}>EN DESARROLO</p>
          <p className="App-boton" onClick={() => this.actividadesByEstado("terminada")}>TERMINADA</p>
          <p className="App-boton" onClick={() => this._fetchActividades()}>TODAS</p>
        </div>
        <div className="App-cards-container">
          {
            this.state.actividades.map((actividad, index) => {
              return <div key={index} className="Card-Container"><ActividadCard actividad={actividad} /> </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;