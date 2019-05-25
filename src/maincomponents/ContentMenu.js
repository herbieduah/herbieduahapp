import React, { useContext } from "react";
import { globalState } from "../State";
import Content from "./Content";
import Menu from "./Menu";
import { ContentMenuContainer } from "./stylecomponents/ContentMenuContainer.js";
import ReactResizeDetector from "react-resize-detector";

export const ContentMenu = props => {
	const { onContentResizeWidth, onContentResizeHeight } = useContext(
		globalState
	);
	const onResize = (width, height) => {
		onContentResizeWidth(width);
		onContentResizeHeight(height);
	};
	const switchSides = this.props.switchSides;
	return (
		<ContentMenuContainer
			className={`herbieduah${switchSides ? "__content" : "__menu"}`}>
			{switchSides ? (
				<ReactResizeDetector
					handleWidth
					handleHeight
					refreshMode={"debounce"}
					refreshRate={200}
					onResize={onResize}
				/>
			) : null}
			{switchSides ? <Content /> : <Menu />}
		</ContentMenuContainer>
	);
};

export default ContentMenu;
