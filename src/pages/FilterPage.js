import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";

function FilterPage() {
  return (
    <div>
      <Header />
      <Container>
       <SearchResults />
      </Container>
      <Footer />
    </div>
  );
}

export default FilterPage;
