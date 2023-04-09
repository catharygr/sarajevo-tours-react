import React from "react";
import CardHomePage from "../componentes/CardHomePage";
import { getProducts, skiQuery } from "../firebase";

export default function HomeCards() {
  getProducts(skiQuery);
  const dataCards = [
    {
      title: "Esquí alpino y snowboard",
      url: "/esquiar",
      imgUrl: "/assets/images/ski-card.jpg",
      description:
        "Disfrute de Jahorina y Bjelasnica, dos impresionantes montañas olímpicas ubicadas a solo 25 km del centro de la ciudad.",
    },
    {
      title: "Ciclismo de montaña +300km de caminos",
      url: "/mtb",
      imgUrl: "/assets/images/bike-card.jpg",
      description:
        "Más de 300 km de caminos panorámicos y naturaleza pura en Bjelasnica e Igman para uno o si te atreves para aventuras de varios días...",
    },
    {
      title: "Caminatas por alimentos y postres",
      url: "/caminar?type=food",
      imgUrl: "/assets/images/food-card.jpg",
      description:
        "¿Quiere probar Sarajevo? Obtenga nuestro recorrido y sepa qué y dónde comer. Todo reservado con antelación, desayuno, almuerzo, cena. Y dulces.",
    },
    {
      title: "Visita todos los lugares históricos importantes.",
      url: "/caminar?type=history",
      imgUrl: "/assets/images/history-card.jpg",
      description:
        "No pierdas tiempo buscando lugares importantes, obtén nuestras guías detalladas con navegación GPS...",
    },
  ];

  const mapear = dataCards.map((card) => {
    const { title, imgUrl, description, url } = card;
    return (
      <CardHomePage
        key={card.imgUrl}
        card={{ title, imgUrl, description, url }}
      />
    );
  });

  return <div className="home-card-grid">{mapear}</div>;
}
