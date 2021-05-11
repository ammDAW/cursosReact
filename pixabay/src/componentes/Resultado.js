import React, { Component } from 'react';
import Imagen from './Imagen';

export default class Resultado extends Component {
    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes;
        if(imagenes.length === 0) return null;
        
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen => (
                        <Imagen />    
                    ))}
                </div>
            </React.Fragment>
        )
    }
    
    
    render() {
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }
}
