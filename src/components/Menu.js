import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {

    state = {
        status : false ,
        equipos : []
    }

    cargarEquipos = () => {
        var request = "/api/Equipos";
        var url = Global.url + request;

        axios.get(url).then(res => {
            this.setState({
                status : true ,
                equipos : res.data
            });
        });
    }
    componentDidMount = () => {
        this.cargarEquipos();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apuestas</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Equipos</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {
                                    this.state.status == true &&
                                    (this.state.equipos.map((equipo, index) => {
                                        return (<li key={index}>
                                            <NavLink className="dropdown-item" to={"/equipo/" + equipo.idEquipo}>{equipo.nombre}</NavLink>
                                        </li>)
                                    }))
                                }
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>)
    }
}
