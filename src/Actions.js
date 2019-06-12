import React, { useState, Fragment } from "react";
import { useGlobalState } from "./State";
import { menu, revealValues, useWindowResize, isMobile } from "./helpers";
import SubMenu from "./maincomponents/SubMenu";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";
import { FullScreenContainer, NavBarContainer } from "./stylecomponents/Base";
import ClickNHold from "react-click-n-hold";
import HerbieDuahLogo from "./media/icons/HerbieDuahLogo.svg";
import Media from "./maincomponents/Media";

export const MenuAction = props => {
	const [menuShow, setMenuShow] = useState("");
	const { contentWidth: cw, contentHeight: ch } = useGlobalState();
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const category = props.category;
	// const [category] = useState(props.category);
	return (
		<Fragment>
			<Text
				l={!isShowingMore}
				s={isShowingMore}
				button
				onClick={() => setMenuShow(menu(category, menuShow))}
				className='menu__button menu__button--active'>
				{category}
			</Text>
			{menuShow === category || isShowingMore ? (
				<SubMenu category={category} />
			) : null}
		</Fragment>
	);
};

export const DragInstructions = props => {
	const {
		dragging,
		switchSides,
		contentWidth: cw,
		contentHeight: ch
	} = useGlobalState();
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

export const FullScreenButton = props => {
	const { fullScreen, setFullScreening, setFullscreen } = useGlobalState();
	const { width: ww, height: wh } = useWindowResize();
	// const values = { ww, wh, cw, ch };
	// const isShowingMore = revealValues(values).isShowingMore;
	const onFullScreening = () => {
		setFullScreening(true);
	};
	const onFullScreenEnded = () => {
		setFullScreening(false);
		setFullscreen(!false);
	};
	return (
		<FullScreenContainer ww={ww} wh={wh} fullScreen={fullScreen}>
			<ClickNHold
				time={2} // Time to keep pressing. Default is 2
				// onStart={this.start}
				onClickNHold={onFullScreening} //Timeout callback
				onEnd={onFullScreenEnded}
				className='fullScreen'>
				<span className='fullScreen__icon'>
					<span className='fullScreen__dot' />
				</span>
			</ClickNHold>
		</FullScreenContainer>
	);
};

export const NavBar = props => {
	return (
		<NavBarContainer>
			<Media type='icon' className='hdapp__logo svg' src={HerbieDuahLogo} />
			<FullScreenButton />
		</NavBarContainer>
	);
};
