import React, { Component } from 'react';
import finalChampions from './../assets/images/img2.jpg';

export default class Home extends Component {

    render() {
        return (<div>
            <h1>Home</h1>

            <img src={finalChampions} style={{width:"100%", padding:"7%"}} />

        </div>)
    }
}
