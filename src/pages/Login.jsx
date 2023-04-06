import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Button from "../componentes/Button";

export default function Login() {
  return (
    <div className="background-color-home">
      <div className=" home-layout home-layout-blue">
        <Header color="color-orange" />

        <div className="form-container box-shadow-blue">
          <div className="form-contact">
            <h1 className="fs-700 ff-title color-white text-shadow-pink ">
              Admin acceso
            </h1>
            <div className="name-email">
              <div className="label-container">
                <label htmlFor="email">Nombre de usuario</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="label-container">
                <label htmlFor="password">Contraseña</label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </div>

            <Button className="btn" color="blue" title="Acceso" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
