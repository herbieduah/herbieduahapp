import React, { useContext } from "react";
import { revealValues, useWindowResize, isMobile } from "../helpers";
import ReactResizeDetector from "react-resize-detector";
import { BrowserRouter, Route } from "react-router-dom";
import { globalState } from "../State";
import { browserName, mobileModel } from "react-device-detect";
import {
	AboutMe,
	BedzinExhibit,
	Colors,
	DiscountTire,
	FlagstaffChamberofCommerce,
	Home,
	Inspiration,
	Instagram,
	LinkedIn,
	NorthernArizonaUniversity,
	Photography,
	Resume,
	SpecialThanks,
	Theme,
	Tone,
	Twitter,
	Ugg,
	UXvsHX
} from "../Pages";
// import { AnimatedSwitch } from "react-router-transition";

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
		<BrowserRouter>
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
			{/* <AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				className='switch-wrapper'> */}
			<Route path='/AboutMe' component={AboutMe} />
			<Route path='/BedzinExhibit' component={BedzinExhibit} />
			<Route path='/Colors' component={Colors} />
			<Route path='/DiscountTire' component={DiscountTire} />
			<Route
				path='/FlagstaffChamberofCommerce'
				component={FlagstaffChamberofCommerce}
			/>
			<Route exact path='/' component={Home} />
			<Route exact path='/Inspiration' component={Inspiration} />
			<Route path='/Instagram' component={Instagram} />
			<Route path='/LinkedIn' component={LinkedIn} />
			<Route
				path='/NorthernArizonaUniversity'
				component={NorthernArizonaUniversity}
			/>
			<Route path='/Photography' component={Photography} />
			<Route path='/Resume' component={Resume} />
			<Route path='/SpecialThanks' component={SpecialThanks} />
			<Route path='/Theme' component={Theme} />
			<Route path='/Tone' component={Tone} />
			<Route path='/Twitter' component={Twitter} />
			<Route path='/Ugg' component={Ugg} />
			<Route path='/UXvsHX' component={UXvsHX} />
			{/* </AnimatedSwitch> */}
		</BrowserRouter>
	);
};

export default Content;
