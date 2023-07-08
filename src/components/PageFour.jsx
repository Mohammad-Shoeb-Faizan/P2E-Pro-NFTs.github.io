import React, { useState, useEffect } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import Marketplace from "../assets/Marketplace.png";
import profilePic from "../assets/userpic.jpeg";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {
  FaFire,
  FaPalette,
  FaMusic,
  FaVideo,
  FaFutbol,
  FaTools,
  FaCamera,
  FaGamepad,
  FaArrowRight,
  FaSyncAlt,
} from "react-icons/fa";

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

const PageFour = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const characters = data?.characters?.results || [];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [displayCharacters, setDisplayCharacters] = useState([]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filteredResults = characters.filter(
      (character) =>
        character.name.toLowerCase().includes(query) ||
        character.species.toLowerCase().includes(query)
    );
    setFilteredCharacters(filteredResults);
  }, [searchQuery, characters]);

  useEffect(() => {
    let sortedCharacters = [...filteredCharacters];

    if (sortOption === "priceLowToHigh") {
      sortedCharacters = sortedCharacters.sort((a, b) => {
        const priceA = parseFloat(generateRandomNumber());
        const priceB = parseFloat(generateRandomNumber());
        return priceA - priceB;
      });
    } else if (sortOption === "priceHighToLow") {
      sortedCharacters = sortedCharacters.sort((a, b) => {
        const priceA = parseFloat(generateRandomNumber());
        const priceB = parseFloat(generateRandomNumber());
        return priceB - priceA;
      });
    } else if (sortOption === "nameAZ") {
      sortedCharacters = sortedCharacters.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortOption === "nameZA") {
      sortedCharacters = sortedCharacters.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    setDisplayCharacters(sortedCharacters.slice(0, 8));
  }, [sortOption, filteredCharacters]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);
  };

  const generateRandomNumber = () => {
    return (Math.random() * 100).toFixed(2);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="page-four">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
              <h1
                className="text-center text-lg-start"
                style={{ width: "500px" }}
              >
                Marketplace <img src={Marketplace} alt="Marketplace Logo" />
              </h1>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-end mt-3 mt-lg-0">
                <form className="d-flex ms-auto">
                  <div className="input-group">
                    <button className="btn btn-outline-primary" type="submit">
                      <FaSearch />
                    </button>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Collection, item or user"
                      aria-label="Search"
                      value={searchQuery}
                      onChange={handleSearch}
                    />
                  </div>
                </form>
                <select
                  className="form-select ms-3"
                  value={sortOption}
                  onChange={handleSort}
                  style={{ width: "150px" }}
                >
                  <option value="">Sort By</option>
                  <option value="priceLowToHigh">Price: Low to High</option>
                  <option value="priceHighToLow">Price: High to Low</option>
                  <option value="nameAZ">A-Z</option>
                  <option value="nameZA">Z-A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="d-flex justify-content-center flex-wrap">
          <button
            className="btn btn-light rounded-pill mx-2 px-2"
            style={{ borderRadius: "30px" }}
          >
            <FaFire className="me-3" />
            Trendings
          </button>
          <button
            className="btn btn-light rounded-pill mx-2 px-2"
            style={{ borderRadius: "30px" }}
          >
            <FaPalette className="me-3" />
            Art
          </button>
          <button
            className="btn btn-light rounded-pill mx-2 px-2"
            style={{ borderRadius: "30px" }}
          >
            <FaMusic className="me-3" />
            Music
          </button>
          <button
            className="btn btn-light rounded-pill mx-2 px-2"
            style={{ borderRadius: "30px" }}
          >
            <FaVideo className="me-3" />
            Videos
          </button>
          <button
            className="btn btn-light rounded-pill mx-2 px-2"
            style={{ borderRadius: "30px" }}
          >
            <FaFutbol className="me-3" />
            Sports
          </button>
          <button
            className="btn btn-light rounded-pill mx-2 px-2"
            style={{ borderRadius: "30px" }}
          >
            <FaTools className="me-3" />
            Utility
          </button>
          <button
            className="btn btn-light rounded-pill mx-2 px-2"
            style={{ borderRadius: "30px" }}
          >
            <FaCamera className="me-3" />
            Photography
          </button>
          <button
            className="btn btn-light rounded-pill mx-2 px-2"
            style={{ borderRadius: "30px" }}
          >
            <FaGamepad className="me-3" />
            Game
          </button>
          <button
            className="btn btn-light rounded-pill mx-2 px-2"
            style={{ borderRadius: "30px" }}
          >
            See More <FaArrowRight className="ms-3" />
          </button>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row justify-content-center">
          {displayCharacters.map((character) => (
            <div className="col-md-4 col-lg-3 mb-4" key={character.id}>
              <div className="card border-primary bg-secondary">
                <div className="card-body text-center">
                  <div className="d-flex align-items-center mb-2 justify-content-between">
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
                    <img
                      src={character.image}
                      alt={character.name}
                      className="img-fluid"
                      style={{ borderRadius: "20px" }}
                    />
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
                  <div className="title mt-3 ">{character.species}</div>
                </div>
                <div className="additional-info d-flex align-items-center justify-content-between p-2 text-light bg-dark">
                  <div className="random-number">
                    {generateRandomNumber()} ETH
                  </div>
                  <button className="btn btn-secondary">Place Your Bid</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-secondary py-1 mb-5"
          style={{ borderRadius: "5px", width: "50%" }}
        >
          <FaSyncAlt className="me-2" />
          View all items
        </button>
      </div>
    </div>
  );
};

export default PageFour;
