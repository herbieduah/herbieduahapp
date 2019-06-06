import React from "react";
import Text from "../stylecomponents/Text";
import Fade from "react-reveal/Fade";

export const SubMenu = props => {
	let category = props.category;
	switch (category) {
		case "work":
			return (
				<Fade duration={1500}>
					<div>
						<ul class='subMenu__list'>
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
						</ul>
					</div>
				</Fade>
			);
		case "about":
			return (
				<Fade duration={1500}>
					<div>
						<ul class='subMenu__list'>
							<li class='subMenu__item'>
								<Text m link href='#'>
									About Me
								</Text>
							</li>
							<li class='subMenu__item'>
								<Text m link href='#'>
									Recognition
								</Text>
							</li>
							<li class='subMenu__item'>
								<Text m link href='#'>
									Special Thanks
								</Text>
							</li>
							<li class='subMenu__item'>
								<Text m link href='#'>
									Contact
								</Text>
							</li>
						</ul>
					</div>
				</Fade>
			);
		case "photography":
			return (
				<Fade duration={1500}>
					<div>
						<ul class='subMenu__list'>
							<li class='subMenu__item'>
								<Text m link href='#'>
									People
								</Text>
							</li>
							<li class='subMenu__item'>
								<Text m link href='#'>
									Landscapes
								</Text>
							</li>
							<li class='subMenu__item'>
								<Text m link href='#'>
									Everything
								</Text>
							</li>
						</ul>
					</div>
				</Fade>
			);
		case "fun":
			return (
				<Fade duration={1500}>
					<div>
						<ul class='subMenu__list'>
							<li class='subMenu__item'>
								<Text m link href='#'>
									Customize this site
								</Text>
							</li>
							<li class='subMenu__item'>
								<Text m link href='#'>
									Pun Generator
								</Text>
							</li>
						</ul>
					</div>
				</Fade>
			);
		default:
			return null;
	}
};

export default SubMenu;
