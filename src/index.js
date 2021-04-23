import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Navbarpage from './Navbarpage';
import Footer from './Footer';

import App from './App';
import NuestraTecnologíaExclusiva from './Nuestratecnologiaexclusiva'
import AvisoLegal from './avisolegal'


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbarpage/>
      <Switch>
					<Route exact path="/home">
						<App />
					</Route>
          <Route exact path="/">
						<App />
					</Route>
					<Route exact path="/nuestra-tecnologia-exclusiva">
						<NuestraTecnologíaExclusiva/>
					</Route>
					<Route exact path="/aviso-legal">
						<AvisoLegal />
					</Route>
					<Route exact path="/politica-privacidad">
						{/* <PoliticaPrivacidad /> */}
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
      <Footer/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
