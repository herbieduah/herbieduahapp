import React, { Fragment, useContext } from "react";
import { globalState } from "./State";
import {
	revealValues,
	useWindowResize,
	isPortrait,
	revealSecs,
	getCurrentTransition
} from "./helpers";
import { ElementReveal } from "./ContentHelpers";
import Text from "./stylecomponents/Text";
// import Parallax from "parallax-js";
import { browserName, mobileModel } from "react-device-detect";
import {
	NavBarContainer,
	NavBarMiniContainer,
	// DragInstructionsContainer,
	FullScreenOverlayContainer
	// ParallaxContainer
	// FullScreeningBGContainer
} from "./stylecomponents/Base";
import ClickNHold from "react-click-n-hold";
import HerbieDuahLogo from "./media/icons/HerbieDuahLogo.svg";
import HerbieDuahLogoSubtract from "./media/icons/HerbieDuahLogoSubtract.svg";
import Media from "./maincomponents/Media";
import ContentContainer from "./stylecomponents/ContentContainer";
import { NavLink } from "react-router-dom";
import Modal from "./maincomponents/Modal";
import { Tab, TabList, TabPanel } from "react-tabs";
import { ReactTabs } from "./stylecomponents/Base";
import SubMenu from "./maincomponents/SubMenu";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import Zoom from "react-reveal/Zoom";

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
		navBarRight,
		currentTransition,
		navBarComplement,
		minimalMode
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
	const setMenuModalClose = () => {
		setModalVisible(false);
	};
	const setMaximizeAndMinimize = () => {
		fullScreen ? setFullscreen(false) : setFullscreen(true);
	};
	const transitionClasses = getCurrentTransition(currentTransition);
	return (
		<Fragment>
			<ShowIf noAnimation thisValue={minimalMode} thatValue={true}>
				<NavBarMiniContainer
					className='navbar'
					isPortrait={isContentPortrait}
					modalVisible={modalVisible}
					navBarComplement={navBarComplement}>
					<NavLink
						exact
						className='navbar__logo-link'
						to='/'
						onClick={setMenuModalClose}>
						<Media
							type='icon'
							className='navbar__logo svg'
							src={HerbieDuahLogoSubtract}
						/>
					</NavLink>
					<ShowIf noAnimation thisValue={modalVisible} thatValue={true}>
						<Text m button onClick={setMenuModalContent}>
							<NavLink to='/contacts'>Contact</NavLink>
						</Text>
					</ShowIf>
					<div className='navbar__logo-menu'>
						<Text
							button
							s
							className='navbar__menu-text'
							onClick={setMenuModalContent}>
							{modalVisible ? `Back` : `Menu`}
						</Text>
					</div>

					{/* <Text m button>
				<NavLink to='/contacts'>Contact</NavLink>
			</Text> */}
				</NavBarMiniContainer>
			</ShowIf>
			<ShowIf noAnimation thisValue={minimalMode} thatValue={false}>
				<NavBarContainer
					className='navbar'
					fullScreen={fullScreen}
					// hideMaximize={showLess}
					appHeight={wh}
					navBarRight={navBarRight}
					isPortrait={isContentPortrait}
					navBarComplement={navBarComplement}>
					<div className='navbar__logo-menu'>
						<NavLink exact className='navbar__logo-link' to='/'>
							<Media
								type='icon'
								className='navbar__logo svg'
								src={HerbieDuahLogo}
							/>
							<TransitionGroup>
								{!showLess ? (
									<CSSTransition
										timeout={revealSecs}
										classNames={transitionClasses}>
										{/* <div className='animatecss-container'> */}
										<Text
											s
											button
											className='navbar__home-text'
											aria-hidden={showLess ? `true` : `false`}>
											Home
										</Text>
									</CSSTransition>
								) : null}
							</TransitionGroup>
						</NavLink>
					</div>
					<TransitionGroup>
						{!showLess ? (
							<CSSTransition
								timeout={revealSecs}
								classNames={transitionClasses}>
								{/* <div className='animatecss-container'> */}
								<Text
									s
									button
									className='navbar__maximize'
									onClick={setMaximizeAndMinimize}
									aria-hidden={showLess ? `true` : `false`}>
									M{fullScreen ? `in` : `ax`}imize
								</Text>
								{/* </div> */}
							</CSSTransition>
						) : null}
					</TransitionGroup>

					<Text s button>
						<NavLink to='/contacts'>Contact</NavLink>
					</Text>
				</NavBarContainer>
			</ShowIf>
		</Fragment>
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
		<Modal
			visible={modalVisible}
			animation={`fade`}
			onClose={hide}
			className='modal'>
			<div className='modal__container'>
				<div className='modal__content'>
					<ThisValueEqualsState thisValue='menu' stateValue={modalContent}>
						<section>
							<MenuTabs showCategory={false} />
						</section>
					</ThisValueEqualsState>
				</div>
			</div>
		</Modal>
	);
};

export const FullScreenOverlay = () => {
	const {
		modalVisible,
		modalContent,
		currentTransition,
		navBarRight
	} = useContext(globalState);
	const transitionClasses = getCurrentTransition(currentTransition);
	return (
		<TransitionGroup>
			{modalVisible ? (
				<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
					<FullScreenOverlayContainer navBarRight={navBarRight}>
						<div className='modal__container'>
							<div className='modal__content'>
								<ShowIf noAnimation thisValue='menu' thatValue={modalContent}>
									<section>
										<MenuMini showCategory={true} />
									</section>
								</ShowIf>
							</div>
						</div>
					</FullScreenOverlayContainer>
				</CSSTransition>
			) : null}
		</TransitionGroup>
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

export const ShowIf = props => {
	const { currentTransition } = useContext(globalState);
	const transitionClasses = getCurrentTransition(currentTransition);
	const thisValue = props.thisValue;
	const thatValue = props.thatValue;
	const renderMe = thisValue === thatValue ? true : false;

	return (
		<Fragment>
			{props.noAnimation ? (
				<Fragment>
					{renderMe ? <Fragment>{props.children}</Fragment> : null}
				</Fragment>
			) : (
				<TransitionGroup className='animatecss-tamer'>
					{renderMe ? (
						<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
							<div className='animatecss-container'>{props.children}</div>
						</CSSTransition>
					) : null}
				</TransitionGroup>
			)}
		</Fragment>
	);
};

export const SubMenuWrapper = props => {
	return (
		<ElementReveal>
			<ul className='subMenu'>{props.children}</ul>
		</ElementReveal>
	);
};

export const MenuTabs = props => {
	const showCategory = props.showCategory;
	const tabIndex = props.tabIndex || 0;
	return (
		<ReactTabs defaultIndex={tabIndex}>
			<ElementReveal>
				<TabList>
					<Tab>
						<Text format xs wide>
							For You
						</Text>
					</Tab>
					<Tab>
						<Text format xs wide>
							Work
						</Text>
					</Tab>
					<Tab>
						<Text format xs wide>
							Photography
						</Text>
					</Tab>
					<Tab>
						<Text format xs wide>
							About
						</Text>
					</Tab>
				</TabList>
			</ElementReveal>
			<TabPanel>
				<nav>
					<SubMenu showCategory={showCategory} category='customize' />
				</nav>
			</TabPanel>
			<TabPanel>
				<nav>
					<SubMenu showCategory={showCategory} category='work' />
				</nav>
			</TabPanel>
			<TabPanel>
				<nav>
					<SubMenu showCategory={showCategory} category='photography' />
				</nav>
			</TabPanel>
			<TabPanel>
				<nav>
					<SubMenu showCategory={showCategory} category='about' />
				</nav>
			</TabPanel>
		</ReactTabs>
	);
};

export const MenuMini = props => {
	const showCategory = props.showCategory;
	return (
		<nav>
			<SubMenu showCategory={showCategory} category='customize' />
			<SubMenu showCategory={showCategory} category='work' />
			<SubMenu showCategory={showCategory} category='photography' />
			<SubMenu showCategory={showCategory} category='about' />
		</nav>
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
		whom,
		currentTheme,
		setTheme,
		navBarRight,
		navBarComplement,
		minimalMode,
		setNavBarRight,
		setNavBarComplement,
		setMinimalMode,
		lazyLoading,
		setLazyLoading,
		techy,
		setTechy,
		setFullscreen,
		setSides,
		switchSides
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
		whom,
		currentTheme,
		setTheme,
		setFullscreen,
		navBarRight,
		navBarComplement,
		setNavBarRight,
		minimalMode,
		setNavBarComplement,
		setMinimalMode,
		lazyLoading,
		setLazyLoading,
		techy,
		setTechy,
		setSides,
		switchSides
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
			showMore={showMore}
			navBarRight={navBarRight}
			minimalMode={minimalMode}>
			<div className='animatecss-tamer'>{children}</div>
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
