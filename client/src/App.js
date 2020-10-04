import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = '3474cbad59a643bcfa72ef477262b036';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado)
        guardarResultado(resultado);
        guardarConsultar(false);
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
              <Clima
                resultado={resultado}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
