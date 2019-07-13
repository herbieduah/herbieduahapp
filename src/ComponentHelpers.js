import React, { Fragment, useContext } from "react";
import { globalState } from "./State";
import {
	revealValues,
	useWindowResize,
	isPortrait,
	revealSecs,
	getTheGradient
} from "./helpers";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";
// import Parallax from "parallax-js";
import { browserName, mobileModel } from "react-device-detect";
import {
	NavBarContainer,
	// DragInstructionsContainer,
	GradientCircle
	// ParallaxContainer
	// FullScreeningBGContainer
} from "./stylecomponents/Base";
import ClickNHold from "react-click-n-hold";
import HerbieDuahLogo from "./media/icons/HerbieDuahLogo.svg";
import Media from "./maincomponents/Media";
import ContentContainer from "./stylecomponents/ContentContainer";
import { NavLink } from "react-router-dom";
import Modal from "./maincomponents/Modal";
import { Tab, TabList, TabPanel } from "react-tabs";
import { ReactTabs } from "./stylecomponents/Base";
import SubMenu from "./maincomponents/SubMenu";
import { trackWindowScroll } from "react-lazy-load-image-component";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Zoom from "react-reveal/Zoom";

// export const DragInstructions = props => {
// 	const {
// 		dragging,
// 		switchSides,
// 		contentWidth: cw,
// 		contentHeight: ch
// 	} = useContext(globalState);
// 	const { width: ww, height: wh } = useWindowResize();
// 	const values = { ww, wh, cw, ch };
// 	const isShowingMore = revealValues(values).isShowingMore;
// 	const desktopText = switchSides && !isShowingMore ? "right" : "left";
// 	const mobileText = switchSides && !isShowingMore ? "bottom" : "top";
// 	const instructionsText = isPortrait(ww, wh) ? mobileText : desktopText;
// 	const showingLessText = !isShowingMore ? "more" : "less";
// 	return (
// 		<DragInstructionsContainer>
// 			<Fade top duration={revealSecs}>
// 				<Text s className='instructions__text'>
// 					Drag to the {instructionsText} and release to reveal {showingLessText}
// 				</Text>
// 			</Fade>
// 		</DragInstructionsContainer>
// 	);
// };

export const NavBar = () => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		setFullscreen,
		fullScreen,
		setModalVisible,
		modalVisible,
		setModalContent,
		navBarRight
	} = useContext(globalState);
	const { height: wh, width: ww } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const showLess = fullScreen ? false : !isShowingMore;
	const isContentPortrait = isPortrait(ww, wh);
	const setMenuModalContent = () => {
		setModalContent("menu");
		modalVisible ? setModalVisible(false) : setModalVisible(true);
	};
	const setMaximizeAndMinimize = () => {
		fullScreen ? setFullscreen(false) : setFullscreen(true);
	};
	return (
		<NavBarContainer
			className='navbar'
			fullScreen={fullScreen}
			hideMaximize={showLess}
			appHeight={wh}
			navBarRight={navBarRight}
			isPortrait={isContentPortrait}>
			<div className='navbar__logo-menu'>
				<TransitionGroup>
					{fullScreen ? (
						<Zoom duration={revealSecs}>
							<Text
								button
								s
								className='navbar__menu-text'
								onClick={setMenuModalContent}>
								{modalVisible ? `Back` : `Menu`}
							</Text>
						</Zoom>
					) : null}
				</TransitionGroup>
				<NavLink to='/'>
					<Media
						type='icon'
						className='navbar__logo svg'
						src={HerbieDuahLogo}
					/>
				</NavLink>
			</div>
			<TransitionGroup>
				{!showLess ? (
					<Zoom duration={revealSecs}>
						<Text
							s
							button
							className='navbar__maximize'
							onClick={setMaximizeAndMinimize}
							aria-hidden={showLess ? `true` : `false`}>
							M{fullScreen ? `in` : `ax`}imize
						</Text>
					</Zoom>
				) : null}
			</TransitionGroup>

			<Text s button>
				Contact
			</Text>
			{/*
			{fullScreen ? (
				<Fragment>
					<Fade up duration={revealSecs}>
						<Text
							button
							m
							className='navbar__menu-text'
							onClick={visible ? hide : show}>
							{visible ? `Back` : `Menu`}
						</Text>
					</Fade>
					<Modal visible={visible} onClose={hide} animation={`fade`}>
						<section className='navbar__fullScreen'>
							<MenuTabs showCategory={false} />
						</section>
					</Modal>
				</Fragment>
			) : null} */}
		</NavBarContainer>
	);
};
export const FullScreenModal = () => {
	const { modalVisible, modalContent, setModalVisible } = useContext(
		globalState
	);

	const hide = () => {
		setModalVisible(false);
	};
	return (
		<Modal visible={modalVisible} animation={`fade`} onClose={hide}>
			<ThisValueEqualsState thisValue='menu' stateValue={modalContent}>
				<section className='modal__container'>
					<MenuTabs showCategory={false} />
				</section>
			</ThisValueEqualsState>
		</Modal>
	);
};

export const ThisValueEqualsState = props => {
	const thisValue = props.thisValue;
	const stateValue = props.stateValue;
	const renderMe = thisValue === stateValue ? true : false;
	return (
		<Fragment>
			{renderMe ? <Fragment>{props.children}</Fragment> : null}
		</Fragment>
	);
};

export const SubMenuWrapper = props => {
	return (
		<Fade cascade duration={revealSecs}>
			<ul className='subMenu'>{props.children}</ul>
		</Fade>
	);
};

export const GradientTheme = props => {
	const { setTheme } = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const isContentPortrait = isPortrait(ww, wh);
	const themeValues = getTheGradient(props.themeValue);
	const changeTheme = () => setTheme(props.themeValue);
	return (
		<GradientCircle
			onClick={changeTheme}
			isPortrait={isContentPortrait}
			themeValues={themeValues}
		/>
	);
};

export const MenuTabs = props => {
	const showCategory = props.showCategory;
	return (
		<ReactTabs defaultIndex={-1}>
			<TabList>
				<Tab>
					<Text format bold m>
						Work
					</Text>
				</Tab>
				<Tab>
					<Text format bold m>
						About
					</Text>
				</Tab>
				<Tab>
					<Text format bold m>
						Customize
					</Text>
				</Tab>
				<Tab>
					<Text format bold m>
						Photography
					</Text>
				</Tab>
			</TabList>
			<TabPanel>
				<nav>
					<SubMenu showCategory={showCategory} category='work' />
				</nav>
			</TabPanel>
			<TabPanel>
				<nav>
					<SubMenu showCategory={showCategory} category='about' />
				</nav>
			</TabPanel>
			<TabPanel>
				<nav>
					<SubMenu showCategory={showCategory} category='customize' />
				</nav>
			</TabPanel>
			<TabPanel>
				<nav>
					<SubMenu showCategory={showCategory} category='photography' />
				</nav>
			</TabPanel>
		</ReactTabs>
	);
};

export const Log = props => {
	console.log(`rendering "${props.name}"`);
	return null;
};

const ContentWrapperContainer = props => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		dragging,
		fullScreen,
		whom
	} = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const isContentPortrait = isPortrait(ww, wh);
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
		isContentPortrait,
		fullScreen,
		whom
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
			isPortrait={isContentPortrait}
			dragging={dragging}
			fullScreen={fullScreen}
			showLess={showLess}
			showMore={showMore}>
			{children}
			{/* {showMore && isContentPortrait ? (
				<div className='content__slider-bg' />
			) : null} */}
		</ContentContainer>
	);
};

export const ContentWrapper = trackWindowScroll(ContentWrapperContainer);

export const HeaderFullScreen = props => {
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
		<ClickNHold
			time={2} // Time to keep pressing. Default is 2
			isPortrait={isPortrait(ww, wh)}
			fullScreen={fullScreen}
			onStart={onFullScreening}
			onClickNHold={onFullScreenTimeOutEnded} //Timeout callback
			onEnd={onFullScreenEnded}>
			{props.children}
		</ClickNHold>
	);
};

// export const ParallaxTest = () => {
// 	const parallaxRef = useRef();
// 	useEffect(() => {
// 		const parallax = new Parallax(parallaxRef.current);
// 		return () => {
// 			parallax.disable();
// 		};
// 	}, []);

// 	return (
// 		<ParallaxContainer className='parallax'>
// 			<div className='parallax__container' ref={parallaxRef}>
// 				<div className='parallax__bg' data-depth='1.00' />
// 			</div>
// 		</ParallaxContainer>
// 	);
// };
