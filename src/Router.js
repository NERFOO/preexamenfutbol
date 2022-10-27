import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Equipo from './components/Equipo';
import Home from './components/Home';
import Jugador from './components/Jugador';
import Jugadores from './components/Jugadores';
import Menu from './components/Menu';
import Apuestas from './components/Apuestas';
import Apuesta from './components/Apuesta';


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

        function CargarJugadorUnico () {
            var { idJugador } = useParams();
            return (<Jugador idJugador={idJugador}/>)
        }

        return (<div>
            <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/equipo/:idEquipo' element={<CargarEquipo />} />
                    <Route path='/jugadores/:idEquipo' element={<CargarJugador />} />
                    <Route path='/jugador/:idJugador' element={<CargarJugadorUnico />} />
                    <Route path='/apuestas' element={<Apuestas />} />
                    <Route path='/apuesta' element={<Apuesta />} />
                </Routes>
            </BrowserRouter>
        </div>)
    }
}
