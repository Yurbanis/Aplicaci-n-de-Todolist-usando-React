import React, { useState, useEffect } from "react";
import "../../styles/index.css";

//include images into your bundle

//create your first component
const Home = () => {
  const [listaPalabra, setlistaPalabra] = useState([]);

  const insertar = (item) => {
    const valorNuevo = { id: listaPalabra.length + 1, name: item };
    const lista = [...listaPalabra, valorNuevo];
    setlistaPalabra(lista);
  };

  const delet = (nameDelete) => {
    setlistaPalabra(listaPalabra.filter((item) => item.name !== nameDelete));
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <h1 className="text-center tod">todos</h1>
        <ul className="list-group col-md-5 mt-5">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <input
              type="text"
              onKeyUp={(e) =>
                e.code === "NumpadEnter" || e.code === "Enter" ? insertar(e.target.value) : null
              }
              className="form-control"
              id=""
            />
          </li>
          {listaPalabra.map((listar) => {
            return (
              <li
                key={listar.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {listar.name}
                <span
                  className=""
                  onClick={() => delet(listar.name)}
                >
                  <i className="fas fa-times"></i>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;