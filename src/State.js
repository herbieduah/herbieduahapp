import React, { createContext, useState, useContext } from "react";
import { defaultContentWidth, defaultContentHeight } from "./helpers.js";
import useLocalStorage from "react-use-localstorage";
// import track, { useTracking } from "react-tracking";

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

	const [switchSides, setSides] = useState(true);
	const [contentWidth, onContentResizeWidth] = useState(defaultContentWidth);
	const [contentHeight, onContentResizeHeight] = useState(defaultContentHeight);
	// const [currentTheme, setTheme] = useState("white");
	const [currentTheme, setTheme] = useLocalStorage("theme", "white");
	const [currentTransition, setCurrentTransition] = useState("default");
	const [currentContent, setCurrentContent] = useState("home");
	const [overlay, setOverlay] = useState(false);
	const [currentOverlay, setCurrentOverlay] = useState("");
	const [dimensions, setDimensions] = useState({});
	const [dragging, setDragging] = useState(false);
	const [fullScreening, setFullScreening] = useState(false);
	const [fullScreen, setFullscreen] = useState(true);
	const [navBarRight, setNavBarRight] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);
	const [navBarComplement, setNavBarComplement] = useState(false);
	const [minimalMode, setMinimalMode] = useState(true);
	const [lazyLoading, setLazyLoading] = useState(true);
	const [forDev, setForDev] = useState(false);
	const [forYou, setForYou] = useState("");
	const [modalContent, setModalContent] = useState("");
	const [whom, setWhom] = useState("everyone");
	const [videoControls, setVideoControls] = useState(false);
	const [accessible, setAccessible] = useState(false);
	const [showScrollDown, setShowScrollDown] = useState(true);
	const [downloaded, setDownloaded] = useState(false);

	// currentLeftTop: "LandscapePhotography",
	//   currentTheme: "default",
	//   defaultAppTheme: defaultAppTheme,
	//   splitDirection: splitDir(window.innerWidth),
	//   showOverlay: false,
	//   currentOverlay: ""

	// we compose the context here to pass it down
	const context = {
		currentTheme,
		setTheme,
		switchSides,
		setSides,
		contentHeight,
		onContentResizeHeight,
		contentWidth,
		onContentResizeWidth,
		currentContent,
		setCurrentContent,
		overlay,
		setOverlay,
		currentOverlay,
		setCurrentOverlay,
		dimensions,
		setDimensions,
		dragging,
		setDragging,
		fullScreen,
		setFullscreen,
		fullScreening,
		setFullScreening,
		modalVisible,
		setModalVisible,
		modalContent,
		setModalContent,
		whom,
		setWhom,
		navBarRight,
		setNavBarRight,
		currentTransition,
		setCurrentTransition,
		navBarComplement,
		setNavBarComplement,
		minimalMode,
		setMinimalMode,
		lazyLoading,
		setLazyLoading,
		forYou,
		setForYou,
		forDev,
		setForDev,
		videoControls,
		setVideoControls,
		accessible,
		setAccessible,
		showScrollDown,
		setShowScrollDown,
		downloaded,
		setDownloaded
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
