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
import { FullScreenOverlay, NavBar } from "./ComponentHelpers";
import queryString from "query-string";
import Text from "./stylecomponents/Text";
import { isMobileOnly } from "react-device-detect";
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
	const mobileOveriPhone5Horizontal = ww > 453;
	const showFSMobileHorizontal = mobileOveriPhone5Horizontal && isMobileOnly;
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
	const splitSize = parseInt(sessionStorage.getItem("splitPos"))
		? parseInt(sessionStorage.getItem("splitPos"))
		: defaultPaneSize(ww, wh);
	// console.log(splitSize);
	return (
		<ThemeProvider theme={currentThemeObject}>
			<HerbieDuahApp
				className='hdapp'
				isPortrait={isPortrait(ww, wh)}
				splitSize={splitSize}
				dragging={dragging}>
				<div className='in-dev'>
					<Text s className='alpha-text'>
						This project is still in development
					</Text>
				</div>
				<GlobalStyle />
				<NavBar />
				{/* <ParallaxTest /> */}
				<FullScreenOverlay />
				{/* <SliderLine /> */}
				{/* {dragging ? <DragInstructions /> : null} */}

				{fullScreen || showFSMobileHorizontal ? <Content /> : null}
				{/* <Content /> */}
				{/* {fullScreen ? <h1>Here I am</h1> : null} */}
				{dragging ? <SliderLine /> : null}

				{fullScreening ? <FullScreeningBG /> : null}

				{/* <FullScreeningBG /> */}
				{!fullScreen && !showFSMobileHorizontal ? (
					<SplitPane
						split={splitDir(ww, wh)}
						minSize={minSize}
						maxSize={maxSize}
						step={1}
						onDragStarted={onDragging}
						onDragFinished={onDraggingEnded}
						defaultSize={parseInt(
							sessionStorage.getItem("splitPos"),
							defaultPaneSize(ww, wh)
						)}
						onChange={size => sessionStorage.setItem("splitPos", size)}>
						<ContentMenu switchSides={switchSides} />
						<ContentMenu switchSides={!switchSides} />
					</SplitPane>
				) : null}
			</HerbieDuahApp>
		</ThemeProvider>
	);
};
export default App;
