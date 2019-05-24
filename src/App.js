import React, { useContext } from "react";
import { globalState } from "./maincomponents/State";
import SplitPane from "./maincomponents/SplitPane/SplitPane";
import { GlobalStyle } from "./stylecomponents/Base";
import ReactResizeDetector from "react-resize-detector";
import {
	DecrementButton,
	IncrementButton,
	ThemeSelector
} from "./maincomponents/Controls";

const createStyle = theme => {
	return {
		fontFamily: "sans-serif",
		textAlign: "center",
		width: "100%",
		transition: "background-color .3s, color .2s .4s ease-out",
		backgroundColor: theme === "light" ? "#fdfdfd" : "#222",
		color: theme === "light" ? "#222" : "#fdfdfd"
	};
};
const normalStyle = {
	width: "100%"
};

export const App = () => {
	const {
		theme,
		count,
		setCount,
		contentWidth,
		contentHeight,
		onContentResizeWidth,
		onContentResizeHeight
	} = useContext(globalState);
	const onResize = (width, height) => {
		onContentResizeWidth(width);
		onContentResizeHeight(height);
	};
	const style = createStyle(theme);
	return (
		<div>
			{" "}
			<GlobalStyle />
			<SplitPane split='vertical' minSize={400} defaultSize={500}>
				<div style={style}>
					<h1>Herbie Duah App</h1>
					<h2>Hello this is my app. Just testing state!</h2>
					<p>You clicked {count} times</p>
					<button onClick={() => setCount(0)}>Reset</button>
					<DecrementButton />
					<IncrementButton />
					<ThemeSelector />
				</div>
				<div style={normalStyle}>
					<ReactResizeDetector
						handleWidth
						handleHeight
						refreshMode={"debounce"}
						refreshRate={200}
						// refreshOptions={{ leading: true, trailing: false }}
						onResize={onResize}
					/>
					<h3>
						Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer
						posuere erat a ante venenatis dapibus posuere velit aliquet. Donec
						sed odio dui. Donec sed odio dui. Donec ullamcorper nulla non metus
						auctor fringilla.Cum sociis natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Sed posuere consectetur
						est at lobortis. Sed posuere consectetur est at lobortis. Nulla
						vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
						metus auctor fringilla. Cum sociis natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. {contentWidth} x{" "}
						{contentHeight}
					</h3>
				</div>
			</SplitPane>
		</div>
	);
};
