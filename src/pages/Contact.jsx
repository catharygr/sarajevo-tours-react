import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Button from "../componentes/Button";

export default function Contact() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  console.log(formData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((oldFormData) => {
      return {
        ...oldFormData,
        [name]: value,
      };
    });
  }
  function handleSuccess() {
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
    setIsSuccess(true);
  }

  // Conexión a formulario de Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", formData }),
    })
      .then(handleSuccess)
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className="background-color-home">
      <div className=" home-layout home-layout-blue">
        <Header color="color-orange" />

        <div className="form-container box-shadow-blue">
          {!isSuccess ? (
            <form className="form-contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <h1 className="fs-700 ff-title color-white text-shadow-pink ">
                Escríbeme
              </h1>
              <div className="name-email">
                <div className="label-container">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    className="form-input"
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.mensaje}
                  onChange={handleChange}
                />
              </div>
              <Button className="btn" color="blue" title="Enviar mensaje" />
            </form>
          ) : (
            <>
              <h1 className="fs-700 ff-title color-white text-shadow-pink">
                Éxito!
              </h1>
              <p>
                Su mensaje se ha enviado con éxito. Muchas gracias!, puedes
                <a className="underline" href="/">
                  {" "}
                  regresar a la página de inicio
                </a>
              </p>
            </>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
