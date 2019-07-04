import React, { useContext, Fragment } from "react";
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

export const ContentMenu = () => {
	const { contentWidth: cw, contentHeight: ch } = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	return (
		<MenuContainer isPortrait={isPortrait(ww, wh)} isShowingMore={isShowingMore}>
			<Fade up duration={revealSecs}>
				{!isShowingMore ? (
					<MenuTabs showCategory={isShowingMore} />
				) : (
					<nav className='menu__more'>
						<SubMenu showCategory={isShowingMore} category='work' />
						<SubMenu showCategory={isShowingMore} category='about' />
						<SubMenu showCategory={isShowingMore} category='customize' />
						<SubMenu showCategory={isShowingMore} category='photography' />
						<div className='offset' />
					</nav>
				)}
				{/* <nav className='menu'>
				<ul className='menu__list'>
					<Fade
						cascade
						right={!isPortrait(ww, wh)}
						left={isPortrait(ww, wh)}
						duration={1000}>
						<div>
							<li className='menu__item'>
								<SubMenu  showCategory={isShowingMore} category='work' />
							</li>
							<li className='menu__item'>
								<SubMenu  showCategory={isShowingMore} category='about' />
							</li>
							<li className='menu__item'>
								<SubMenu  showCategory={isShowingMore} category='customize' />
							</li>
							<li className='menu__item'>
								<SubMenu  showCategory={isShowingMore} category='contact' />
							</li>
						</div>
					</Fade>
				</ul>
			</nav> */}
			</Fade>
		</MenuContainer>
	);
};

export default ContentMenu;
