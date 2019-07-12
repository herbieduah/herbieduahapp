import React, { useContext, Fragment } from "react";
import ReactResizeDetector from "react-resize-detector";
import { Route, Switch, withRouter } from "react-router-dom";
import { globalState } from "../State";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
	AboutMe,
	BedzinExhibit,
	Colors,
	CulturalSuicide,
	DiscountTire,
	Home,
	Inspiration,
	Portrait,
	IPhone,
	NorthernArizonaUniversity,
	Photography,
	Resume,
	SpecialThanks,
	Theme,
	Tone,
	Nature,
	Ugg,
	UXvsHX
} from "../Pages";
import { NavBar } from "../ComponentHelpers";
import { revealSecs } from "../helpers";
// import { AnimatedSwitch } from "react-router-transition";

export const Content = ({ location }) => {
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
			<NavBar />
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={{ enter: revealSecs, exit: revealSecs }}
					classNames={"fade"}>
					{/* <div className='route-section'> */}
					<Switch location={location}>
						<Route path='/AboutMe' component={AboutMe} />
						<Route path='/BedzinExhibit' component={BedzinExhibit} />
						<Route path='/Colors' component={Colors} />
						<Route path='/DiscountTire' component={DiscountTire} />
						<Route path='/CulturalSuicide' component={CulturalSuicide} />
						<Route exact path='/' component={Home} />
						<Route path='/Inspiration' component={Inspiration} />
						<Route path='/Portrait' component={Portrait} />
						<Route path='/iPhone' component={IPhone} />
						<Route
							path='/NorthernArizonaUniversity'
							component={NorthernArizonaUniversity}
						/>
						<Route path='/Photography' component={Photography} />
						<Route path='/Resume' component={Resume} />
						<Route path='/SpecialThanks' component={SpecialThanks} />
						<Route path='/Theme' component={Theme} />
						<Route path='/Tone' component={Tone} />
						<Route path='/Nature' component={Nature} />
						<Route path='/Ugg' component={Ugg} />
						<Route path='/UXvsHX' component={UXvsHX} />
					</Switch>
					{/* </div> */}
				</CSSTransition>
			</TransitionGroup>
		</Fragment>
	);
};

export default withRouter(Content);
