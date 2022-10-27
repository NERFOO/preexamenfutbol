import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import loading from './../assets/images/img1.jpg';
import { NavLink } from 'react-router-dom';

export default class Jugador extends Component {

    state = {
        status : false ,
        jugador : {}
    }

    cargarJugador = () => {
        var id = this.props.idJugador;
        var request = "/api/Jugadores/" + id;
        var url = Global.url + request;

        axios.get(url).then(res => {
            this.setState({
                status : true ,
                jugador : res.data
            });
        });
    }
    componentDidMount = () => {
        this.cargarJugador();
    }

    render() {
        if (this.state.status == false) {
            return(<div>
                <img src={loading} alt="cargando" />
            </div>)
        } else {
            return (<div>
                <h1>Jugador</h1>
                <div key={this.state.jugador.idJugador}>
                    <div className="card" style={{margin:"7%"}}>
                        <div className="card-header">
                            {this.state.jugador.nombre}
                        </div>
                        <div className="card-body">
                            <img src={this.state.jugador.imagen} alt="imagenJugador" style={{width:"80px"}}/>
                            <h5 className="card-title">{this.state.jugador.posicion}</h5>
                            <p className="card-text">Fecha de nacimiento: {this.state.jugador.fechaNacimiento}</p>
                            <p className="card-text">Pais: {this.state.jugador.pais}</p>
                        </div>
                    </div>

                    <NavLink to={"/jugadores/" + this.state.jugador.idEquipo} className="btn btn-success">Jugadores</NavLink>

                </div>
            </div>)
        }
    }
}
