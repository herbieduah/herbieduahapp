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
				<Fade duration={2000}>
					<ul className='menu__list'>
						<li>
							<Media
								type='icon'
								className='menu__logo svg'
								src={HerbieDuahLogo}
							/>
						</li>
						{/* <li className='menu__item'>
						<Media
							type='icon'
							className='menu__logo svg'
							src={herbieDuahLogo}
							onClick={localStorage.clear()}
						/>
					</li> */}
						<MenuAction category='work' />
						<MenuAction category='photography' />
						<MenuAction category='about' />
						<MenuAction category='fun' />
					</ul>
				</Fade>
			</nav>
		</MenuContainer>
	);
};

export default ContentMenu;
