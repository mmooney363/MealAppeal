import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Search from "../components/Search";
import "./filter.css";


function FilterPage() {
  return (
    <div>
      <Header />
      <Container className ="search-container">
        <Search />
      </Container>
      <Footer />
    </div>
  );
}

export default FilterPage;
