import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


import App from './App';
import NuestraTecnologíaExclusiva from './Nuestratecnologiaexclusiva'
import AvisoLegal from './avisolegal'


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Switch>
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
						{/* <Profilepsychologist /> */}
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Layout;