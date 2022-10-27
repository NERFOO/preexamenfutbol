import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { Navigate, NavLink } from 'react-router-dom';
import loading from './../assets/images/img1.jpg';

export default class Apuesta extends Component {

    state = {
        status : false ,
        apuesta : {}
    }

    id = React.createRef();
    usuario = React.createRef();
    resultado = React.createRef();
    fecha = React.createRef();

    cargarApuesta = (e) => {
        e.preventDefault();

        var id = parseInt(this.id.current.value);
        var usuario = this.usuario.current.value;
        var resultado = this.resultado.current.value;
        var fecha = this.fecha.current.value;

        var data = {
            idApuesta : id ,
            usuario : usuario ,
            resultado : resultado ,
            fecha : fecha
        }

        var request = "/api/Apuestas/";
        var url = Global.url + request;

        axios.post(url, data).then(res => {
            this.setState({
                status : true
            });
        });

    }

    render() {
        if(this.state.status == true) {
            return (<Navigate to="/apuestas"/>)
        } else {
            return (<div>
                <h1>Nueva Apuesta</h1>

                <form style={{display:"flex", flexDirection:"column", margin:"7%"}}>
                    <label>Id</label>
                    <input type="number" className='form-control' ref={this.id} />
                    <label>Usuario</label>
                    <input type="text" className='form-control' ref={this.usuario} required/>
                    <label>Resultado</label>
                    <input type="text" className='form-control' ref={this.resultado} required/>
                    <label>Fecha</label>
                    <input type="date" ref={this.fecha} required/>

                    <button onClick={this.cargarApuesta} className="btn btn-primary">Nueva Apuesta</button>
                </form>

            </div>)
        }
    }
}
