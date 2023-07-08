import React, { useState } from "react";
import first from "../assets/01.png";
import second from "../assets/02.png";
import third from "../assets/03.png";
import pagesix from "../assets/pagesix.png";

const PageSix = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      logo: first,
      title: "Buy and sell your NFTs",
      description: "Trading NFTs made Easy for you",
    },
    {
      id: 2,
      logo: second,
      title: "Discover top artist & creators",
      description:
        "Explore beautiful digital art by talented artists around the world",
    },
    {
      id: 3,
      logo: third,
      title: "Earn money by trading NFTs",
      description:
        "Your NFTs for sale on Rarible is a quick process that should take around 5 minutes",
    },
  ];

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  return (
    <div
      className="container my-4"
      style={{
        minHeight: "80vh",
        background: `url(${pagesix}) no-repeat center`,
        backgroundSize: "cover",
        zIndex: -1,
      }}
    >
      <h1 className="text-center my-4">
        Mint, buy and sell
        <br />
        or just launch your own NFT Store
      </h1>
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4 mb-4" key={card.id}>
            <div
              className={`card p-5 bg-transparent border-2 ${
                hoveredCard === card.id ? "border-primary" : "border-light"
              }`}
              style={{ minHeight: "60vh" }}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <div
                className="card-img-top rounded-circle mx-auto mt-3"
                style={{
                  width: "180px",
                  height: "180px",
                  background: `url(${card.logo}) no-repeat center/cover`,
                }}
              ></div>
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                {hoveredCard === card.id && (
                  <p className="card-text text-xl">{card.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSix;
