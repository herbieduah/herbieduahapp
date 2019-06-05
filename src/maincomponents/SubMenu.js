import React from "react";
import Text from "../stylecomponents/Text";

export const SubMenu = props => {
	let category = props.category;
	switch (category) {
		case "work":
			return (
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
			);
		case "about":
			return (
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
			);
		case "photography":
			return (
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
			);
		case "fun":
			return (
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
			);
		default:
			return null;
	}
};

export default SubMenu;
