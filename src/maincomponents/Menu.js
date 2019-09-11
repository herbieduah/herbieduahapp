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
								<div className='menu__less'>
									<div className='menu__less-container'>
										<MenuTabs showCategory={isShowingMore} tabIndex={-1} />
									</div>
								</div>
							</div>
						</CSSTransition>
					) : null}
					{isShowingMore ? (
						<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
							<div className='animatecss-container'>
								<nav className='menu__more'>
									<SubMenu showCategory={isShowingMore} category='customize' />
									<SubMenu showCategory={isShowingMore} category='work' />
									<SubMenu
										showCategory={isShowingMore}
										category='photography'
									/>
									<SubMenu showCategory={isShowingMore} category='about' />

									<div className='offset' />
								</nav>
							</div>
						</CSSTransition>
					) : null}
				</TransitionGroup>
			</div>
			<div className='offset' />
		</MenuContainer>
	);
};

export default ContentMenu;
