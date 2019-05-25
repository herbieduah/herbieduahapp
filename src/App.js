import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { globalState } from "./State";
import SplitPane from "./maincomponents/SplitPane/SplitPane";
import { GlobalStyle, HerbieDuahApp } from "./stylecomponents/Base";
import ContentMenu from "./maincomponents/ContentMenu";
import { defaultAppTheme } from "./stylecomponents/Theme";
import {
	getCurrentTheme,
	splitDir,
	useWindowResize,
	minSliderSize
} from "./helpers";

export const App = () => {
	const { switchSides, currentTheme } = useContext(globalState);
	const currentThemeObject = getCurrentTheme(defaultAppTheme, currentTheme);
	const { width: ww, height: wh } = useWindowResize();
	const { minSize, maxSize } = minSliderSize(ww, wh);
	return (
		<ThemeProvider theme={currentThemeObject}>
			<HerbieDuahApp>
				<GlobalStyle />
				<SplitPane
					split={splitDir(ww, wh)}
					minSize={minSize}
					maxSize={maxSize}
					defaultSize={500}
					step={10}
					// defaultSize={parseInt(localStorage.getItem("splitPos"), 10)}
					// onChange={size => localStorage.setItem("splitPos", size)}>
				>
					<ContentMenu switchSides={switchSides} />
					<ContentMenu switchSides={!switchSides} />
				</SplitPane>
			</HerbieDuahApp>
		</ThemeProvider>
	);
};
