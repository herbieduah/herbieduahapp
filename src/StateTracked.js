import React, { useReducer } from "react";
// import { defaultContentWidth, defaultContentHeight } from "./helpers.js";
import { Provider } from "react-tracked";

// Will hold global state
// export const globalState = createContext();

// const Provider = globalState.Provider;

/**
 * All children of this component can,
 * if they use `useContext(globalState)`,
 * have access to the state inside
 */
const initialState = {
	boolbool: true,
	stringstring: "hello"
};

const reducer = (state, action) => {
	switch (action.type) {
		case "setBoolBoolFalse":
			return { ...state, boolbool: false };
		case "setBoolBoolTrue":
			return { ...state, boolbool: true };
		case "setStringString":
			return { ...state, stringstring: action.stringstring };
		default:
			throw new Error(`unknown action type: ${action.type}`);
	}
};

const useValue = () => useReducer(reducer, initialState);

export const UseTrackedProvider = ({ children }) => {
	// state gets created here. Those will be available to any component
	// that uses `useContext`

	// const [switchSides, setSides] = useState(true);
	// const [contentWidth, onContentResizeWidth] = useState(defaultContentWidth);
	// const [contentHeight, onContentResizeHeight] = useState(defaultContentHeight);
	// const [currentTheme, setTheme] = useState("cartographer");
	// const [currentTransition, setCurrentTransition] = useState("default");
	// const [currentContent, setCurrentContent] = useState("home");
	// const [overlay, setOverlay] = useState(false);
	// const [currentOverlay, setCurrentOverlay] = useState("");
	// const [dimensions, setDimensions] = useState({});
	// const [dragging, setDragging] = useState(false);
	// const [fullScreening, setFullScreening] = useState(false);
	// const [fullScreen, setFullscreen] = useState(false);
	// const [navBarRight, setNavBarRight] = useState(false);
	// const [modalVisible, setModalVisible] = useState(false);
	// const [navBarComplement, setNavBarComplement] = useState(false);
	// const [minimalMode, setMinimalMode] = useState(false);
	// const [lazyLoading, setLazyLoading] = useState(true);
	// const [techy, setTechy] = useState(false);
	// const [knowYou, setKnowYou] = useState(false);
	// const [modalContent, setModalContent] = useState("");
	// const [whom, setWhom] = useState("everyone");
	// currentLeftTop: "LandscapePhotography",
	//   currentTheme: "default",
	//   defaultAppTheme: defaultAppTheme,
	//   splitDirection: splitDir(window.innerWidth),
	//   showOverlay: false,
	//   currentOverlay: ""

	// we compose the context here to pass it down
	// const context = {
	// 	currentTheme,
	// 	setTheme,
	// 	switchSides,
	// 	setSides,
	// 	contentHeight,
	// 	onContentResizeHeight,
	// 	contentWidth,
	// 	onContentResizeWidth,
	// 	currentContent,
	// 	setCurrentContent,
	// 	overlay,
	// 	setOverlay,
	// 	currentOverlay,
	// 	setCurrentOverlay,
	// 	dimensions,
	// 	setDimensions,
	// 	dragging,
	// 	setDragging,
	// 	fullScreen,
	// 	setFullscreen,
	// 	fullScreening,
	// 	setFullScreening,
	// 	modalVisible,
	// 	setModalVisible,
	// 	modalContent,
	// 	setModalContent,
	// 	whom,
	// 	setWhom,
	// 	navBarRight,
	// 	setNavBarRight,
	// 	currentTransition,
	// 	setCurrentTransition,
	// 	navBarComplement,
	// 	setNavBarComplement,
	// 	minimalMode,
	// 	setMinimalMode,
	// 	lazyLoading,
	// 	setLazyLoading,
	// 	knowYou,
	// 	setKnowYou,
	// 	techy,
	// 	setTechy
	// };

	// and we pass it down. Done!
	// We just need to include `<ContextProvider>` somewhere at the root
	// of our app
	return <Provider useValue={useValue}>{children}</Provider>;
};

/**
 * Small shortcut
 * Instead of using `useContext(globalState)` every time,
 * and having to import `useContext` and `globalState`,
 * with this, we can just import `useGlobalState()`
 */
// export const useGlobalState = () => useContext(globalState);