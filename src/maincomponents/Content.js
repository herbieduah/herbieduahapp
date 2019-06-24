import React, { useContext, Fragment } from "react";
import { revealValues, useWindowResize, isMobile } from "../helpers";
import ReactResizeDetector from "react-resize-detector";
import { Route, Switch, withRouter } from "react-router-dom";
import { globalState } from "../State";
import { browserName, mobileModel } from "react-device-detect";
import AboutMePage from "../contentcomponents/AboutMe";
import BedzinExhibitPage from "../contentcomponents/BedzinExhibit";
import ColorsPage from "../contentcomponents/Colors";
import DiscountTirePage from "../contentcomponents/DiscountTire";
import FlagstaffChamberofCommercePage from "../contentcomponents/FlagstaffChamberofCommerce";
import HomePage from "../contentcomponents/Home";
import InspirationPage from "../contentcomponents/Inspiration";
import InstagramPage from "../contentcomponents/Instagram";
import LinkedInPage from "../contentcomponents/LinkedIn";
import NorthernArizonaUniversityPage from "../contentcomponents/NorthernArizonaUniversity";
import PhotographyPage from "../contentcomponents/Photography";
import ResumePage from "../contentcomponents/Resume";
import SpecialThanksPage from "../contentcomponents/SpecialThanks";
import ThemePage from "../contentcomponents/Theme";
import TonePage from "../contentcomponents/Tone";
import TwitterPage from "../contentcomponents/Twitter";
import UggPage from "../contentcomponents/Ugg";
import UXvsHXPage from "../contentcomponents/UXvsHX";
import { ContentWrapper } from "../Actions";
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
			<ContentWrapper>
				<div>
					<Switch>
						<Route path='/AboutMe' component={AboutMePage} />
						<Route path='/BedzinExhibit' component={BedzinExhibitPage} />
						<Route path='/Colors' component={ColorsPage} />
						<Route path='/DiscountTire' component={DiscountTirePage} />
						<Route
							path='/FlagstaffChamberofCommerce'
							component={FlagstaffChamberofCommercePage}
						/>
						<Route exact path='/' component={HomePage} />
						<Route
							path='/Inspiration'
							component={withRouter(InspirationPage)}
						/>
						<Route path='/Instagram' component={InstagramPage} />
						<Route path='/LinkedIn' component={LinkedInPage} />
						<Route
							path='/NorthernArizonaUniversity'
							component={NorthernArizonaUniversityPage}
						/>
						<Route path='/Photography' component={PhotographyPage} />
						<Route path='/Resume' component={ResumePage} />
						<Route path='/SpecialThanks' component={SpecialThanksPage} />
						<Route path='/Theme' component={ThemePage} />
						<Route path='/Tone' component={TonePage} />
						<Route path='/Twitter' component={TwitterPage} />
						<Route path='/Ugg' component={UggPage} />
						<Route path='/UXvsHX' component={UXvsHXPage} />
					</Switch>
				</div>
			</ContentWrapper>
		</Fragment>
	);
};

export default Content;
