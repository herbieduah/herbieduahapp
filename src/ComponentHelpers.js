import React, { Fragment, useContext, useEffect, useState } from "react";
import { globalState } from "./State";
import { revealValues, useWindowResize, isPortrait, revealSecs, getCurrentTransition } from "./helpers";
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
  ScrollDownPortrait,
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
import { thisAppGatsbySmiling } from "./MediaVariables";

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
    minimalMode,
    accessible,
  } = useContext(globalState);
  const { height: wh, width: ww } = useWindowResize();
  const values = { ww, wh, cw, ch };
  const isShowingMore = revealValues(values).isShowingMore;
  const showLess = fullScreen ? false : !isShowingMore;
  const isContentPortrait = isPortrait(ww, wh);
  const setMenuModalContent = () => {
    setModalContent("menu");
    modalVisible ? setModalVisible(false) : setModalVisible(true);
    // TODO change this later
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
          className="navbar"
          isPortrait={isContentPortrait}
          accessible={accessible}
          modalVisible={modalVisible}
          navBarComplement={navBarComplement}>
          <NavLink
            exact
            className="navbar__logo-link "
            to="/"
            tabIndex="0"
            aria-label="Logo"
            onClick={setMenuModalClose}>
            <Media type="icon" className="navbar__logo svg" src={HerbieDuahLogoSubtract} />
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
          <div className="navbar__logo-menu ">
            <ShowIf noAnimation thisValue={modalVisible} thatValue={true}>
              <ElementReveal>
                <Text buttontext s className="navbar__menu-text" onClick={setMenuModalContent}>
                  Back
                </Text>
              </ElementReveal>
            </ShowIf>
            <ShowIf noAnimation thisValue={modalVisible} thatValue={false}>
              <ElementReveal>
                <Text buttontext s light className="navbar__menu-text" onClick={setMenuModalContent}>
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
          className="navbar"
          fullScreen={fullScreen}
          // hideMaximize={showLess}
          appHeight={wh}
          navBarRight={navBarRight}
          isPortrait={isContentPortrait}
          navBarComplement={navBarComplement}>
          <div className="navbar__logo-menu">
            <NavLink exact className="navbar__logo-link" tabIndex="0" aria-label="Logo" to="/">
              <Media type="icon" className="navbar__logo svg" src={HerbieDuahLogo} />
            </NavLink>
            <TransitionGroup>
              {!showLess ? (
                <CSSTransition timeout={revealSecs} classNames={transitionClasses}>
                  {/* <div className='animatecss-container'> */}
                  <Text
                    menuLink
                    exact
                    to="/"
                    tabIndex="0"
                    className="navbar__home-text"
                    aria-hidden={showLess ? `true` : `false`}>
                    <span className="navbar__hdappText">.app</span>
                  </Text>
                </CSSTransition>
              ) : null}
            </TransitionGroup>
          </div>
          <Text
            m
            format
            role="button"
            aria-pressed={fullScreen ? `true` : `false`}
            className="navbar__maximize"
            onClick={setMaximizeAndMinimize}
            tabIndex="0"
            aria-hidden={showLess ? `true` : `false`}>
            <ShowIf thisValue={fullScreen && !showLess} thatValue={true}>
              Minimize
            </ShowIf>
            <ShowIf thisValue={!fullScreen && !showLess} thatValue={true}>
              Maximize
            </ShowIf>
          </Text>

          <Text className="navbar__contact" menuLink to="/contacts" tabIndex="0">
            Contact
          </Text>
        </NavBarContainer>
      </ShowIf>
    </Fragment>
  );
};
export const FullScreenModal = () => {
  const { modalVisible, modalContent, setModalVisible } = useContext(globalState);

  const hide = () => {
    setModalVisible(false);
  };
  return (
    <Modal visible={modalVisible} animation={`fade`} onClose={hide} className="modal">
      <div className="modal__container">
        <div className="modal__content">
          <ThisValueEqualsState thisValue="menu" stateValue={modalContent}>
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
    navBarRight,
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
    <SliderUIContainer className="sliderui" navBarRight={navBarRight}>
      <div className="sliderui__button-container">
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
  const { modalVisible, modalContent, currentTransition, navBarRight } = useContext(globalState);
  const transitionClasses = getCurrentTransition(currentTransition);
  return (
    <TransitionGroup>
      {modalVisible ? (
        <CSSTransition timeout={revealSecs} classNames={transitionClasses}>
          <FullScreenOverlayContainer navBarRight={navBarRight}>
            <div className="modal__container">
              <div className="modal__content">
                <ShowIf noAnimation thisValue="menu" thatValue={modalContent}>
                  <section className="menu">
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

export const ThisValueEqualsState = (props) => {
  const thisValue = props.thisValue;
  const stateValue = props.stateValue;
  const renderMe = thisValue === stateValue ? true : false;
  return <Fragment>{renderMe ? <Fragment>{props.children}</Fragment> : null}</Fragment>;
};

export const ShowIf = (props) => {
  const { currentTransition } = useContext(globalState);
  const transitionClasses = getCurrentTransition(currentTransition);
  const thisValue = props.thisValue;
  const thatValue = props.thatValue;
  const renderMe = thisValue === thatValue ? true : false;

  return (
    <Fragment>
      {props.noAnimation ? (
        <Fragment>{renderMe ? <Fragment>{props.children}</Fragment> : null}</Fragment>
      ) : (
        <TransitionGroup className={`${props.noAbsolute ? "" : "animatecss-tamer"}`}>
          {renderMe ? (
            <CSSTransition timeout={revealSecs} classNames={transitionClasses}>
              <div className={`${props.noAbsolute ? "" : "animatecss-container"}`}>{props.children}</div>
            </CSSTransition>
          ) : null}
        </TransitionGroup>
      )}
    </Fragment>
  );
};

export const SubMenuWrapper = (props) => {
  return (
    <ElementReveal>
      <ul className="subMenu">{props.children}</ul>
    </ElementReveal>
  );
};

export const MenuTabs = (props) => {
  const showCategory = props.showCategory;
  const defaultIndex = props.defaultIndex || 0;
  return (
    <ReactTabs defaultIndex={defaultIndex}>
      <ElementReveal className="react-tabs__wrapper">
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
          <SubMenu showCategory={showCategory} category="customize" />
        </nav>
      </TabPanel>
      <TabPanel>
        <nav>
          <SubMenu showCategory={showCategory} category="work" />
        </nav>
      </TabPanel>
      <TabPanel>
        <nav>
          <SubMenu showCategory={showCategory} category="photography" />
        </nav>
      </TabPanel>
      <TabPanel>
        <nav>
          <SubMenu showCategory={showCategory} category="about" />
        </nav>
      </TabPanel>
    </ReactTabs>
  );
};

export const MenuMini = () => {
  // const showCategory = props.showCategory;
  return <MenuTabs defaultIndex={-1} />;
};

export const Log = (props) => {
  console.log(`rendering "${props.name}"`);
  return null;
};

const ContentWrapperContainer = (props) => {
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
    downloaded,
    showAwardsBanner,
    setShowAwardsBanner,
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
    downloaded,
    showAwardsBanner,
    setShowAwardsBanner,
  };
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      contentProps,
    });
  });
  return (
    <ContentContainer
      className="content content-container"
      isShowingMore={isShowingMore}
      isPortrait={isContentPortrait}
      dragging={dragging}
      fullScreen={fullScreen}
      showLess={showLess}
      showMore={showMore}
      navBarRight={navBarRight}
      accessible={accessible}
      minimalMode={minimalMode}>
      {children}
    </ContentContainer>
  );
};

export const ContentWrapper = React.memo(ContentWrapperContainer);

export const HeaderFullScreen = (props) => {
  const { fullScreen, setFullScreening, setFullscreen } = useContext(globalState);
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
    exitActive: "fadeOut",
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
        <CSSTransition timeout={1000} classNames={startUpTransitions}>
          <StartUp>
            <div>
              {/* <Fade duration={1000}>
								<Text l wide className='startUp__nowadays'>
									Nowadays, there is an app for everything. <br />
								</Text>
							</Fade> */}
              <Fade duration={1000}>
                <ShowIf noAnimation thisValue={downloaded} thatValue={false}>
                  <Text l secondary bold className="startUp__future">
                    In the future, there is going to be an app for everyone.
                  </Text>
                </ShowIf>
                <ShowIf noAnimation thisValue={downloaded} thatValue={true}>
                  <Text l secondary bold className="startUp__future ">
                    Wow, you actually "downloaded" my app
                  </Text>
                </ShowIf>
              </Fade>
              <Fade delay={3000} duration={1500}>
                <ShowIf noAnimation thisValue={downloaded} thatValue={false}>
                  <Text l secondary bold className="startUp__my-own">
                    So I made my own.
                  </Text>
                </ShowIf>
                <ShowIf noAnimation thisValue={downloaded} thatValue={true}>
                  <Text l secondary bold className="startUp__my-own ">
                    You're amazing.
                  </Text>
                </ShowIf>
              </Fade>
              <Fade duration={500}>
                <div className="startUp__skip">
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
  const { dragging, showScrollDown, setShowScrollDown, fullScreen } = useContext(globalState);
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
