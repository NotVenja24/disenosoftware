import React from "react";
import  magallanes from './Magallanes.jpg'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure';
import equipo from './mocking/equipo';
import Perfiles from './card'

function Nosotros() {
  
  return(
    <div className="container p-5 my-5 border">
        <center><h1>Nosotros</h1></center>
        <p align='center'>Nos dedicamos a entregar crear recurdos. Nuestra misión es que cada persona que viaja con nuestros servicios, cree recuerdos de los lugares que visitó, generando experiencias y momentos que los acompañarán toda su vida.</p>
        <center>
          <img
            className="img-thumbnail rounded"
            src={require('./Magallanes.jpg')}
            width="800" height="800"
          />
        </center>
        <br></br>
        <center><h2>Equipo</h2></center>
        <div className="row">
          {
            equipo.map(obj=>{
              return(
                <div className='col-md-4'>
                  <center /><Perfiles Name={obj.nombre} Corp={obj.funcion} Imagen={obj.imagen} ></Perfiles>
                </div>
              );
            })
          }
        </div>
        
        
    </div>  
  );
}

export default Nosotros;
