import React from "react";
import CardHome from "../componentes/CardHome";

export default function HomeCards() {
  const dataCards = [
    {
      title: "Esquí alpino y snowboard",
      imgUrl: "/assets/images/ski-card.jpg",
      description:
        "Disfrute de Jahorina y Bjelasnica, dos impresionantes montañas olímpicas ubicadas a solo 25 km del centro de la ciudad.",
    },
    {
      title: "Ciclismo de montaña +300km de caminos",
      imgUrl: "/assets/images/bike-card.jpg",
      description:
        "Más de 300 km de caminos panorámicos y naturaleza pura en Bjelasnica e Igman para uno o si te atreves para aventuras de varios días...",
    },
    {
      title: "Caminatas por alimentos y postres",
      imgUrl: "/assets/images/food-card.jpg",
      description:
        "¿Quiere probar Sarajevo? Obtenga nuestro recorrido y sepa qué y dónde comer. Todo reservado con antelación, desayuno, almuerzo, cena. Y dulces.",
    },
    {
      title: "Visita todos los lugares históricos importantes.",
      imgUrl: "/assets/images/history-card.jpg",
      description:
        "No pierdas tiempo buscando lugares importantes, obtén nuestras guías detalladas con navegación GPS...",
    },
  ];

  const mapear = dataCards.map((card) => (
    <CardHome key={card.imgUrl} card={card} />
  ));

  return <div className="home-card-grid">{mapear}</div>;
}
