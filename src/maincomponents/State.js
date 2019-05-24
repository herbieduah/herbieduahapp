import React, { createContext, useState, useContext } from "react";

// Will hold global state
export const globalState = createContext();

const Provider = globalState.Provider;

/**
 * All children of this component can,
 * if they use `useContext(globalState)`,
 * have access to the state inside
 */
export const StateProvider = ({ children }) => {
	// state gets created here. Those will be available to any component
	// that uses `useContext`
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState("light");
	const [contentWidth, onContentResizeWidth] = useState(0);
	const [contentHeight, onContentResizeHeight] = useState(0);

	// we compose the context here to pass it down
	const context = {
		count,
		setCount,
		theme,
		setTheme,
		contentHeight,
		onContentResizeHeight,
		contentWidth,
		onContentResizeWidth
	};

	// and we pass it down. Done!
	// We just need to include `<ContextProvider>` somewhere at the root
	// of our app
	return <Provider value={context}>{children}</Provider>;
};

/**
 * Small shortcut
 * Instead of using `useContext(globalState)` every time,
 * and having to import `useContext` and `globalState`,
 * with this, we can just import `useGlobalState()`
 */
export const useGlobalState = () => useContext(globalState);
