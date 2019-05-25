import React, { useState } from "react";
import { useGlobalState } from "./State";
import { menu, revealValues, useWindowResize } from "./helpers";
import SubMenu from "./maincomponents/SubMenu";

export const MenuAction = props => {
	const { menuShow, setMenuShow } = useState("");
	const { contentWidth, contentHeight } = useGlobalState();
	const { width, height } = useWindowResize();
	const values = { width, height, contentWidth, contentHeight };
	const isShowingMore = revealValues(values).isShowingMore;
	const category = this.props.category;
	return (
		<li className='menu__item'>
			<button
				onClick={() => setMenuShow(menu(category, menuShow))}
				className='menu__button menu__button--active'>
				{category}
			</button>
			{menuShow === category || isShowingMore ? (
				<SubMenu category={category} />
			) : null}
		</li>
	);
};
