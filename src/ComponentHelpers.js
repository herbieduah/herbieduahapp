import React, { Fragment, useContext, useEffect, useState } from "react";
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
	StartUp,
	// DragInstructionsContainer,
	FullScreenOverlayContainer,
	ScrollDownPortrait
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
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { ReactTabs, SliderUIContainer } from "./stylecomponents/Base";
import SubMenu from "./maincomponents/SubMenu";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Fade from "react-reveal/Fade";

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
						className='navbar__logo-link '
						to='/'
						tabIndex='0'
						aria-label='Logo'
						onClick={setMenuModalClose}>
						<Media
							type='icon'
							className='navbar__logo svg'
							src={HerbieDuahLogoSubtract}
						/>
					</NavLink>
					{/* <ShowIf noAnimation thisValue={modalVisible} thatValue={true}>
						<Text
							className='navbar__contact'
							onClick={setMenuModalContent}
							menuLink
							s
							tabIndex='0'
							to='/contacts'>
							Contact
						</Text>
					</ShowIf> */}
					<div className='navbar__logo-menu '>
						<ShowIf noAnimation thisValue={modalVisible} thatValue={true}>
							<ElementReveal>
								<Text
									buttontext
									s
									className='navbar__menu-text'
									onClick={setMenuModalContent}>
									Back
								</Text>
							</ElementReveal>
						</ShowIf>
						<ShowIf noAnimation thisValue={modalVisible} thatValue={false}>
							<ElementReveal>
								<Text
									buttontext
									s
									light
									className='navbar__menu-text'
									onClick={setMenuModalContent}>
									Menu
								</Text>
							</ElementReveal>
						</ShowIf>
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
						<NavLink
							exact
							className='navbar__logo-link'
							tabIndex='0'
							aria-label='Logo'
							to='/'>
							<Media
								type='icon'
								className='navbar__logo svg'
								src={HerbieDuahLogo}
							/>
						</NavLink>
						<TransitionGroup>
							{!showLess ? (
								<CSSTransition
									timeout={revealSecs}
									classNames={transitionClasses}>
									{/* <div className='animatecss-container'> */}
									<Text
										menuLink
										exact
										to='/'
										tabIndex='0'
										className='navbar__home-text'
										aria-hidden={showLess ? `true` : `false`}>
										<span className='navbar__hdappText'>.app</span>
									</Text>
								</CSSTransition>
							) : null}
						</TransitionGroup>
					</div>
					<Text
						m
						format
						role='button'
						aria-pressed={fullScreen ? `true` : `false`}
						className='navbar__maximize'
						onClick={setMaximizeAndMinimize}
						tabIndex='0'
						aria-hidden={showLess ? `true` : `false`}>
						<ShowIf thisValue={fullScreen && !showLess} thatValue={true}>
							Minimize
						</ShowIf>
						<ShowIf thisValue={!fullScreen && !showLess} thatValue={true}>
							Maximize
						</ShowIf>
					</Text>

					<Text
						className='navbar__contact'
						menuLink
						to='/contacts'
						tabIndex='0'>
						Contact
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

export const SliderUIMode = () => {
	const {
		// setAccessible,
		setMinimalMode,
		setFullscreen,
		navBarRight
		// setVideoControls,
		// setNavBarComplement,
		// accessible,
		// contentWidth: cw,
		// contentHeight: ch
	} = useContext(globalState);

	// const { height: wh, width: ww } = useWindowResize();
	// const values = { ww, wh, cw, ch };
	// const isShowingMore = revealValues(values).isShowingMore;
	// const isContentPortrait = isPortrait(ww, wh);

	const activateAccessibilityMode = () => {
		setMinimalMode(true);
		setFullscreen(true);
		// accessible ? setMinimalMode(false) : setMinimalMode(true);
		// accessible ? setFullscreen(false) : setFullscreen(true);
		// accessible ? setVideoControls(false) : setVideoControls(true);
		// accessible ? setNavBarComplement(false) : setNavBarComplement(true);
		// accessible ? setAccessible(false) : setAccessible(true);
	};

	return (
		// <ShowIf noAbsolute thisValue={isShowingMore} thatValue={false}>
		<SliderUIContainer className='sliderui' navBarRight={navBarRight}>
			<div className='sliderui__button-container'>
				<ElementReveal>
					<Text buttontext s onClick={activateAccessibilityMode}>
						disable slider ui
					</Text>
				</ElementReveal>
			</div>
			{/* <Text
					format
					xs
					onClick={activateAccessibilityMode}
					className='accessibility__text'>
					(You can de-activate in Settings)
				</Text> */}
		</SliderUIContainer>
		// </ShowIf>
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
									<section className='menu'>
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
				<TransitionGroup
					className={`${props.noAbsolute ? "" : "animatecss-tamer"}`}>
					{renderMe ? (
						<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
							<div
								className={`${props.noAbsolute ? "" : "animatecss-container"}`}>
								{props.children}
							</div>
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
	const defaultIndex = props.defaultIndex || 0;
	return (
		<ReactTabs defaultIndex={defaultIndex}>
			<ElementReveal className='react-tabs__wrapper'>
				<TabList>
					<Tab>
						<Text format tertiary xs>
							Customize
						</Text>
					</Tab>
					<Tab>
						<Text format tertiary xs>
							Work
						</Text>
					</Tab>
					<Tab>
						<Text format tertiary xs>
							Photos
						</Text>
					</Tab>
					<Tab>
						<Text format tertiary xs>
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

export const MenuMini = () => {
	// const showCategory = props.showCategory;
	return <MenuTabs defaultIndex={-1} />;
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
		forDev,
		setForDev,
		setFullscreen,
		setSides,
		forYou,
		switchSides,
		setAccessible,
		accessible,
		videoControls,
		setVideoControls,
		downloaded
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
		forDev,
		setForDev,
		setSides,
		switchSides,
		forYou,
		setAccessible,
		accessible,
		videoControls,
		setVideoControls,
		downloaded
	};
	const children = React.Children.map(props.children, (child, index) => {
		return React.cloneElement(child, {
			contentProps
		});
	});
	return (
		<ContentContainer
			className='content content-container'
			isShowingMore={isShowingMore}
			isPortrait={isContentPortrait}
			dragging={dragging}
			fullScreen={fullScreen}
			showLess={showLess}
			showMore={showMore}
			navBarRight={navBarRight}
			accessible={accessible}
			minimalMode={minimalMode}>
			<div id='awwwards'>
				<a href='https://www.awwwards.com' target='_blank'>
					<svg width='53.08' height='171.358'>
						<path
							class='js-color-bg'
							fill='#5ABDB2'
							d='M0 0h53.08v171.358H0z'></path>
						<g class='js-color-text' fill='#fff'>
							<path d='M20.048 153.585v-2.002l6.752-3.757h-6.752v-1.9h10.23v2.002l-6.752 3.757h6.752v1.9zM29.899 142.382a3.317 3.317 0 0 1-1.359 1.293c-.575.297-1.223.446-1.944.446-.721 0-1.369-.149-1.944-.446a3.317 3.317 0 0 1-1.359-1.293c-.331-.564-.497-1.232-.497-2.003 0-.769.166-1.437.497-2.002a3.332 3.332 0 0 1 1.359-1.294c.575-.297 1.224-.445 1.944-.445.722 0 1.369.148 1.944.445a3.326 3.326 0 0 1 1.359 1.294c.33.565.496 1.233.496 2.002.001.77-.166 1.438-.496 2.003m-1.703-3.348c-.435-.331-.967-.497-1.601-.497s-1.167.166-1.601.497c-.434.332-.65.78-.65 1.345s.217 1.014.65 1.346c.434.33.967.496 1.601.496s1.166-.166 1.601-.496c.434-.332.649-.78.649-1.346.001-.565-.215-1.013-.649-1.345M22.912 134.996v-1.812h1.185c-.43-.283-.752-.593-.973-.929-.219-.336-.329-.732-.329-1.19 0-.479.127-.902.38-1.272.254-.37.635-.633 1.141-.79-.478-.262-.851-.591-1.118-.985a2.221 2.221 0 0 1-.402-1.265c0-.682.2-1.218.599-1.607.4-.391.957-.585 1.668-.585h5.218v1.812H25.37c-.682 0-1.023.303-1.023.907 0 .467.264.85.789 1.146.527.299 1.286.446 2.28.446h2.865v1.813H25.37c-.682 0-1.023.303-1.023.906 0 .468.275.851.826 1.147.551.298 1.352.446 2.404.446h2.704v1.812h-7.369zM21.626 122.457c-.225.224-.502.336-.833.336s-.608-.112-.833-.336a1.128 1.128 0 0 1-.336-.833c0-.331.111-.609.336-.833.225-.225.502-.336.833-.336s.608.111.833.336c.225.224.337.502.337.833 0 .332-.112.608-.337.833m1.286-1.739h7.366v1.813h-7.366v-1.813zM22.912 118.668v-1.812h1.185a3.348 3.348 0 0 1-.951-1.009 2.434 2.434 0 0 1-.351-1.272c0-.681.19-1.229.57-1.644.38-.414.931-.621 1.651-.621h5.263v1.812h-4.722c-.418 0-.727.096-.92.285-.195.19-.293.447-.293.769 0 .302.116.58.351.833.233.254.577.458 1.03.613.453.156.992.234 1.615.234h2.938v1.812h-7.366zM29.833 109.129a3.33 3.33 0 0 1-1.432 1.169 4.535 4.535 0 0 1-1.805.373 4.537 4.537 0 0 1-1.807-.373c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.771.183-1.413.549-1.93a3.28 3.28 0 0 1 1.382-1.141 4.221 4.221 0 0 1 1.709-.364h.746v5.071c.447-.02.838-.183 1.168-.49.332-.307.498-.724.498-1.248 0-.41-.093-.754-.277-1.031-.186-.278-.473-.529-.863-.753l.542-1.462c.69.303 1.224.724 1.592 1.265.371.541.556 1.235.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.52-.262.258-.395.61-.395 1.06 0 .428.137.784.409 1.067.272.282.604.458.994.525v-3.172zM29.833 100.878c-.375.531-.852.921-1.432 1.169a4.552 4.552 0 0 1-3.612 0c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.77.183-1.412.549-1.93a3.278 3.278 0 0 1 1.382-1.14 4.222 4.222 0 0 1 1.709-.365h.746v5.072a1.794 1.794 0 0 0 1.168-.49c.332-.307.498-.724.498-1.249 0-.41-.093-.753-.277-1.031-.186-.277-.473-.528-.863-.753l.542-1.462c.69.302 1.224.724 1.592 1.265.371.541.556 1.234.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.573c-.41.088-.746.261-1.009.519-.262.258-.395.611-.395 1.06 0 .429.137.784.409 1.067.272.282.604.458.994.526v-3.172zM35.481 16.926l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.781-14.969h3.713l2.673 10.276 2.524-10.276h3.445l2.524 10.276 2.674-10.276zM37.979 27.083c1.426 0 2.495 1.068 2.495 2.495 0 1.425-1.069 2.495-2.495 2.495-1.425 0-2.495-1.07-2.495-2.495-.001-1.427 1.07-2.495 2.495-2.495'></path>
						</g>
					</svg>
				</a>
			</div>
			{children}
		</ContentContainer>
	);
};

export const ContentWrapper = React.memo(ContentWrapperContainer);

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

export const AppStartUp = () => {
	const [showApp, setShowApp] = useState(true);
	const { downloaded } = useContext(globalState);
	const startUpTransitions = {
		// enter: "animated",
		// 	enterActive: "bounceIn",
		exit: "animated",
		exitActive: "fadeOut"
	};
	const showTheApp = () => {
		if (showApp) {
			setTimeout(() => {
				setShowApp(false);
			}, 5000);
		}
	};
	const skipIntro = () => {
		setShowApp(false);
	};

	useEffect(() => {
		showTheApp();
	});
	return (
		<TransitionGroup>
			{showApp ? (
				<CSSTransition timeout={4000} classNames={startUpTransitions}>
					<StartUp>
						<div>
							{/* <Fade duration={1000}>
								<Text l wide className='startUp__nowadays'>
									Nowadays, there is an app for everything. <br />
								</Text>
							</Fade> */}
							<Fade duration={1000}>
								<ShowIf noAnimation thisValue={downloaded} thatValue={false}>
									<Text l secondary bold className='startUp__future'>
										In the future, there is going to be an app for everyone.
									</Text>
								</ShowIf>
								<ShowIf noAnimation thisValue={downloaded} thatValue={true}>
									<Text l secondary bold className='startUp__future '>
										Wow, you actually "downloaded" my app
									</Text>
								</ShowIf>
							</Fade>
							<Fade delay={3000} duration={1500}>
								<ShowIf noAnimation thisValue={downloaded} thatValue={false}>
									<Text l secondary bold className='startUp__my-own'>
										So I made my own.
									</Text>
								</ShowIf>
								<ShowIf noAnimation thisValue={downloaded} thatValue={true}>
									<Text l secondary bold className='startUp__my-own '>
										You're amazing.
									</Text>
								</ShowIf>
							</Fade>
							<Fade duration={500}>
								<div className='startUp__skip'>
									<Text m buttontext onClick={skipIntro}>
										skip intro
									</Text>
								</div>
							</Fade>
						</div>
					</StartUp>
				</CSSTransition>
			) : null}
		</TransitionGroup>
	);
};

export const ScrollDownIndicator = () => {
	const {
		dragging,
		showScrollDown,
		setShowScrollDown,
		fullScreen
	} = useContext(globalState);
	// const [showScrollDown, setShowScrollDown] = useState(true);
	// const [count, setCount] = useState(true);
	// const startUpTransitions = {
	// 	// enter: "animated",
	// 	// 	enterActive: "bounceIn",
	// 	exit: "animated",
	// 	exitActive: "fadeOut"
	// };
	const showTheScrollDown = () => {
		if (!dragging) {
			setTimeout(() => {
				setShowScrollDown(false);
			}, 8500);
		}
	};
	// const setScrollDownCount = () => {
	// 	if (isShowingMore) {
	// 		// setCount(count + 1);
	// 	}
	// 	console.log(`current count: ${count}`);
	// };

	useEffect(() => {
		showTheScrollDown();
		// setScrollDownCount();
	});
	return (
		<ShowIf
			// noAbsolute
			thisValue={showScrollDown && !fullScreen}
			thatValue={true}>
			{/* <ElementReveal> */}
			<Fade delay={1000} duration={1000}>
				<ScrollDownPortrait dragging={dragging} />
			</Fade>
			{/* </ElementReveal> */}
		</ShowIf>
	);
};
