import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../Global';
import loading from './../assets/images/img1.jpg';

export default class Equipo extends Component {

    state = {
        status : false ,
        equipo : {}
    }

    cargarEquipos = () => {
        var id = this.props.idEquipo;
        var request = "/api/Equipos/" + id;
        var url = Global.url + request;

        axios.get(url).then( res => {
            this.setState({
                status : true ,
                equipo : res.data
            });
        });
    }
    componentDidMount = () => {
        this.cargarEquipos();
    }
    componentDidUpdate = (oldProps) => {
        if(this.props.idEquipo != oldProps.idEquipo) {
            this.cargarEquipos();
        }
    }

    render() {
        if(this.state.status == false) {
            return(<div>
                <img src={loading} />
            </div>)
        } else {
            return (<div>
                {
                    <div key={this.state.idEquipo}>
                    <div className="card" style={{margin:"5%"}}>
                        <h5 className="card-header">{this.state.equipo.nombre}</h5>
                        <div className="card-body">
                            <img style={{width:"100px"}} src={this.state.equipo.imagen} />
                            <h5 className="card-title">Champions: {this.state.equipo.champions}</h5>
                            <p className="card-text">{this.state.equipo.descripcion}</p>
                            <NavLink to={"/jugadores/" + this.state.equipo.idEquipo} className="btn btn-success">Jugadores</NavLink>
                            <NavLink to="/" className="btn btn-primary">volver</NavLink>
                        </div>
                    </div>
                </div>
                }
            </div>)
        }
    }
}
