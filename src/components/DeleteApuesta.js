import axios from 'axios';
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Global from '../Global';

export default class DeleteApuesta extends Component {

    state = {
        status : false ,
        mensaje : ""
    }

    eliminarApuesta = () => {
        var id = this.props.idApuesta;
        var request = "/api/Apuestas/" + id;
        var url = Global.url + request;

        axios.delete(url).then( res => {
            this.setState({
                mensaje : "Se ha eliminado"

            });
        });
    }

    render() {
        if(this.state.status == true) {
            return (<Navigate to="/apuestas" />);
        } else {
            return (<div>
                <h1>Eliminar Apuesta</h1>

                <button onClick={this.eliminarApuesta} className="btn btn-danger">Eliminar apuesta</button>
                <h2>{this.state.mensaje}</h2>
            </div>)
        }
    }
}
