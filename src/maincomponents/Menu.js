import React from "react";
import MenuContainer from "../stylecomponents/MenuContainer";
import { MenuAction } from "../Actions";

export const ContentMenu = () => {
	return (
		<MenuContainer>
			<nav className='menu'>
				<ul className='menu__list'>
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
			</nav>
		</MenuContainer>
	);
};

export default ContentMenu;
