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
							<Text format s className='subMenu__text '>
								Work
							</Text>
						</ElementReveal>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/StartNow'>
								Start Now
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/BedzinExhibit'>
								Bedzin Exhibit
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/UGG'>
								UGG
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/DiscountTire'>
								Discount Tire
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/HerbieDuahApp'>
								Herbie&shy;Duah.app
							</Text>
						</li>
						{/* <li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/CulturalSuicide'>
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
							<Text format s className='subMenu__text'>
								About
							</Text>
						</ElementReveal>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						{/* <li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/UXvsHX'>
								An App For Everyone
							</Text>
						</li> */}
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/Resume'>
								Experience
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/SpecialThanks'>
								Special&shy; Thanks
							</Text>
						</li>
						{/* <li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/Inspiration'>
								Inspiration
							</Text>
						</li> */}

						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/AboutMe'>
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
							<Text format s className='subMenu__text margin-top-0 '>
								Customize
							</Text>
						</ElementReveal>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/settings'>
								Settings
							</Text>
						</li>
						{/* <li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/gradients'>
								Gradients
							</Text>
						</li> */}
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/backgrounds'>
								Backgrounds
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/transitions'>
								Transitions
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/theme'>
								Theme
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
							<Text format s className='subMenu__text'>
								Photography
							</Text>
						</ElementReveal>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/peoplephotography'>
								People
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/placesphotography'>
								Places
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/iphonephotography'>
								iPhone
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/modeling'>
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
