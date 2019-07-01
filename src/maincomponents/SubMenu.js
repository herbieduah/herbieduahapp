import React, { useContext } from "react";
import { globalState } from "../State";
import Text from "../stylecomponents/Text";
// import Fade from "react-reveal/Fade";
// import { CSSTransition } from "react-transition-group";
import { SubMenuWrapper } from "../ComponentHelpers";
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
						<Text format m bold className='subMenu__text'>
							Work
						</Text>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/'>
								HerbieDuah.app
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
							<Text menuLink to='/BedzinExhibit'>
								Bedzin Exhibit
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/FlagstaffChamberofCommerce'>
								Flagstaff Chamber of Commerce
							</Text>
						</li>

						<li onClick={hideModal} className='subMenu__item'>
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
					{showCategory ? (
						<Text format m bold className='subMenu__text'>
							About
						</Text>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/AboutMe'>
								About Me
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/SpecialThanks'>
								Special Thanks
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/Photography'>
								Photography
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/Inspiration'>
								Inspiration
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/Resume'>
								Resume
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
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
					{showCategory ? (
						<Text format m bold className='subMenu__text'>
							Customize
						</Text>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/colors'>
								Colors
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/theme'>
								Theme
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
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
					{showCategory ? (
						<Text format m bold className='subMenu__text'>
							Photography
						</Text>
					) : null}
					<SubMenuWrapper showCategory={showCategory}>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/naturephotography'>
								Nature Photography
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/portraitphotography'>
								Portrait Photography
							</Text>
						</li>
						<li onClick={hideModal} className='subMenu__item'>
							<Text menuLink to='/iphonephotography'>
								iPhone Photography
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
