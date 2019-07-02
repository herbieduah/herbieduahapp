import React, { Fragment, useContext } from "react";
import { globalState } from "./State";
import { revealValues, useWindowResize, isMobile, revealSecs } from "./helpers";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";
import { browserName, mobileModel } from "react-device-detect";
import {
	FullScreenContainer,
	NavBarContainer
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

export const NavBar = () => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		setFullscreen,
		fullScreen,
		setModalVisible,
		modalVisible,
		setModalContent
	} = useContext(globalState);
	const { height: wh, width: ww } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const showLess = fullScreen ? false : !isShowingMore;

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
			appHeight={wh}>
			<div className='navbar__logo-menu'>
				{fullScreen ? (
					<Fragment>
						<Fade bottom duration={revealSecs}>
							<Text
								button
								m
								className='navbar__menu-text'
								onClick={setMenuModalContent}>
								{modalVisible ? `Back` : `Menu`}
							</Text>
						</Fade>
					</Fragment>
				) : null}
				<NavLink to='/'>
					<Media
						type='icon'
						className='navbar__logo svg'
						src={HerbieDuahLogo}
					/>
				</NavLink>
			</div>
			{!showLess ? (
				<Fade bottom duration={revealSecs}>
					<Text
						m
						button
						className='navbar__maximize'
						onClick={setMaximizeAndMinimize}
						aria-hidden={showLess ? `true` : `false`}>
						M{fullScreen ? `in` : `ax`}imize
					</Text>
				</Fade>
			) : null}

			<Text m button>
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
		<Fade cascade up duration={revealSecs}>
			<ul className='subMenu'>{props.children}</ul>
		</Fade>
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
					<SubMenu showCategory={showCategory} category='contact' />
				</nav>
			</TabPanel>
		</ReactTabs>
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
		fullScreen,
		whom
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
			isMobile={isContentMobile}
			dragging={dragging}
			fullScreen={fullScreen}
			showLess={showLess}
			showMore={showMore}>
			{children}
			{/* {showMore && isContentMobile ? (
				<div className='content__slider-bg' />
			) : null} */}
		</ContentContainer>
	);
};

export const ContentShow = props => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		fullScreen,
		setFullScreening,
		setFullscreen
	} = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const isContentMobile = isMobile(ww, wh);
	const showMore = fullScreen ? true : isShowingMore;
	const showLess = fullScreen ? false : !isShowingMore;
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

	if (props.less) {
		return (
			<Fragment>
				<aside className='content__less'>
					<Fade up duration={revealSecs}>
						{props.children}
					</Fade>
				</aside>
			</Fragment>
		);
	}
	if (props.more) {
		return (
			<Fragment>
				{showMore ? <Fragment>{props.children}</Fragment> : null}
			</Fragment>
		);
	}
	if (props.header) {
		return (
			<Fade up duration={revealSecs}>
				<ClickNHold
					time={2} // Time to keep pressing. Default is 2
					isMobile={isMobile(ww, wh)}
					fullScreen={fullScreen}
					onStart={onFullScreening}
					onClickNHold={onFullScreenTimeOutEnded} //Timeout callback
					onEnd={onFullScreenEnded}>
					<header className='content__header container'>
						<Text h1 xl={showMore} s={showLess} extrabold>
							{props.header}
						</Text>
					</header>
				</ClickNHold>
			</Fade>
		);
	}
};

export const ComingSoon = props => {
	return (
		<Fade up duration={revealSecs}>
			<div className='container'>
				<Text m>Working on the content for {props.header}.</Text>
			</div>
		</Fade>
	);
};

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
			isMobile={isMobile(ww, wh)}
			fullScreen={fullScreen}
			onStart={onFullScreening}
			onClickNHold={onFullScreenTimeOutEnded} //Timeout callback
			onEnd={onFullScreenEnded}>
			{props.children}
		</ClickNHold>
	);
};
