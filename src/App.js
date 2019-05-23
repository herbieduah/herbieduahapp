import React, { useContext } from "react";
import { globalState } from "./maincomponents/State";
import {
	DecrementButton,
	IncrementButton,
	ThemeSelector
} from "./maincomponents/Controls";

const createStyle = theme => {
	return {
		fontFamily: "sans-serif",
		textAlign: "center",
		padding: "2em",
		width: "100%",
		transition: "background-color .3s, color .2s .4s ease-out",
		backgroundColor: theme === "light" ? "#fdfdfd" : "#222",
		color: theme === "light" ? "#222" : "#fdfdfd"
	};
};

export const App = () => {
	const { theme, count, setCount } = useContext(globalState);
	const style = createStyle(theme);
	return (
		<div style={style}>
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(0)}>Reset</button>
			<DecrementButton />
			<IncrementButton />
			<ThemeSelector />
		</div>
	);
};
