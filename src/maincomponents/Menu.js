import React from "react";
import MenuContainer from "../stylecomponents/MenuContainer";
import { isMobile, useWindowResize } from "../helpers";
import { MenuAction } from "../Actions";
import Fade from "react-reveal/Fade";

export const ContentMenu = () => {
	const { width: ww, height: wh } = useWindowResize();
	return (
		<MenuContainer isMobile={isMobile(ww, wh)}>
			<nav className='menu'>
				<ul className='menu__list'>
					<Fade
						cascade
						right={!isMobile(ww, wh)}
						left={isMobile(ww, wh)}
						duration={1000}>
						<div>
							<li className='menu__item'>
								<MenuAction category='work' />
							</li>
							<li className='menu__item'>
								<MenuAction category='about' />
							</li>
							<li className='menu__item'>
								<MenuAction category='customize' />
							</li>
							<li className='menu__item'>
								<MenuAction category='contact' />
							</li>
						</div>
					</Fade>
				</ul>
			</nav>
		</MenuContainer>
	);
};

export default ContentMenu;
