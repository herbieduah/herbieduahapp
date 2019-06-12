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
					// timeout={300}
					classNames='menu'
					// unmountOnExit
					// onEnter={() => setShowButton(false)}
					// onExited={() => setShowButton(true)}
				>
					<ul class='subMenu__list'>
						<Fade cascade up duration={1500}>
							<div>
								<li class='subMenu__item'>
									<Text m link href='#'>
										HerbieDuah.app
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Northern Arizona University
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										UGG
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Discount Tire
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Bedzin Exhibit
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Flagstaff Chamber of Commerce
									</Text>
								</li>
							</div>
						</Fade>
					</ul>
				</CSSTransition>
			);
		case "about":
			return (
				<CSSTransition
					// in={showMessage}
					// timeout={300}
					classNames='menu'
					// unmountOnExit
					// onEnter={() => setShowButton(false)}
					// onExited={() => setShowButton(true)}
				>
					<ul class='subMenu__list'>
						<Fade cascade up duration={1500}>
							<div>
								<li class='subMenu__item'>
									<Text m link href='#'>
										About Me
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Special Thanks
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Photography
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Inspiration
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										User Experience vs Human Experience
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Resume
									</Text>
								</li>
							</div>
						</Fade>
					</ul>
				</CSSTransition>
			);
		case "customize":
			return (
				<CSSTransition
					// in={showMessage}
					// timeout={300}
					classNames='menu'
					// unmountOnExit
					// onEnter={() => setShowButton(false)}
					// onExited={() => setShowButton(true)}
				>
					<ul class='subMenu__list'>
						<Fade cascade up duration={1500}>
							<div>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Colors
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Theme
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Tone
									</Text>
								</li>
							</div>
						</Fade>
					</ul>
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
					<ul class='subMenu__list'>
						<Fade cascade up duration={1500}>
							<div>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Twitter
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										Instagram
									</Text>
								</li>
								<li class='subMenu__item'>
									<Text m link href='#'>
										LinkedIn
									</Text>
								</li>
							</div>
						</Fade>
					</ul>
				</CSSTransition>
			);
		default:
			return null;
	}
};

export default SubMenu;
