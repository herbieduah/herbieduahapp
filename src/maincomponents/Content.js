import React, { useContext, Fragment } from "react";
import ReactResizeDetector from "react-resize-detector";
import { Route, Switch } from "react-router-dom";
import { globalState } from "../State";
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
		fullScreen
	} = useContext(globalState);
	const onResize = (width, height) => {
		onContentResizeWidth(width);
		onContentResizeHeight(height);
	};
	return (
		<Fragment>
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
			<Switch>
				<Route path='/AboutMe' component={AboutMe} />
				<Route path='/BedzinExhibit' component={BedzinExhibit} />
				<Route path='/Colors' component={Colors} />
				<Route path='/DiscountTire' component={DiscountTire} />
				<Route
					path='/FlagstaffChamberofCommerce'
					component={FlagstaffChamberofCommerce}
				/>
				<Route exact path='/' component={Home} />
				<Route path='/Inspiration' component={Inspiration} />
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
			</Switch>
		</Fragment>
	);
};

export default Content;
