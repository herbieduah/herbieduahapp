import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StateProvider } from "./State";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle } from "./stylecomponents/Base";
const Main = () => {
	return (
		<React.Fragment>
			<GlobalStyle />

			<StateProvider>
				<App />
			</StateProvider>
		</React.Fragment>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
