import axios from 'axios';
import React, { Component } from 'react'
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
                <img src={loading} />
            </div>)
        } else {
            return (<div>
                <h1>Jugadores</h1>

                {
                    this.state.jugadores.map((jugador, index) => {
                        return(<table className="table table-success table-striped"  key={index}>
                            <thead>
                                <tr>
                                    <th scope="col">NOMBRE</th>
                                    <th scope="col">IMAGEN</th>
                                    <th scope="col">DETALLES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{jugador.nombre}</td>
                                    <td><img src={jugador.imagen} style={{width:"50px"}} /></td>
                                    <td><button className='btn btn-danger'>Detalles</button></td>
                                </tr>
                            </tbody>
                        </table>)
                    })
                }

            </div>)
        }
    }
}
