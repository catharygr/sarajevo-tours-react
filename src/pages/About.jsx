import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import CardHomePage from "../componentes/CardHomePage";

export default function About() {
  return (
    <div className="background-color-home">
      <div className=" home-layout home-layout-blue">
        <Header color="color-orange" />

        <div className="form-container box-shadow-blue">
          <div className="form-contact">
            <h1 className="fs-700 ff-title color-white text-shadow-pink ">
              Sobre este proyecto, stack tecnológico, problemas y soluciones
            </h1>
          </div>
        </div>

        <article className="about-container color-white">
          <h1>Aprendiendo React y Firebase</h1>
          <h3>
            React 18, React router 6, CSS, HTML, Netlify. Firabase Auth y
            Firebase como Backend.
          </h3>
          <div className="about-card">
            <CardHomePage
              card={{
                url: "#",
                title: "Mi portafolio",
                summary:
                  "Proyecto Sarajevo Tours página web de una imaginaria aplicación sobre una tienda online de venta de guias a turistas.",
                imgUrl: "./assets/images/caty-emoji.jpg",
              }}
            />
          </div>
          <div className="parrafo flow">
            <h2 className="ff-title fs-700">CSS</h2>
            <p>
              El uso de flexbox, grid, container-query, fuentes variables, css
              variables, clip-path
            </p>
            <p>
              A base del diseño que he recibido, he decidido usar las siguientes
              herramientas para los componentes que contienen layout, he
              utilizado display grid y flex, para ajustar los container he usado
              container que permite aplicar estilos a un elemento en función del
              tamaño del contenedor del elemento. Las fuentes variables la hemos
              usados para declaraciones de propiedades personalizadas.
            </p>
            <h2 className="ff-title fs-700"> React router 6</h2>
            <p>
              Usando rutas nidadas, rutas relativas, Outles, Link, NavLink,
              parámetros de búsquedas, useLocation, redering condicional,
              useNavigate
            </p>
            <p>
              Con el uso de las rutas nidadas y relativas nos permite crear una
              navegación dinámica. Con el componente Outlet establecimos un
              espacio vacio dentro de los componentes donde renderizamos el
              resultado de una ruta. Con el componente Link que acepta la
              propiedad to para especificar a dónde queremos en que enlace
              navegue el usuario, usando el componente NavLink aplicamos algunos
              estilos especiales. Con los parametros de busquedas como por
              ejemplo useSearchParams para leer los parámetros de búqueda de
              cadena de consulta que necesitamos en URL. El hook useLocation
              localizamos datos de ubicación. Con el rederizado condicional
              creamos elementos representado el estado actual. Con el uso de
              useNavigate nos devolvió una función que nos permitió navegar
              mediante la programación.
            </p>
            <h2 className="ff-title fs-700"> React 18</h2>
            <p>
              Componentes, props, formularios con estado, useEffect, useStates,
              createContext, useRef, createContext
            </p>
            <p>
              Con el uso de los componentes separamos el interfaz de usuario,
              reutilizándolos pasandoles props. El formulario como un componente
              controlado. Usos de los hook mas usados en react para una mejor
              renderización de la web.
            </p>
            <h2 className="ff-title fs-700">Firebase</h2>
            <p>
              Iniciación de la app, colección, getFirestore, getDocs.
              Autentificar, onAuthStateChanged, signInWithEmailAndPassword
              etc...
            </p>
            <h2 className="ff-title fs-700">Netlify</h2>
            <p>
              Envio de formulario, redirección por el pushstate en react, GitHub
              desplegado
            </p>
            <h2 className="ff-title fs-700">Extras</h2>
            <p>ReactMarkdaow, vite-plugin-svgr</p>
            <h2 className="ff-title fs-700">Git</h2>
            <p>Commint, branch, merge, restauración y push</p>
          </div>
          <img src="/assets/images/caty-about.jpg" alt="Mujer esquiando" />
        </article>

        <Footer />
      </div>
    </div>
  );
}
