import React from "react";
import Text from "../stylecomponents/Text";
// import Fade from "react-reveal/Fade";
// import { CSSTransition } from "react-transition-group";
import { SubMenuWrapper } from "../Actions";
import { BrowserRouter as Router } from "react-router-dom";

export const SubMenu = props => {
	let category = props.category;
	const isShowingMore = props.isShowingMore;
	switch (category) {
		case "work":
			return (
				<Router>
					{isShowingMore ? (
						<Text format m className='subMenu__text'>
							Work
						</Text>
					) : null}
					<SubMenuWrapper isShowingMore={isShowingMore}>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								HerbieDuah.app
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								UGG
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Discount Tire
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Bedzin Exhibit
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Flagstaff Chamber of Commerce
							</Text>
						</li>

						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Northern Arizona University
							</Text>
						</li>
					</SubMenuWrapper>
				</Router>
			);
		case "about":
			return (
				<Router>
					{isShowingMore ? (
						<Text format m className='subMenu__text'>
							About
						</Text>
					) : null}
					<SubMenuWrapper isShowingMore={isShowingMore}>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								About Me
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Special Thanks
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Photography
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Inspiration
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Resume
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								User Experience vs Human Experience
							</Text>
						</li>
					</SubMenuWrapper>
				</Router>
			);
		case "customize":
			return (
				<Router>
					{isShowingMore ? (
						<Text format m className='subMenu__text'>
							Customize
						</Text>
					) : null}
					<SubMenuWrapper isShowingMore={isShowingMore}>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Colors
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Theme
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Tone
							</Text>
						</li>
					</SubMenuWrapper>
				</Router>
			);
		case "contact":
			return (
				<Router>
					{isShowingMore ? (
						<Text format m className='subMenu__text'>
							Contact
						</Text>
					) : null}
					<SubMenuWrapper isShowingMore={isShowingMore}>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Twitter
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								Instagram
							</Text>
						</li>
						<li className='subMenu__item'>
							<Text s menuLink to='/'>
								LinkedIn
							</Text>
						</li>
					</SubMenuWrapper>
				</Router>
			);
		default:
			return null;
	}
};

export default SubMenu;
