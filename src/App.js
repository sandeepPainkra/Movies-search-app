import { Container } from "@material-ui/core";
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import MainNav from "./Components/MainNav";
import Trending from "./Pages/Trending.js";
import Movies from "./Pages/Movies.js";
import Series from "./Pages/Series.js";
import Search from "./Pages/Search.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Container className="container">
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <MainNav />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
