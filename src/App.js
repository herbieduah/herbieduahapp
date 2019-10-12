import React, { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import {
	GlobalStyle,
	// FullScreeningBG,
	BorderDesktop
} from "./stylecomponents/Base";
import { globalState } from "./State";
import SplitPane from "./maincomponents/Revealer/SplitPane";
// import SliderLine from "./maincomponents/Revealer/SliderLine";
import { HerbieDuahApp } from "./stylecomponents/AppStyles";
import ContentMenu from "./maincomponents/ContentMenu";
import Content from "./maincomponents/Content";
// import { DragInstructions } from "./Actions";
import { defaultAppTheme } from "./stylecomponents/Theme";
import SliderLine from "./maincomponents/Revealer/SliderLine";
import {
	FullScreenOverlay,
	NavBar,
	ShowIf,
	AppStartUp
} from "./ComponentHelpers";
import queryString from "query-string";
import Text from "./stylecomponents/Text";
import { Puns } from "./Pages";
// import DownloadAllMedia from "./contentcomponents/DownloadAllMedia";
import Matrix from "./stylecomponents/Themes/Matrix";
import { isMobileOnly } from "react-device-detect";
import {
	getCurrentTheme,
	splitDir,
	revealValues,
	useWindowResize,
	minSliderSize,
	defaultPaneSize,
	isPortrait
} from "./helpers";
console.log(React.version);
export const App = () => {
	const {
		switchSides,
		contentWidth: cw,
		contentHeight: ch,
		currentTheme,
		setDragging,
		fullScreen,
		dragging,
		setLazyLoading,
		// fullScreening,
		setWhom,
		setForYou,
		minimalMode,
		accessible
	} = useContext(globalState);
	const currentThemeObject = getCurrentTheme(defaultAppTheme, currentTheme);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
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
	const whoIsThisFor = forWho => {
		setForYou(forWho);
	};

	const downloadAllTheThings = () => {
		if (isShowingMore) {
			setLazyLoading(false);
		}
	};

	useEffect(() => {
		const values = queryString.parse(window.location.search);
		if (values.whom) {
			whoIsOnMyPage(values.whom);
		}
		if (values.for) {
			whoIsThisFor(values.for.toLowerCase());
		}
		downloadAllTheThings();

		// values.whom ?  : console.log("Hi");
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
				minimalMode={minimalMode}
				fullScreen={fullScreen}
				showFSMobileHorizontal={showFSMobileHorizontal}
				accessible={accessible}
				dragging={dragging}>
				{/* <AppStartUp /> */}
				<ShowIf noAnimation thisValue={currentTheme} thatValue={"matrix"}>
					<Matrix fullscreen={true} isPortrait={isPortrait(ww, wh)} />
				</ShowIf>
				<div aria-hidden='true' className='in-dev'>
					<Text xs className='alpha-text'>
						Beta
					</Text>
				</div>
				<GlobalStyle />
				<NavBar />
				{isPortrait(ww, wh) ? null : (
					<BorderDesktop className='hdapp__border' />
				)}

				{/* <ParallaxTest /> */}
				<FullScreenOverlay />
				{/* <SliderLine /> */}
				{/* {dragging ? <DragInstructions /> : null} */}

				{fullScreen && !showFSMobileHorizontal ? <Content /> : null}
				{/* <ShowIf
					thisValue={fullScreen && !showFSMobileHorizontal}
					thatValue={true}>
					<Content />
				</ShowIf> */}
				{showFSMobileHorizontal ? <Puns /> : null}
				{/* <Content /> */}
				{/* {fullScreen ? <h1>Here I am</h1> : null} */}
				{dragging ? <SliderLine /> : null}

				{/* {fullScreening ? <FullScreeningBG /> : null} */}

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

				{/* <ShowIf
					thisValue={!fullScreen && !showFSMobileHorizontal}
					thatValue={true}>
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
				</ShowIf> */}
				{/* <DownloadAllMedia /> */}
			</HerbieDuahApp>
		</ThemeProvider>
	);
};
export default App;
