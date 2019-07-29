import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import {
	mobile,
	buttonColorActive,
	buttonColor,
	linkColor,
	mainTransition,
	buttonBorderColorActive,
	buttonBorderColor,
	navColor,
	navColorActive
} from "./StyleHelpers";

import {
	CTAColor,
	fontColor,
	appfontFamily,
	appfontFamilyWide,
	appfontFamilyExtraWide
} from "./Themes/ThemeVariables";

const baseStyle = css`
	font-family: ${appfontFamily};
	font-family: ${props => {
		if (props.wide) return appfontFamilyWide;
		if (props.extrawide) return appfontFamilyExtraWide;
		return appfontFamily;
	}};
	font-weight: 400;
	margin: 0;
	line-height: ${props => {
		if (props.nolineheight) return "1";
		return "1.5";
	}};
	color: ${props => {
		if (props.ctacolor) return CTAColor;
		return fontColor;
	}};
	text-align: ${props => {
		if (props.center) return "center";
		if (props.right) return "right";
		return "left";
	}};

	font-size: ${props => {
		if (props.xs) return "0.8em";
		if (props.s) return "1.05em";
		if (props.m) return "1.2em";
		if (props.l) return "1.5em";
		if (props.xl) return "2em";
		if (props.xxl) return "2.5em";
		return "1em";
	}};
	${mobile} {
		font-size: ${props => {
			if (props.xs) return "0.8em";
			if (props.s) return "0.85em";
			if (props.m) return "1.05em";
			if (props.l) return "1.3em";
			if (props.xl) return "1.6em";
			if (props.xxl) return "1.9em";
			return "1em";
		}};
	}
	font-weight: ${props => {
		if (props.bold) return "700";
		if (props.extrabold) return "900";
		return "400";
	}};
	font-style: ${props => {
		if (props.italic) return "italic";
		return "normal";
	}};
	max-width: 100%;
`;

baseStyle.defaultProps = {
	theme: {
		fontFamily: '"Assistant", sans-serif',
		fontColor: "#111111",
		ctaColor: "blue"
	}
};

const HeadingOne = styled.h1`
	${baseStyle};
	font-family: ${appfontFamilyExtraWide};

	/* @media (max-width: 480px) {
    font-size: 40px;
  } */
`;

const HeadingTwo = styled.h2`
	line-height: 1;
	line-height: 1.25;
	${baseStyle};
	font-family: ${appfontFamilyWide};
`;

const HeadingThree = styled.h3`
	${baseStyle};
	font-family: ${appfontFamilyWide};
`;

const HeadingFour = styled.h4`
	${baseStyle};
`;

const HeadingFive = styled.h5`
	${baseStyle};
`;

const Paragraph = styled.p`
	${baseStyle};
`;

const Figcaption = styled.figcaption`
	${baseStyle};
`;
const TextFormatter = styled.span`
	${baseStyle};
	display: flex;
`;
const Button = styled.button`
	${baseStyle};
	font-weight: 700;
	${mainTransition}
	line-height: 1.2;
	border: 0;
	text-transform: uppercase;
	hyphens: manual;
	background: none;
	color: ${navColor};
	font-family: ${appfontFamilyWide};
	cursor: pointer;
	&:hover,
	&:focus {
		color: ${navColorActive};
	}
	&.active {
		color: ${navColorActive};
	}
	text-decoration: none;
`;
const HyperLink = styled.a`
	${baseStyle};
	font-weight: 400;
	${mainTransition}
	cursor: pointer;
	white-space: nowrap;
	&:hover,
	&:focus {
		text-decoration: underline;
	}
	text-decoration: none;
`;
const MenuLink = styled(NavLink)`
	${baseStyle};
	font-weight: 700;
	${mainTransition}
	line-height: 1.2;
	border: 0;
	hyphens: manual;
	background: none;
	color: ${navColor};
	font-family: ${appfontFamilyWide};
	cursor: pointer;
	font-size: 2em;
	${mobile} {
		font-size: 1.7em;
	}
	&:hover,
	&:focus {
		color: ${navColorActive};
	}
	&.active {
		color: ${navColorActive};
	}
	text-decoration: none;
`;

const Text = ({
	h1,
	h2,
	h3,
	h4,
	h5,
	paragraph,
	nomargin,
	button,
	right,
	center,
	link,
	menuLink,
	figcaption,
	format,
	...props
}) => {
	if (h1)
		return (
			<HeadingOne
				nomargin={nomargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (h2)
		return (
			<HeadingTwo
				nomargin={nomargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (h3)
		return (
			<HeadingThree
				nomargin={nomargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (h4)
		return (
			<HeadingFour
				nomargin={nomargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (h5)
		return (
			<HeadingFive
				nomargin={nomargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (button)
		return (
			<Button nomargin={nomargin} right={right} center={center} {...props} />
		);
	if (link)
		return (
			<HyperLink nomargin={nomargin} right={right} center={center} {...props} />
		);
	if (menuLink)
		return (
			<MenuLink nomargin={nomargin} right={right} center={center} {...props} />
		);
	if (figcaption)
		return (
			<Figcaption
				nomargin={nomargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (format)
		return (
			<TextFormatter
				nomargin={nomargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	return (
		<Paragraph nomargin={nomargin} right={right} center={center} {...props} />
	);
};

export default Text;
