import React, { useContext } from "react";
import { globalState } from "./State";
import SplitPane from "./maincomponents/SplitPane/SplitPane";
import { GlobalStyle } from "./stylecomponents/Base";
import ReactResizeDetector from "react-resize-detector";
import ContentMenu from "./maincomponents/ContentMenu";

export const App = () => {
	const { switchSides } = useContext(globalState);
	return (
		<div>
			<GlobalStyle />
			<SplitPane split='vertical' minSize={400} defaultSize={500}>
				<ContentMenu switchSides={switchSides} />
				<ContentMenu switchSides={!switchSides} />
			</SplitPane>
		</div>
	);
};
