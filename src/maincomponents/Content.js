import React, { useContext, Fragment } from "react";
import Home from "../contentcomponents/Home";
import ReactResizeDetector from "react-resize-detector";
import { globalState } from "../State";

export const Content = React.memo(props => {
	const { onContentResizeWidth, onContentResizeHeight } = useContext(
		globalState
	);
	const onResize = (width, height) => {
		onContentResizeWidth(width);
		onContentResizeHeight(height);
	};
	return (
		<Fragment>
			<ReactResizeDetector
				handleWidth
				handleHeight
				refreshMode={"debounce"}
				refreshRate={200}
				onResize={onResize}
				refreshOptions={{ leading: false, trailing: true }}
			/>
			<Home />
		</Fragment>
	);
});

export default Content;
