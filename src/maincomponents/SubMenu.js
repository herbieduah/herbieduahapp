import React from "react";

export const SubMenu = props => {
	let category = props.category;
	switch (category) {
		case "work":
			return (
				<ul class='subMenu__list'>
					<li class='subMenu__item'>Herbie Duah (this website)</li>
					<li class='subMenu__item'>Northern Arizona University</li>
					<li class='subMenu__item'>UGG</li>
					<li class='subMenu__item'>Discount Tire</li>
					<li class='subMenu__item'>Bedzin Exhibit</li>
					<li class='subMenu__item'>Flagstaff Chamber of Commerce</li>
				</ul>
			);
		case "about":
			return (
				<ul class='subMenu__list'>
					<li class='subMenu__item'>About Me</li>
					<li class='subMenu__item'>Recognition</li>
					<li class='subMenu__item'>Special Thanks</li>
					<li class='subMenu__item'>Contact</li>
				</ul>
			);
		case "photography":
			return (
				<ul class='subMenu__list'>
					<li class='subMenu__item'>People</li>
					<li class='subMenu__item'>Landscapes</li>
					<li class='subMenu__item'>Everything</li>
				</ul>
			);
		case "fun":
			return (
				<ul class='subMenu__list'>
					<li class='subMenu__item'>Customize this site</li>
					<li class='subMenu__item'>Pun Generator</li>
				</ul>
			);
		default:
			return null;
	}
};

export default SubMenu;
