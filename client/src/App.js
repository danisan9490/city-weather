import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, guardarConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = '';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado);
      }
    }
    consultarAPI();
  }, [consultar]);

  return (
    <div className="App">
      <Header />


      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              2
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
