import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import MovieForm from "./components/movieForm";
import Movie from "./components/movie";
import Navbar from "./components/navbar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import NotFound from "./components/common/notFound";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movie} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
