import React from "react";
import Loader from "./Loader";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div class="container">
      <div className="App">
        <header className="App-header">
          <Loader />
          <h1>Weather App</h1>
          <Weather />
        </header>
        <Footer />
      </div>
    </div>
  );
}

export default App;
