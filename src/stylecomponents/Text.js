import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import {
	mobile,
	// buttonColorActive,
	// buttonColor,
	// linkColor,
	mainTransition,
	// halyardDisplay,
	// buttonBorderColorActive,
	// buttonBorderColor,
	// navColor,
	// navColorActive,
	tablet
} from "./StyleHelpers";

import {
	CTAColor,
	fontColor,
	appfontFamily,
	appfontFamilyWide,
	appfontFamilyExtraWide,
	navBarButtonColor,
	buttonColor,
	buttonColorHoverFocus,
	navBarButtonActive,
	navBarHoverFocus
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
		if (props.s) return ".85em";
		if (props.m) return "1em";
		if (props.medium) return "1em";
		if (props.l) return "1.5em";
		if (props.xl) return "2em";
		if (props.xxl) return "2.4em";
		return "1em";
	}};
	${mobile} {
		font-size: ${props => {
			if (props.xs) return "0.8em";
			if (props.s) return "0.9em";
			if (props.m) return "1em";
			if (props.medium) return "1.07em";
			if (props.l) return "1.3em";
			if (props.xl) return "1.5em";
			if (props.xxl) return "1.7em";
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
	letter-spacing: 0.5px;
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
	font-weight: 600;
	font-family: ${appfontFamilyExtraWide};
	/* @media (max-width: 480px) {
    font-size: 40px;
  } */
`;

const HeadingTwo = styled.h2`
	${baseStyle};
	font-family: ${appfontFamilyWide};
	font-weight: 500;
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
	font-weight: 300;
`;

const Figcaption = styled.figcaption`
	${baseStyle};
	font-weight: 300;
`;
const TextFormatter = styled.span`
	${baseStyle};
	display: flex;
	font-weight: 300;
`;
const Button = styled.button`
	${baseStyle};
	font-weight: 600;
	${mainTransition}
	font-family: ${appfontFamilyWide};
	border: 0;

	text-transform: uppercase;
	hyphens: manual;
	background: none;
	color: ${buttonColor};
	font-family: ${appfontFamilyWide};
	cursor: pointer;
	&:hover,
	&:focus {
		color: ${buttonColorHoverFocus};
	}
	&.active {
		color: ${buttonColorHoverFocus};
	}
	text-decoration: none;
`;
const HyperLink = styled.a`
	${baseStyle};
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
	font-weight: 600;
	${mainTransition}
	/* line-height: 1.2; */
	letter-spacing: 1px;
	border: 0;
	hyphens: manual;
	background: none;
	color: ${navBarButtonColor};
	font-family: ${appfontFamilyWide};
	cursor: pointer;
	/* font-size: 2em; */
	text-transform: uppercase;
	${mobile} {
		/* font-size: 1.7em; */
	}
	${tablet} {
		/* font-size: 1.3em; */
		/* margin-bottom: 0.5rem; */
		hyphens: none;
	}
	&:hover,
	&:focus {
		color: ${navBarHoverFocus};
	}
	&.active {
		color: ${navBarButtonActive};
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
