import React, { useState, Fragment } from "react";
import { useGlobalState } from "./State";
import { menu, revealValues, useWindowResize, isMobile } from "./helpers";
import SubMenu from "./maincomponents/SubMenu";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";

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
