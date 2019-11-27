import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StateProvider } from "./State";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
const Main = () => {
	return (
		<StateProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StateProvider>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
