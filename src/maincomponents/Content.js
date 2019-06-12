import React, { useContext, Fragment } from "react";
import Home from "../contentcomponents/Home";
import AboutMe from "../contentcomponents/AboutMe";
import Ugg from "../contentcomponents/Ugg";
import ReactResizeDetector from "react-resize-detector";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
			<Router>
				<ReactResizeDetector
					handleWidth
					handleHeight
					refreshMode={"debounce"}
					refreshRate={100}
					onResize={onResize}
					// refreshOptions={{ leading: false, trailing: true }}
				/>
				<Route exact path='/' component={Home} />
				<Route path='/AboutMe' component={AboutMe} />
				<Route path='/Ugg' component={Ugg} />
			</Router>
		</Fragment>
	);
});

export default Content;
