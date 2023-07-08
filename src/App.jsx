import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageFive from "./components/PageFive";
import Footer from "./components/Footer";
import PageSix from "./components/PageSix";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
        <PageSix />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
