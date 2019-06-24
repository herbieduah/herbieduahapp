import React from "react";
import Text from "../stylecomponents/Text";
// import Fade from "react-reveal/Fade";
// import { CSSTransition } from "react-transition-group";
import { SubMenuWrapper } from "../Actions";
import { NavLink } from "react-router-dom";
export const SubMenu = props => {
	let category = props.category;
	const isShowingMore = props.isShowingMore;
	switch (category) {
		case "work":
			return (
				<div>
					{isShowingMore ? (
						<Text format m className='subMenu__text'>
							Work
						</Text>
					) : null}
					<SubMenuWrapper isShowingMore={isShowingMore}>
						<li className='subMenu__item'>
							<NavLink to='/'>HerbieDuah.app</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/UGG'>UGG</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/DiscountTire'>Discount Tire</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/BedzinExhibit'>Bedzin Exhibit</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/FlagstaffChamberofCommerce'>
								Flagstaff Chamber of Commerce
							</NavLink>
						</li>

						<li className='subMenu__item'>
							<NavLink to='/NorthernArizonaUniversity'>
								Northern Arizona University
							</NavLink>
						</li>
					</SubMenuWrapper>
				</div>
			);
		case "about":
			return (
				<div>
					{isShowingMore ? (
						<Text format m className='subMenu__text'>
							About
						</Text>
					) : null}
					<SubMenuWrapper isShowingMore={isShowingMore}>
						<li className='subMenu__item'>
							<NavLink to='/AboutMe'>About Me</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/SpecialThanks'>Special Thanks</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/Photography'>Photography</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/Inspiration'>Inspiration</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/Resume'>Resume</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/UXvsHX'>
								User Experience vs Human Experience
							</NavLink>
						</li>
					</SubMenuWrapper>
				</div>
			);
		case "customize":
			return (
				<div>
					{isShowingMore ? (
						<Text format m className='subMenu__text'>
							Customize
						</Text>
					) : null}
					<SubMenuWrapper isShowingMore={isShowingMore}>
						<li className='subMenu__item'>
							<NavLink to='/colors'>Colors</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/theme'>Theme</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/tone'>Tone</NavLink>
						</li>
					</SubMenuWrapper>
				</div>
			);
		case "contact":
			return (
				<div>
					{isShowingMore ? (
						<Text format m className='subMenu__text'>
							Contact
						</Text>
					) : null}
					<SubMenuWrapper isShowingMore={isShowingMore}>
						<li className='subMenu__item'>
							<NavLink to='/twitter'>Twitter</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/instagram'>Instagram</NavLink>
						</li>
						<li className='subMenu__item'>
							<NavLink to='/linkedin'>LinkedIn</NavLink>
						</li>
					</SubMenuWrapper>
				</div>
			);
		default:
			return null;
	}
};

export default SubMenu;
