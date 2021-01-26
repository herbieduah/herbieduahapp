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
  const [currentTheme, setTheme] = useLocalStorage("theme", "default");
  const [showAwardsBanner, setShowAwardsBanner] = useLocalStorage("showAwards", true);
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
  const [forDev, setForDev] = useState(true);
  const [forYou, setForYou] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [whom, setWhom] = useState("everyone");
  const [videoControls, setVideoControls] = useState(false);
  const [accessible, setAccessible] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
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
    setDownloaded,
    showAwardsBanner,
    setShowAwardsBanner,
  };

  return <Provider value={context}>{children}</Provider>;
};

export const useGlobalState = () => useContext(globalState);
