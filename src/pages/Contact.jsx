import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function Contact() {
  return (
    <div className="background-color-home">
      <div className=" home-layout home-layout-blue">
        <Header color="color-orange" />

        <div className="form-container box-shadow-blue">
          <form className="form-contact" action="">
            <h1 className="fs-700 ff-title color-white text-shadow-pink ">
              Escríbeme
            </h1>
            <div className="name-email">
              <div className="label-container">
                <label htmlFor="name">Nombre</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="label-container">
                <label htmlFor="email">Email</label>
                <input
                  className="form-input"
                  required
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div className="label-container">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                className="form-input"
                name="mensaje"
                id="mensaje"
                cols="20"
                rows="5"
              />
            </div>
            <button className="btn btn-green">Enviar mensaje</button>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
}
