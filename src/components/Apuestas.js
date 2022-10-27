import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';
import loading from './../assets/images/img1.jpg';
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {

    state = {
        status : false ,
        apuestas : []
    }

    cargarApuestas = () => {
        var request = "/api/Apuestas/";
        var url = Global.url + request;

        axios.get(url).then( res => {
            this.setState({
                status : true ,
                apuestas : res.data
            });
        });
    }
    componentDidMount = () => {
        this.cargarApuestas();
    }

    render() {
        if(this.state.status == false) {
            return(<div>
                <img src={loading} alt="cargando" />
            </div>)
        } else {
            return (<div>
                <br /><NavLink to="/apuesta/" className="btn btn-danger">Realizar apuesta</NavLink><br />

                <br /><h1 style={{color:"red"}}>Real Madrid vs Liverpool</h1><br />
                {
                    this.state.apuestas.map((apuesta, index) => {
                        return (<table className="table table-success table-striped" key={index} style={{"gridTemplateColums":"auto"}}>
                            <thead>
                                <tr>
                                    <th>USUARIO</th>
                                    <th>RESULTADO</th>
                                    <th>FECHA</th>
                                    <th>OPCION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{apuesta.usuario}</td>
                                    <td>{apuesta.resultado}</td>
                                    <td>{apuesta.fecha}</td>
                                    <td><NavLink to={"/delete/" + apuesta.idApuesta}   className='btn btn-danger'>Eliminar</NavLink></td>
                                </tr>
                            </tbody>
                        </table>)
                    })
                }
            </div>)
        }
    }
}
