import React, { useContext } from "react";
import { globalState } from "../State";
import Content from "./Content";
import Menu from "./Menu";
import { ContentMenuContainer } from "../stylecomponents/ContentMenuContainer";
import ReactResizeDetector from "react-resize-detector";

export const ContentMenu = props => {
	const { onContentResizeWidth, onContentResizeHeight } = useContext(
		globalState
	);
	const onResize = (width, height) => {
		onContentResizeWidth(width);
		onContentResizeHeight(height);
	};
	const switchSides = props.switchSides;
	return (
		<ContentMenuContainer
			className={`herbieduah${switchSides ? "__content" : "__menu"}`}>
			{switchSides ? (
				<div className='sizer'>
					<ReactResizeDetector
						handleWidth
						handleHeight
						refreshMode={"debounce"}
						refreshRate={500}
						onResize={onResize}
						refreshOptions={{ leading: false, trailing: true }}
					/>
				</div>
			) : null}
			{switchSides ? <Content /> : <Menu />}
		</ContentMenuContainer>
	);
};

export default ContentMenu;
