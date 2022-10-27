import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';
import loading from './../assets/images/img1.jpg';

export default class Jugadores extends Component {

    state = {
        status : false ,
        jugadores : []
    }

    cargarJugadores = () => {
        var id = this.props.idEquipo;
        var request = "api/Jugadores/JugadoresEquipo/" + id;
        var url = Global.url + request;

        axios.get(url).then( res => {
            this.setState({
                status : true ,
                jugadores : res.data
            });
        });
    }
    componentDidMount = () => {
        this.cargarJugadores();
    }

    render() {
        if(this.state.status == false) {
            return(<div>
                <img src={loading} alt="cargando" />
            </div>)
        } else {
            return (<div>
                <NavLink to="/" className="btn btn-success">Volver</NavLink>
                {
                    this.state.jugadores.map((jugador, index) => {
                        return(<table className="table table-success table-striped" key={index} style={{gridTemplateColums:"auto"}}>
                            <thead>
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>IMAGEN</th>
                                    <th>DETALLES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{}}>
                                    <td>{jugador.nombre}</td>
                                    <td><img src={jugador.imagen} style={{width:"50px"}} /></td>
                                    <td>
                                        <NavLink to={'/jugador/' + jugador.idJugador} className='btn btn-danger'>Detalles</NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>)
                    })
                }
            </div>)
        }
    }
}