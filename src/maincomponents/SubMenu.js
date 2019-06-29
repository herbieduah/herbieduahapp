import React from "react";
import Text from "../stylecomponents/Text";
// import Fade from "react-reveal/Fade";
// import { CSSTransition } from "react-transition-group";
import { SubMenuWrapper } from "../Actions";
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
							<Text menuLink to='/'>
								HerbieDuah.app
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/UGG'>
								UGG
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/DiscountTire'>
								Discount Tire
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/BedzinExhibit'>
								Bedzin Exhibit
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/FlagstaffChamberofCommerce'>
								Flagstaff Chamber of Commerce
							</Text>
						</li>

						<li className='subMenu__item'>
							<Text menuLink to='/NorthernArizonaUniversity'>
								Northern Arizona University
							</Text>
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
							<Text menuLink to='/AboutMe'>
								About Me
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/SpecialThanks'>
								Special Thanks
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/Photography'>
								Photography
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/Inspiration'>
								Inspiration
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/Resume'>
								Resume
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/UXvsHX'>
								User Experience vs Human Experience
							</Text>
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
							<Text menuLink to='/colors'>
								Colors
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/theme'>
								Theme
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/tone'>
								Tone
							</Text>
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
							<Text menuLink to='/twitter'>
								Twitter
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/instagram'>
								Instagram
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text menuLink to='/linkedin'>
								LinkedIn
							</Text>
						</li>
					</SubMenuWrapper>
				</div>
			);
		default:
			return null;
	}
};

export default SubMenu;
