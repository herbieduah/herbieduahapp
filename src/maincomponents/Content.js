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
import { revealSecs, getCurrentTransition } from "../helpers";
import "animate.css";
export const Content = ({ location }) => {
	const {
		onContentResizeWidth,
		onContentResizeHeight,
		fullScreen,
		currentTransition
	} = useContext(globalState);
	const onResize = (width, height) => {
		onContentResizeWidth(width);
		onContentResizeHeight(height);
	};
	const transitionClasses = getCurrentTransition(currentTransition);
	return (
		<Fragment>
			{!fullScreen ? (
				<ReactResizeDetector
					handleWidth
					handleHeight
					refreshMode={"debounce"}
					refreshRate={100}
					onResize={onResize}
				/>
			) : null}

			<TransitionGroup className='animatecss-tamer'>
				<CSSTransition
					key={location.key}
					timeout={revealSecs}
					classNames={transitionClasses}>
					<div className='animatecss-container'>
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
					</div>
				</CSSTransition>
			</TransitionGroup>
		</Fragment>
	);
};

export default withRouter(Content);
