import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: "William",
    apellido: "Quijano",
  };
  const [clock, setClock] = useState(initialState);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setClock((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }

  return (
    <div>
      <h2>
        Hora Actual:
        {clock.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {clock.nombre} {clock.apellido}
      </h3>
      <h1>Edad: {clock.edad}</h1>
    </div>
  );
};

export default Clock;
