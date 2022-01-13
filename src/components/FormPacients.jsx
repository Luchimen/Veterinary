import React, { useEffect, useState } from "react";
import { Error } from "./Error";

export const FormPacients = ({ setPacients, pacients,pacientSelected,setpacientSelected }) => {
  let initialValue = {
    name: "",
    owner: "",
    email: "",
    alta: "",
    sintomas: "",
  };
  // if (Object.keys(pacient).length !== 0) {
  //   setInputs({ ...pacient });
  // }
  const [inputs, setInputs] = useState(initialValue);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacientSelected).length !== 0) {
      setInputs({ ...pacientSelected });
    }

  }, [pacientSelected]);

  const { name, owner, email, alta, sintomas } = inputs;
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, owner, email, alta, sintomas].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    if(pacientSelected.id){
      const editPacient = pacients.map((item)=>{
        item.id === pacientSelected.id ? item = inputs : null
        return item
      })
      setPacients([...editPacient])
      setpacientSelected({...initialValue})
      
    }else{
      inputs.id = Date.now()
      setPacients([...pacients, inputs]);
    }
    setInputs({...initialValue});
  };
  return (
    <section className="formpacients">
      <h2>Seguimiento de Pacientes</h2>
      <form onSubmit={handleSubmit} className="form">
        <h3>
          Añade pacientes y <span>administralos</span>
        </h3>
        {error ? (
          <Error message={"Deben estar todos los campos completos"} />
        ) : null}
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
          value={owner}
          onChange={handleChange}
          className="form__input"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su Email"
          id="email"
          value={email}
          onChange={handleChange}
          className="form__input"
        />
        <label htmlFor="alta">Alta</label>
        <input
          type="date"
          name="alta"
          id="alta"
          className="form__input"
          value={alta}
          onChange={handleChange}
        />

        <label htmlFor="sintomas">Sintomas</label>
        <textarea
          name="sintomas"
          id="sintomas"
          cols="30"
          rows="10"
          value={sintomas}
          onChange={handleChange}
        />
        <button className="form__inputbtn" type="submit">
          AGREGAR PACIENTE
        </button>
      </form>
    </section>
  );
};
