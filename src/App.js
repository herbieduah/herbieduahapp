import React, { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, FullScreeningBG } from "./stylecomponents/Base";
import { globalState } from "./State";
import SplitPane from "./maincomponents/Revealer/SplitPane";
// import SliderLine from "./maincomponents/Revealer/SliderLine";
import { HerbieDuahApp } from "./stylecomponents/AppStyles";
import ContentMenu from "./maincomponents/ContentMenu";
import Content from "./maincomponents/Content";
// import { DragInstructions } from "./Actions";
import { defaultAppTheme } from "./stylecomponents/Theme";
import SliderLine from "./maincomponents/Revealer/SliderLine";
import { FullScreenModal } from "./ComponentHelpers";
import queryString from "query-string";

import {
	getCurrentTheme,
	splitDir,
	useWindowResize,
	minSliderSize,
	defaultPaneSize,
	isPortrait
} from "./helpers";

export const App = () => {
	const {
		switchSides,
		currentTheme,
		setDragging,
		fullScreen,
		dragging,
		fullScreening,
		setWhom
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

	const whoIsOnMyPage = who => {
		setWhom(who);
	};

	useEffect(() => {
		const values = queryString.parse(window.location.search);
		values.whom ? whoIsOnMyPage(values.whom) : console.log("no one");
	});
	// console.log(`Fullscreening: ${fullScreening}`);
	// console.log(`Fullscreen: ${fullScreen}`);
	const splitSize = parseInt(localStorage.getItem("splitPos"))
		? parseInt(localStorage.getItem("splitPos"))
		: defaultPaneSize(ww, wh);
	console.log(splitSize);
	return (
		<ThemeProvider theme={currentThemeObject}>
			<HerbieDuahApp
				className='hdapp'
				isPortrait={isPortrait(ww, wh)}
				splitSize={splitSize}
				dragging={dragging}>
				<GlobalStyle />
				{/* <ParallaxTest /> */}
				<FullScreenModal />
				{/* <SliderLine /> */}
				{/* {dragging ? <DragInstructions /> : null} */}

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
						step={1}
						onDragStarted={onDragging}
						onDragFinished={onDraggingEnded}
						defaultSize={parseInt(
							localStorage.getItem("splitPos"),
							defaultPaneSize(ww, wh)
						)}
						onChange={size => localStorage.setItem("splitPos", size)}>
						<ContentMenu switchSides={switchSides} />
						<ContentMenu switchSides={!switchSides} />
					</SplitPane>
				) : null}
			</HerbieDuahApp>
		</ThemeProvider>
	);
};
export default App;
