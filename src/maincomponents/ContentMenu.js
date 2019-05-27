import React from "react";
import Content from "./Content";
import Menu from "./Menu";
import { ContentMenuContainer } from "../stylecomponents/ContentMenuContainer";

export const ContentMenu = props => {
	const switchSides = props.switchSides;
	return (
		<ContentMenuContainer
			className={`hdapp${switchSides ? "__content" : "__menu"}`}>
			{switchSides ? <Content /> : <Menu />}
		</ContentMenuContainer>
	);
};

export default ContentMenu;
