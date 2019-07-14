import React, { useContext } from "react";
import MenuContainer from "../stylecomponents/MenuContainer";
import {
	isPortrait,
	useWindowResize,
	revealValues,
	revealSecs,
	getCurrentTransition
} from "../helpers";
import SubMenu from "./SubMenu";
import { globalState } from "../State";
import Fade from "react-reveal/Fade";
import { MenuTabs } from "../ComponentHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export const ContentMenu = () => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		currentTransition,
		navBarRight,
		switchSides
	} = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const transitionClasses = getCurrentTransition(currentTransition);

	return (
		<MenuContainer
			isPortrait={isPortrait(ww, wh)}
			isShowingMore={isShowingMore}
			navBarRight={navBarRight}
			switchSides={switchSides}>
			<div className='animatecss-tamer'>
				<TransitionGroup>
					{!isShowingMore ? (
						<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
							<div className='animatecss-container'>
								<MenuTabs showCategory={isShowingMore} />
							</div>
						</CSSTransition>
					) : null}
					{isShowingMore ? (
						<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
							<div className='animatecss-container'>
								<nav className='menu__more'>
									<SubMenu showCategory={isShowingMore} category='work' />
									<SubMenu showCategory={isShowingMore} category='about' />
									<SubMenu showCategory={isShowingMore} category='customize' />
									<SubMenu
										showCategory={isShowingMore}
										category='photography'
									/>
									<div className='offset' />
								</nav>
							</div>
						</CSSTransition>
					) : null}
				</TransitionGroup>
			</div>
		</MenuContainer>
	);
};

export default ContentMenu;
