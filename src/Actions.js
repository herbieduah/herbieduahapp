import React, { Fragment, useContext } from "react";
import { globalState } from "./State";
import { revealValues, useWindowResize, isMobile } from "./helpers";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";
import { browserName, mobileModel } from "react-device-detect";
import {
	FullScreenContainer,
	NavBarContainer
	// FullScreeningBGContainer
} from "./stylecomponents/Base";
// import ClickNHold from "react-click-n-hold";
import HerbieDuahLogo from "./media/icons/HerbieDuahLogo.svg";
import Media from "./maincomponents/Media";
import ContentContainer from "./stylecomponents/ContentContainer";

let windowwidth = 0;

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

export const SubMenuWrapper = props => {
	return (
		<Fade cascade up duration={1500}>
			<ul className='subMenu'>{props.children}</ul>
		</Fade>
	);
};

export const Log = props => {
	console.log(`rendering "${props.name}"`);
	return null;
};

export const ContentWrapper = props => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		dragging,
		fullScreen
	} = useContext(globalState);
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
	const children = React.Children.map(props.children, (child, index) => {
		return React.cloneElement(child, {
			contentProps
		});
	});
	return (
		<ContentContainer
			className='content'
			isShowingMore={isShowingMore}
			isMobile={isContentMobile}
			dragging={dragging}>
			{children}
		</ContentContainer>
	);
};

export const ContentShow = props => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		dragging,
		fullScreen
	} = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const isContentMobile = isMobile(ww, wh);
	const showMore = fullScreen ? true : isShowingMore;
	const showLess = fullScreen ? false : !isShowingMore;

	if (props.less) {
		return (
			<Fragment>
				{showLess ? (
					<aside className='content__less'>
						<Fade
							bottom={isContentMobile}
							left={!isContentMobile}
							duration={1500}>
							{props.children}
						</Fade>
					</aside>
				) : null}
			</Fragment>
		);
	}
	if (props.more) {
		return (
			<Fragment>
				{showMore ? <article>{props.children}</article> : null}
			</Fragment>
		);
	}
	if (props.header) {
		return (
			<Fade top={isContentMobile} right={!isContentMobile} duration={800}>
				<header className='content__header container'>
					<Text h1 xl={showMore} s={showLess} bold>
						{props.header}
					</Text>
				</header>
			</Fade>
		);
	}
};

export const ComingSoon = props => {
	return (
		<Fade up duration={1500}>
			<Text m>Working on the content for {props.header}.</Text>
		</Fade>
	);
};
