import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { globalState } from "./State";
import SplitPane from "./maincomponents/Revealer/SplitPane";
// import SliderLine from "./maincomponents/Revealer/SliderLine";
import {
	GlobalStyle,
	HerbieDuahApp,
	FullScreeningBG
} from "./stylecomponents/Base";
import ContentMenu from "./maincomponents/ContentMenu";
import Content from "./maincomponents/Content";
// import { DragInstructions } from "./Actions";
import { defaultAppTheme } from "./stylecomponents/Theme";
import SliderLine from "./maincomponents/Revealer/SliderLine";

import {
	getCurrentTheme,
	splitDir,
	useWindowResize,
	minSliderSize,
	defaultPaneSize,
	isMobile
} from "./helpers";
import { NavBar } from "./Actions";

export const App = () => {
	const {
		switchSides,
		currentTheme,
		setDragging,
		fullScreen,
		dragging,
		fullScreening
	} = useContext(globalState);
	const currentThemeObject = getCurrentTheme(defaultAppTheme, currentTheme);
	const { width: ww, height: wh } = useWindowResize();
	const { minSize, maxSize } = minSliderSize(ww, wh);
	const onDragging = () => {
		setDragging(true);
	};
	const onDraggingEnded = () => {
		setDragging(false);
	};
	console.log(`Fullscreening: ${fullScreening}`);
	console.log(`Fullscreen: ${fullScreen}`);
	return (
		<ThemeProvider theme={currentThemeObject}>
			<HerbieDuahApp
				className='hdapp'
				isMobile={isMobile(ww, wh)}
				dragging={dragging}>
				<GlobalStyle />
				<NavBar />
				{/* <SliderLine /> */}
				{/* <DragInstructions /> */}
				{fullScreen ? <Content /> : null}
				{/* <Content /> */}
				{/* {fullScreen ? <h1>Here I am</h1> : null} */}
				{dragging ? <SliderLine /> : null}
				{fullScreening ? <FullScreeningBG /> : null}
				{/* <FullScreeningBG /> */}
				{!fullScreen ? (
					<SplitPane
						split={splitDir(ww, wh)}
						minSize={minSize}
						maxSize={maxSize}
						defaultSize={defaultPaneSize(ww, wh)}
						step={1}
						onDragStarted={onDragging}
						onDragFinished={onDraggingEnded}
						// defaultSize={parseInt(
						// 	localStorage.getItem("splitPos"),
						// 	defaultPaneSize(ww, wh)
						// )}
						// onChange={size => localStorage.setItem("splitPos", size)}>
					>
						<ContentMenu switchSides={switchSides} />
						<ContentMenu switchSides={!switchSides} />
					</SplitPane>
				) : null}
			</HerbieDuahApp>
		</ThemeProvider>
	);
};
