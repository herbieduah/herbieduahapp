import React, { useContext } from "react";
import { globalState } from "../State";
import Text from "../stylecomponents/Text";
// import Fade from "react-reveal/Fade";
// import { CSSTransition } from "react-transition-group";
import { SubMenuWrapper } from "../ComponentHelpers";
// import Fade from "react-reveal/Fade";
import { ElementReveal } from "../ContentHelpers";
// import TransitionGroup from "react-transition-group/TransitionGroup";
// import { revealSecs } from "../helpers";
export const SubMenu = props => {
	let category = props.category;
	const showCategory = props.showCategory;
	const { setModalVisible } = useContext(globalState);

	const hideModal = () => {
		setModalVisible(false);
	};
	switch (category) {
		case "work":
			return (
				<div>
					{showCategory ? (
						<ElementReveal>
							<Text format micro s className='subMenu__text '>
								Work
							</Text>
						</ElementReveal>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/StartNow'>
								Start Now
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/BedzinExhibit'>
								Bedzin Exhibit
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/UGG'>
								UGG
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/DiscountTire'>
								Discount Tire
							</Text>
						</li>

						{/* <li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/CulturalSuicide'>
								Cultural $uicide
							</Text>
						</li> */}
					</SubMenuWrapper>
				</div>
			);
		case "about":
			return (
				<div>
					{showCategory ? (
						<ElementReveal>
							<Text format micro s className='subMenu__text'>
								About
							</Text>
						</ElementReveal>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						{/* <li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/UXvsHX'>
								An App For Everyone
							</Text>
						</li> */}
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/Inspiration'>
								Inspiration
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/CaseStudy'>
								Case Study
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/Resume'>
								Experience
							</Text>
						</li>
						{/* <li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/SpecialThanks'>
								Special&shy; Thanks
							</Text>
						</li> */}
						{/* <li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/Inspiration'>
								Inspiration
							</Text>
						</li> */}

						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/AboutMe'>
								About Me
							</Text>
						</li>
					</SubMenuWrapper>
				</div>
			);
		case "customize":
			return (
				<div>
					{showCategory ? (
						<ElementReveal>
							<Text format micro s className='subMenu__text margin-top-0 '>
								Customize
							</Text>
						</ElementReveal>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/settings'>
								Settings
							</Text>
						</li>
						{/* <li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/gradients'>
								Gradients
							</Text>
						</li> */}
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/backgrounds'>
								Backgrounds
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/animations'>
								Animations
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/themes'>
								Themes
							</Text>
						</li>
					</SubMenuWrapper>
				</div>
			);
		case "photography":
			return (
				<div>
					{showCategory ? (
						<ElementReveal>
							<Text format micro s className='subMenu__text'>
								Photography
							</Text>
						</ElementReveal>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/peoplephotography'>
								People
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/placesphotography'>
								Places
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/iphonephotography'>
								ShotOniPhone
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink xl={true} to='/modeling'>
								Modeling
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
