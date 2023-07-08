import React, { useState } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import line from "../assets/line.png";
import profilePic from "../assets/userpic.jpeg";
import { FaArrowRight, FaArrowLeft, FaHeart } from "react-icons/fa";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        status
        species
      }
    }
  }
`;

const generateRandomNumber = () => {
  return (Math.random() * 100).toFixed(2);
};

const PageTwo = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const characters = data?.characters?.results || [];
  const visibleCharacters = characters.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
  };

  const handleViewAll = () => {
    console.log("View All");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="page-two">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
              <h1 className="text-center text-lg-start" style={{ width: "500px" }}>
                Trending Auctions
              </h1>
              <div className="dot-line d-flex align-items-center">
                <img src={line} alt="line" style={{ maxWidth: "90%" }} />
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-end mt-3 mt-lg-0">
                <button
                  className="btn btn-outline-dark me-2 rounded-circle bg-light"
                  onClick={handlePrevious}
                >
                  <FaArrowLeft />
                </button>
                <button
                  className="btn btn-outline-dark me-2 rounded-circle bg-light"
                  onClick={handleNext}
                >
                  <FaArrowRight />
                </button>
                <button className="btn btn-outline-dark" style={{ width: "150px" }} onClick={handleViewAll}>
                  View All <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row justify-content-center">
          {visibleCharacters.map((character) => (
            <div className="col-md-4 col-lg-3 mb-4" key={character.id}>
              <div className="card border-primary bg-secondary">
                <div className="card-body text-center">
                  <div className="d-flex align-items-center mb-3 justify-content-between">
                    <img
                      src={profilePic}
                      alt="Profile Picture"
                      className="rounded-circle me-3 profile-pic"
                      style={{ width: "30px" }}
                    />
                    <span>@rickandmorty</span>
                    <FaHeart className="ml-auto like-icon" />
                  </div>
                  <div className="image-container mb-3">
                    <img src={character.image} alt={character.name} className="img-fluid" />
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src={profilePic}
                      alt="Profile Picture"
                      className="rounded-circle me-3 profile-pic"
                      style={{ width: "30px" }}
                    />
                    <span className="author-name">{character.name}</span>
                  </div>
                  <div className="title mt-3 mb-2">{character.species}</div>
                  <div className="details">Status: {character.status}</div>
                </div>
                <div className="additional-info d-flex align-items-center justify-content-between p-2 bg-info">
                  <div className="random-number">
                    Current Bid  <br />
                    {generateRandomNumber()} ETH
                  </div>
                  <div>
                    Ending In <br /> 07Hr 32M 3S
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
