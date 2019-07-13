import React, { useContext } from "react";
import MenuContainer from "../stylecomponents/MenuContainer";
import {
	isPortrait,
	useWindowResize,
	revealValues,
	revealSecs
} from "../helpers";
import SubMenu from "./SubMenu";
import { globalState } from "../State";
import Fade from "react-reveal/Fade";
import { MenuTabs } from "../ComponentHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const transitionClasses = {
	enter: "animated",
	enterActive: "rubberBand",
	exit: "animated",
	exitActive: "slideOutRight"
};
console.log(typeof transitionClasses);
export const ContentMenu = () => {
	const { contentWidth: cw, contentHeight: ch } = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	return (
		<MenuContainer
			isPortrait={isPortrait(ww, wh)}
			isShowingMore={isShowingMore}>
			<TransitionGroup>
				{!isShowingMore ? (
					<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
						<MenuTabs showCategory={isShowingMore} />
					</CSSTransition>
				) : null}
				{isShowingMore ? (
					<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
						<nav className='menu__more'>
							<SubMenu showCategory={isShowingMore} category='work' />
							<SubMenu showCategory={isShowingMore} category='about' />
							<SubMenu showCategory={isShowingMore} category='customize' />
							<SubMenu showCategory={isShowingMore} category='photography' />
							<div className='offset' />
						</nav>
					</CSSTransition>
				) : null}
			</TransitionGroup>
		</MenuContainer>
	);
};

export default ContentMenu;
