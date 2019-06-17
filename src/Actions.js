import React, { useState, Fragment, useContext } from "react";
import { globalState } from "./State";
import { menu, revealValues, useWindowResize, isMobile } from "./helpers";
import SubMenu from "./maincomponents/SubMenu";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";
import {
	FullScreenContainer,
	NavBarContainer
	// FullScreeningBGContainer
} from "./stylecomponents/Base";
// import ClickNHold from "react-click-n-hold";
import HerbieDuahLogo from "./media/icons/HerbieDuahLogo.svg";
import Media from "./maincomponents/Media";

export const MenuAction = props => {
	const [menuShow, setMenuShow] = useState("");
	const { contentWidth: cw, contentHeight: ch } = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const category = props.category;
	// const [category] = useState(props.category);
	return (
		// <Fragment>
		// 	<Text
		// 		l={!isShowingMore}
		// 		s={isShowingMore}
		// 		button
		// 		onClick={() => setMenuShow(menu(category, menuShow))}
		// 		className='menu__button menu__button--active'>
		// 		{category}
		// 	</Text>
		// 	{menuShow === category || isShowingMore ? (
		<div className='subMenu'>
			<SubMenu category={category} />
		</div>
		// ) : null}
		// </Fragment>
	);
};

export const DragInstructions = props => {
	const {
		dragging,
		switchSides,
		contentWidth: cw,
		contentHeight: ch
	} = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const desktopText = switchSides && !isShowingMore ? "right" : "left";
	const mobileText = switchSides && !isShowingMore ? "bottom" : "top";
	const instructionsText = isMobile(ww, wh) ? mobileText : desktopText;
	const showingLessText = !isShowingMore ? "more" : "less";
	return (
		<Fragment>
			{dragging ? (
				<div className='instructions'>
					<Fade duration={1000}>
						<div>
							<Text className='instructions__text'>
								Drag to the {instructionsText} to reveal {showingLessText}
							</Text>
						</div>
					</Fade>
				</div>
			) : null}
		</Fragment>
	);
};

export const FullScreenButton = () => {
	const { fullScreen, setFullScreening, setFullscreen } = useContext(
		globalState
	);
	const { width: ww, height: wh } = useWindowResize();
	// const values = { ww, wh, cw, ch };
	// const isShowingMore = revealValues(values).isShowingMore;
	const onFullScreening = () => {
		setFullScreening(true);
		console.log("Holding!!!");
	};
	const onFullScreenTimeOutEnded = () => {
		setFullScreening(false);
		fullScreen ? setFullscreen(false) : setFullscreen(true);
		console.log("Hold timeout ended!");
	};
	const onFullScreenEnded = () => {
		setFullScreening(false);
		console.log("Hold ended!");
	};
	return (
		<FullScreenContainer
			time={2} // Time to keep pressing. Default is 2
			isMobile={isMobile(ww, wh)}
			fullScreen={fullScreen}
			onStart={onFullScreening}
			onClickNHold={onFullScreenTimeOutEnded} //Timeout callback
			onEnd={onFullScreenEnded}>
			{/* <span className="fullScreen"> */}
			<span className='fullScreen'>
				<span className='fullScreen__dot' />
			</span>
			{/* </span> */}
		</FullScreenContainer>
	);
};

// export const FullScreeningBackground = props => {
// 	const { fullScreening } = useGlobalState();
// 	return <FullScreeningBGContainer/>;
// };

export const NavBar = () => {
	return (
		<NavBarContainer>
			<Media type='icon' className='hdapp__logo svg' src={HerbieDuahLogo} />
			<FullScreenButton />
		</NavBarContainer>
	);
};
export const RerenderStopper = props => {
	return <div>{props.children}</div>;
};

export const Log = props => {
	console.log(`rendering "${props.name}"`);
	return null;
};

// export const ContentProps = children => {
// 	const {
// 		// currentContent,
// 		// setCurrentContent,
// 		contentWidth: cw,
// 		contentHeight: ch,
// 		dragging,
// 		fullScreen
// 	} = useContext(globalState);
// 	const { width: ww, height: wh } = useWindowResize();
// 	const values = { ww, wh, cw, ch };
// 	const isShowingMore = revealValues(values).isShowingMore;
// 	const isContentMobile = isMobile(ww, wh);
// 	const showMore = fullScreen ? true : isShowingMore;
// 	const showLess = fullScreen ? false : !isShowingMore;
// 	return (
// 		<ContentProps>
// 			{children}
// 		</ContentProps>
// 	);
// };
