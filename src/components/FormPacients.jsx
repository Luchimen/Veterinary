import React, { useState } from "react";

export const FormPacients = () => {
  const [inputs, setInputs] = useState({
    name: "",
    owner: "",
    email: "",
    alta: "",
    sintomas: "",
  });

  const { name, owner, email, alta, sintomas } = inputs;
  const handleChange = (e) => {
    e.preventDefault();
    console.log("desde el button from");
    setInputs({
      ...inputs,
      name,
    });
  };

  return (
    <section className="formpacients">
      <h2>Seguimiento de Pacientes</h2>
      <form onSubmit={handleChange} className="form">
        <h3>
          Añade pacientes y <span>administralos</span>
        </h3>
        <label htmlFor="name">Nombre Mascota</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Nombre de Mascota"
          id="name"
          className="form__input"
        />
        <label htmlFor="owner">Nombre de Propietario</label>
        <input
          type="text"
          name="owner"
          placeholder="Nombre de Propietario"
          id="owner"
          className="form__input"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su Email"
          id="email"
          className="form__input"
        />
        <label htmlFor="alta">Alta</label>
        <input type="date" name="alta" id="alta" className="form__input" />

        <label htmlFor="sintomas">Sintomas</label>
        <textarea name="sintomas" id="sintomas" cols="30" rows="10"></textarea>
        <button className="form__inputbtn" type="submit">
          AGREGAR PACIENTE
        </button>
      </form>
    </section>
  );
};
