import React, { useContext } from "react";
import Home from "../contentcomponents/Home";
import AboutMe from "../contentcomponents/AboutMe";
import Ugg from "../contentcomponents/Ugg";
import ReactResizeDetector from "react-resize-detector";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { globalState } from "../State";

export const Content = () => {
	const {
		onContentResizeWidth,
		onContentResizeHeight,
		fullScreen
	} = useContext(globalState);
	const onResize = (width, height) => {
		onContentResizeWidth(width);
		onContentResizeHeight(height);
	};
	return (
		<Router>
			{!fullScreen ? (
				<ReactResizeDetector
					handleWidth
					handleHeight
					refreshMode={"debounce"}
					refreshRate={100}
					onResize={onResize}
					// refreshOptions={{ leading: false, trailing: true }}
				/>
			) : null}
			<Route exact path='/' component={Home} />
			<Route path='/AboutMe' component={AboutMe} />
			<Route path='/Ugg' component={Ugg} />
		</Router>
	);
};

export default Content;
