import React from "react";
import { Pacient } from "./Pacient";

export const ListPacients = ({ pacients, setpacientSelected,setPacients }) => {
  console.log(pacients.length);
  return (
    <section className="listpacients">
      {pacients.length !== 0 ? (
        <>
          <h2>Listado de pacientes</h2>
          <h3>
            Administra tus pacientes y <span>citas</span>
          </h3>
        </>
      ) : (
        <h2>Ingrese algún paciente en el formulario</h2>
      )}

      {pacients.length > 0 ? pacients.map((pacient) => {
        return (
          <Pacient key={pacient.id} pacient={pacient} setpacientSelected={setpacientSelected} pacients={pacients} setPacients={setPacients}/>
        );
      }) : null}
    </section>
  );
};
