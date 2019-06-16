import React, { useContext } from "react";
import Home from "../contentcomponents/Home";
import AboutMe from "../contentcomponents/AboutMe";
import Ugg from "../contentcomponents/Ugg";
import { revealValues, useWindowResize, isMobile } from "../helpers";
import ReactResizeDetector from "react-resize-detector";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { globalState } from "../State";
import { browserName, mobileModel } from "react-device-detect";
import { AnimatedSwitch } from "react-router-transition";

export const Content = () => {
	const {
		onContentResizeWidth,
		onContentResizeHeight,
		contentWidth: cw,
		contentHeight: ch,
		fullScreen,
		dragging
	} = useContext(globalState);
	const onResize = (width, height) => {
		onContentResizeWidth(width);
		onContentResizeHeight(height);
	};
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const isContentMobile = isMobile(ww, wh);
	const showMore = fullScreen ? true : isShowingMore;
	const showLess = fullScreen ? false : !isShowingMore;
	const contentProps = {
		cw,
		ch,
		ww,
		wh,
		dragging,
		isShowingMore,
		showMore,
		showLess,
		browserName,
		mobileModel,
		isContentMobile,
		fullScreen
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
			<AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				className='switch-wrapper'>
				<Route
					exact
					path='/'
					component={() => <Home contentProps={contentProps} />}
				/>
				<Route
					path='/AboutMe'
					component={() => <AboutMe contentProps={contentProps} />}
				/>
				<Route
					path='/Ugg'
					component={() => <Ugg scontentProps={contentProps} />}
				/>
			</AnimatedSwitch>
		</Router>
	);
};

export default Content;
