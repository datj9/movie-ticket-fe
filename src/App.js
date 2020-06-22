import React from "react";
import "./App.less";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' component={MoviePage} />
            </Switch>
        </Router>
    );
}

export default App;
