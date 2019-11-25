import React, { useContext, useEffect, useState } from "react";
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
import { isMobileOnly, isBrowser } from "react-device-detect";
import {
	getCurrentTheme,
	splitDir,
	revealValues,
	useWindowResize,
	minSliderSize,
	defaultPaneSize,
	isPortrait,
	useKeyPress
} from "./helpers";
console.log(React.version);
export const App = () => {
	const {
		switchSides,
		contentWidth: cw,
		contentHeight: ch,
		currentTheme,
		setTheme,
		setDragging,
		fullScreen,
		dragging,
		setLazyLoading,
		// fullScreening,
		setWhom,
		setForYou,
		minimalMode,
		accessible,
		setDownloaded,
		downloaded,
		setMinimalMode,
		setFullscreen
	} = useContext(globalState);
	const currentThemeObject = getCurrentTheme(defaultAppTheme, currentTheme);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const { minSize, maxSize } = minSliderSize(ww, wh);
	const mobileOveriPhone5Horizontal = ww > 492;
	const showFSMobileHorizontal = mobileOveriPhone5Horizontal && isMobileOnly;
	const [showOutline, setShowOutline] = useState(false);
	const tabIsPressed = useKeyPress("Tab");
	const onDragging = () => {
		setDragging(true);
	};
	const showOutlineAfterTabPress = () => {
		setShowOutline(true);
	};
	// if (useKeyPress("h")) {
	// 	console.log("Tab Pressed");
	// 	setShowOutline(true);
	// 	console.log(showOutline);
	// showOutlineAfterTabPress();
	// }

	// const basicMode = () => {
	// 	minimalMode ? setMinimalMode(false) : setMinimalMode(true);
	// 	fullScreen ? setFullscreen(false) : setFullscreen(true);
	// };

	const onDraggingEnded = () => {
		setDragging(false);
	};

	const whoIsOnMyPage = who => {
		setWhom(who);
	};
	const appDownloaded = () => {
		setDownloaded(true);
		setMinimalMode(true);
		setFullscreen(true);
	};
	const whoIsThisFor = forWho => {
		setForYou(forWho);
	};

	const activateDarkMode = () => {
		setTheme("black");
	};

	const activateLightMode = () => {
		setTheme("white");
	};

	// const downloadAllTheThings = () => {
	// 	if (isShowingMore) {
	// 		setLazyLoading(false);
	// 	}
	// };

	useEffect(() => {
		const values = queryString.parse(window.location.search);
		if (values.whom) {
			whoIsOnMyPage(values.whom);
		}
		if (values.for) {
			whoIsThisFor(values.for.toLowerCase());
		}
		if (values.downloaded) {
			appDownloaded();
			// basicMode();
		}
		if (tabIsPressed) {
			showOutlineAfterTabPress();
		}

		if (currentTheme === "default") {
			const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
				.matches;
			const isLightMode = window.matchMedia("(prefers-color-scheme: light)")
				.matches;
			const isNotSpecified = window.matchMedia(
				"(prefers-color-scheme: no-preference)"
			).matches;
			const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addListener(e => e.matches && activateDarkMode());
			window
				.matchMedia("(prefers-color-scheme: light)")
				.addListener(e => e.matches && activateLightMode());

			if (isDarkMode) activateDarkMode();
			if (isLightMode) activateLightMode();
			if (isNotSpecified || hasNoSupport) {
				console.log(
					"You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time."
				);
				let now = new Date();
				let hour = now.getHours();
				if (hour < 4 || hour >= 16) {
					activateDarkMode();
				}
			}
		}
		// if (downloaded) {

		// }
		// downloadAllTheThings();

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
				dragging={dragging}
				currentTheme={currentTheme}
				showOutline={showOutline}>
				{/* <AppStartUp /> */}
				<ShowIf noAnimation thisValue={currentTheme} thatValue={"matrix"}>
					<Matrix fullscreen={true} isPortrait={isPortrait(ww, wh)} />
				</ShowIf>
				{/* <div aria-hidden='true' className='in-dev'>
					<Text m tertiary className='alpha-text'>
						Beta.
					</Text>
				</div> */}
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
						defaultSize={defaultPaneSize(ww, wh)}
						// defaultSize={parseInt(
						// 	sessionStorage.getItem("splitPos"),
						// 	defaultPaneSize(ww, wh)
						// )}
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
