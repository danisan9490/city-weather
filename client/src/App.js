import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

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

        if (resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    }
    consultarAPI();
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No Results" />
  } else {
    componente = <Clima
      resultado={resultado}
    />
  }

  return (
    <div className="App">
      <Header
        titulo='City Weather React App'
      />

      <div>
        <div className="container">
          <div className="row contenedor-form">
            <div className="col m6 s12">
              <Form
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12 componente">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
