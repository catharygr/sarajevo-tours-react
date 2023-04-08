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
          <h3>React 18, React router 6, CSS, HTML, Netlify.</h3>
          <div className="about-card">
            <CardHomePage
              card={{
                url: "#",
                title: "Mi portafolio",
                summary: "hfhgf",
                imgUrl: "./assets/images/bike-card.jpg",
              }}
            />
          </div>
          <div className="parrafo flow">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
              eget mauris pharetra et ultrices neque ornare aenean euismod.
              Malesuada fames ac turpis egestas sed tempus urna et. Habitasse
              platea dictumst quisque sagittis purus sit. Et leo duis ut diam
              quam nulla porttitor massa. Rhoncus dolor purus non enim praesent
              elementum facilisis. Fringilla est ullamcorper eget nulla
              facilisi. Tempus imperdiet nulla malesuada pellentesque elit eget
              gravida cum sociis. Consectetur adipiscing elit duis tristique
              sollicitudin nibh sit. Pulvinar etiam non quam lacus suspendisse
              faucibus interdum posuere. Est sit amet facilisis magna etiam
              tempor orci eu.
            </p>
            <p>
              Id faucibus nisl tincidunt eget nullam non nisi. Eget nulla
              facilisi etiam dignissim diam quis. In mollis nunc sed id. Magnis
              dis parturient montes nascetur. Nunc scelerisque viverra mauris in
              aliquam sem. Vestibulum rhoncus est pellentesque elit ullamcorper
              dignissim cras tincidunt. Luctus venenatis lectus magna fringilla
              urna. Lectus urna duis convallis convallis tellus. Nulla facilisi
              nullam vehicula ipsum a arcu cursus vitae. Pretium lectus quam id
              leo. Malesuada nunc vel risus commodo. Eget magna fermentum
              iaculis eu non diam. Mattis vulputate enim nulla aliquet porttitor
              lacus luctus accumsan tortor. Vitae nunc sed velit dignissim
              sodales ut eu. Libero nunc consequat interdum varius sit amet
              mattis. Fringilla urna porttitor rhoncus dolor purus non enim
              praesent. Posuere urna nec tincidunt praesent semper feugiat nibh
              sed. Consequat semper viverra nam libero justo laoreet sit amet
              cursus. Risus ultricies tristique nulla aliquet enim tortor at
              auctor urna. Viverra ipsum nunc aliquet bibendum enim facilisis
              gravida neque. Libero volutpat sed cras ornare.
            </p>
            <p>
              {" "}
              Pellentesque habitant morbi tristique senectus et netus. Velit
              euismod in pellentesque massa placerat duis ultricies. Felis eget
              velit aliquet sagittis id consectetur purus ut. Ornare suspendisse
              sed nisi lacus sed. Vel risus commodo viverra maecenas accumsan.
              Tellus elementum sagittis vitae et leo. Nisl vel pretium lectus
              quam id leo. Risus nullam eget felis eget nunc lobortis.
            </p>
          </div>
          <img src="/assets/images/bike-card.jpg" alt="Bicicleta" />
        </article>

        <Footer />
      </div>
    </div>
  );
}
