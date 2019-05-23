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

	// we compose the context here to pass it down
	const context = { count, setCount, theme, setTheme };

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
