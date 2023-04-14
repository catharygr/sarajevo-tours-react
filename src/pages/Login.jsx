import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Button from "../componentes/Button";

export default function Login() {
  const navigate = useNavigate();
  const [problemMessage, setProblemMessage] = React.useState("");
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => navigate("/admin"))
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setProblemMessage("Nombre de usario o contraseña incorrecta.");
      });
    setFormData({
      email: "",
      password: "",
    });
  }

  return (
    <div className="background-color-home">
      <div className=" home-layout home-layout-blue">
        <Header color="color-orange" />

        <form
          onSubmit={handleOnSubmit}
          className="form-container box-shadow-blue"
        >
          <div className="form-contact">
            <h1 className="fs-700 ff-title color-white text-shadow-pink ">
              Admin acceso
            </h1>
            {problemMessage && <p>{problemMessage}</p>}
            <div className="name-email">
              <div className="label-container">
                <label htmlFor="email">Nombre de usuario</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleForm}
                />
              </div>
              <div className="label-container">
                <label htmlFor="password">Contraseña</label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleForm}
                />
              </div>
            </div>

            <Button className="btn" color="blue" title="Acceso" />
          </div>
        </form>

        <Footer />
      </div>
    </div>
  );
}
