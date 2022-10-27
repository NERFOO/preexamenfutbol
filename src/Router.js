import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Equipo from './components/Equipo';
import Home from './components/Home';
import Jugadores from './components/Jugadores';
import Menu from './components/Menu';


export default class Router extends Component {

    render() {

        function CargarEquipo () {
            var { idEquipo } = useParams();
            return (<Equipo idEquipo={idEquipo}/>)
        }

        function CargarJugador () {
            var { idEquipo } = useParams();
            return (<Jugadores idEquipo={idEquipo}/>)
        }

        return (<div>
            <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/equipo/:idEquipo' element={<CargarEquipo />} />
                    <Route path='/jugadores/:idEquipo' element={<CargarJugador />} />
                </Routes>
            </BrowserRouter>


        </div>)
    }
}
