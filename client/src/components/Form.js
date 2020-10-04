import React, { useState } from 'react';

const Form = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

  const { ciudad, pais } = busqueda;
  const [error, guardarError] = useState(false);

  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = e => {
    e.preventDefault();

    if (ciudad.trim() === '' || pais.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarConsultar(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      {error ? <p className="red darken-4 error">All fields are required</p> : null}

      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">City: </label>
      </div>

      <div className="input-field col s12">
        <select
          name="pais"
          id="pais"
          value={pais}
          onChange={handleChange}
        >
          <option value="">-- Choose Country --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Country: </label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Search"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
}

export default Form; 