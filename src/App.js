import React from "react";
import "./App.css";
import Movie from "./components/movie";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";

function App() {
  return (
    <main className="container">
      <Movie />
    </main>
  );
}

export default App;
