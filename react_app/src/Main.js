import React, { Component, useState, useEffect } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Dash/Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import './styles.scss';


function Main() {

  {/* set state */}
  const [page, setPage] = useState([]);


  {/* fetch api */}
  useEffect(() => {
    fetch(`https://www.affirmations.dev/`)
      .then(res => res.json())
      .then((response) => {
        document.write(response);
        setPage(response['affirmation']);
      })
      .catch(error => console.log(error));
  }, [page]);


  {/* display data */}
    return (
      <HashRouter>
        <div>
          <h1>Mitchell LaBauve</h1>
          <ul className="header">
            <li><NavLink exact to="/">Dash{page}</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }


export default Main;
