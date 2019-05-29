import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { globalState } from "./State";
import SplitPane from "./maincomponents/Revealer/SplitPane";
import SliderLine from "./maincomponents/Revealer/SliderLine";
import { GlobalStyle, HerbieDuahApp } from "./stylecomponents/Base";
import ContentMenu from "./maincomponents/ContentMenu";
import { defaultAppTheme } from "./stylecomponents/Theme";
import {
	getCurrentTheme,
	splitDir,
	useWindowResize,
	minSliderSize,
	defaultPaneSize
} from "./helpers";

export const App = () => {
	const { switchSides, currentTheme, setDragging } = useContext(globalState);
	const currentThemeObject = getCurrentTheme(defaultAppTheme, currentTheme);
	const { width: ww, height: wh } = useWindowResize();
	const { minSize, maxSize } = minSliderSize(ww, wh);
	const onDragging = () => {
		setDragging(true);
	};
	const onDraggingEnded = () => {
		setDragging(false);
	};
	return (
		<ThemeProvider theme={currentThemeObject}>
			<HerbieDuahApp className='hdapp'>
				<SliderLine />
				<GlobalStyle />
				<SplitPane
					split={splitDir(ww, wh)}
					minSize={minSize}
					maxSize={maxSize}
					defaultSize={defaultPaneSize(ww, wh)}
					step={1}
					onDragStarted={onDragging}
					onDragFinished={onDraggingEnded}
					// defaultSize={parseInt(localStorage.getItem("splitPos"), 500)}
					// onChange={size => localStorage.setItem("splitPos", size)}>
				>
					<ContentMenu switchSides={switchSides} />
					<ContentMenu switchSides={!switchSides} />
				</SplitPane>
			</HerbieDuahApp>
		</ThemeProvider>
	);
};
