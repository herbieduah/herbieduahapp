import React from "react";
import MenuContainer from "../stylecomponents/MenuContainer";
import { isMobile, useWindowResize } from "../helpers";
import Media from "../maincomponents/Media";
import HerbieDuahLogo from "../media/icons/HerbieDuahLogo.svg";
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
							<li>
								<Media
									type='icon'
									className='menu__logo svg'
									src={HerbieDuahLogo}
									tabindex='1'
								/>
							</li>

							<li className='menu__item'>
								<MenuAction category='work' />
							</li>
							<li className='menu__item'>
								<MenuAction category='photography' />
							</li>
							<li className='menu__item'>
								<MenuAction category='about' />
							</li>
							<li className='menu__item'>
								<MenuAction category='fun' />
							</li>
						</div>
					</Fade>
				</ul>
			</nav>
		</MenuContainer>
	);
};

export default ContentMenu;
