import React from "react";
import Text from "../stylecomponents/Text";
import Fade from "react-reveal/Fade";
import { CSSTransition } from "react-transition-group";

export const SubMenu = props => {
	let category = props.category;
	switch (category) {
		case "work":
			return (
				<CSSTransition
					// in={showMessage}
					timeout={300}
					classNames='menu'
					// unmountOnExit
					// onEnter={() => setShowButton(false)}
					// onExited={() => setShowButton(true)}
				>
					<Fade cascade up duration={1500} className='subMenu__list'>
						<ul className='subMenu__list'>
							<li className='subMenu__item'>
								<Text s link href='#'>
									HerbieDuah.app
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Northern Arizona University
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									UGG
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Discount Tire
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Bedzin Exhibit
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Flagstaff Chamber of Commerce
								</Text>
							</li>
						</ul>
					</Fade>
				</CSSTransition>
			);
		case "about":
			return (
				<CSSTransition
					// in={showMessage}
					timeout={300}
					classNames='menu'
					// unmountOnExit
					// onEnter={() => setShowButton(false)}
					// onExited={() => setShowButton(true)}
				>
					<Fade cascade up duration={1500} className='subMenu__list'>
						<ul className='subMenu__list'>
							<li className='subMenu__item'>
								<Text s link href='#'>
									About Me
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Special Thanks
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Photography
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Inspiration
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									User Experience vs Human Experience
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Resume
								</Text>
							</li>
						</ul>
					</Fade>
				</CSSTransition>
			);
		case "customize":
			return (
				<CSSTransition
					// in={showMessage}
					timeout={300}
					classNames='menu'
					// unmountOnExit
					// onEnter={() => setShowButton(false)}
					// onExited={() => setShowButton(true)}
				>
					<Fade cascade up duration={1500}>
						<ul className='subMenu__list'>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Colors
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Theme
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Tone
								</Text>
							</li>
						</ul>
					</Fade>
				</CSSTransition>
			);
		case "contact":
			return (
				<CSSTransition
					// in={showMessage}
					// timeout={300}
					classNames='menu'
					// unmountOnExit
					// onEnter={() => setShowButton(false)}
					// onExited={() => setShowButton(true)}
				>
					<Fade cascade up duration={1500}>
						<ul className='subMenu__list'>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Twitter
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									Instagram
								</Text>
							</li>
							<li className='subMenu__item'>
								<Text s link href='#'>
									LinkedIn
								</Text>
							</li>
						</ul>
					</Fade>
				</CSSTransition>
			);
		default:
			return null;
	}
};

export default SubMenu;
