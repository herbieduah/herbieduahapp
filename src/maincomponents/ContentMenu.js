import React, { useContext, Fragment } from "react";
import Content from "./Content";
import Menu from "./Menu";
import { ContentMenuContainer } from "../stylecomponents/ContentMenuContainer";
import { globalState } from "../State";
import { NavBar } from "../ComponentHelpers";

export const ContentMenu = props => {
	const switchSides = props.switchSides;
	const { dragging } = useContext(globalState);
	return (
		<ContentMenuContainer
			className={`hdapp${switchSides ? "__content" : "__menu"}`}
			dragging={dragging}>
			{switchSides ? <Content /> : <Menu />}
		</ContentMenuContainer>
	);
};

export default ContentMenu;
