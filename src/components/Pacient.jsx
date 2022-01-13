import React from "react";

export const Pacient = ({ pacient, setpacientSelected, pacients,setPacients }) => {
  const { name, owner, email, alta, sintomas, id } = pacient;
  const handleEdit = () => {
    setpacientSelected({...pacient});
  };
  const handleDelete= ()=>{
    const newArray = pacients.filter((item)=>item.id !== pacient.id)
    setPacients(newArray)
  }
  return (
    <section className="pacient">
      <p>
        NOMBRE: <span>{name}</span>{" "}
      </p>
      <p>
        PROPIETARIO: <span>{owner}</span>{" "}
      </p>
      <p>
        EMAIL: <span>{email}</span>{" "}
      </p>
      <p>
        FECHA ALTA: <span>{alta}</span>{" "}
      </p>
      <p>
        SINTOMAS: <span>{sintomas}</span>{" "}
      </p>
      <div className="buttons_container">
        <button className="btn" onClick={handleEdit}>
          EDITAR
        </button>
        <button className="btn" onClick={handleDelete}>ELIMINAR</button>
      </div>
    </section>
  );
};
