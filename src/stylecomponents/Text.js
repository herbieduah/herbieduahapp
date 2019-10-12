//Text Styled Components file for my web app.
import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import {
	mobile,
	mainTransition,
	tablet,
	crossOut,
	stripButtonStyle
} from "./StyleHelpers";

import {
	CTAColor,
	fontColor,
	appfontFamily,
	appfontFamilyTertiary,
	appfontFamilySecondary,
	navBarButtonColor,
	buttonColor,
	buttonColorHoverFocus,
	navBarButtonActive,
	navBarHoverFocus,
	CTAUnderline,
	colorSlightOpacity,
	buttonBorder,
	buttonBackground,
	buttonBackgroundHoverFocus
} from "./Themes/ThemeVariables";

const baseStyle = css`
	font-family: ${props => {
		if (props.tertiary) return appfontFamilyTertiary;
		if (props.secondary) return appfontFamilySecondary;
		return appfontFamily;
	}};
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
		if (props.s) return ".9em";
		if (props.m) return "1em";
		if (props.l) return "1.35em";
		if (props.large) return "1.35em";
		if (props.xl) return "2em";
		if (props.xxl) return "2.4em";
		return "1em";
	}};
	${mobile} {
		font-size: ${props => {
			if (props.xs) return "0.8em";
			if (props.s) return "0.9em";
			if (props.m) return "1em";
			if (props.l) return "1.3em";
			if (props.large) return "1.3em";
			if (props.xl) return "1.5em";
			if (props.xxl) return "1.7em";
			return "1em";
		}};
	}
	font-weight: ${props => {
		if (props.semibold) return "500";
		if (props.bold) return "700";
		if (props.extrabold) return "900";
		return "300";
	}};
	font-style: ${props => {
		if (props.italic) return "italic";
		return "normal";
	}};
	max-width: 100%;
	margin: 0;
`;

const HeadingOne = styled.h1`
	${baseStyle};
	font-weight: 800;
	font-family: ${appfontFamilySecondary};
`;

const HeadingTwo = styled.h2`
	${baseStyle};
	font-family: ${appfontFamilySecondary};
	font-weight: 500;
`;

const HeadingThree = styled.h3`
	${baseStyle};
	font-family: ${appfontFamilySecondary};
	font-weight: 400;
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
	font-family: ${appfontFamilyTertiary};
`;
const TextFormatter = styled.span`
	${baseStyle};
	display: flex;
`;
const Button = styled.button`
	${baseStyle};
	${stripButtonStyle}
	${mainTransition}
	font-family: ${appfontFamilySecondary};
	text-transform: uppercase;
	border: ${buttonBorder};
	hyphens: manual;
	background: ${buttonBackground};
	color: ${buttonColor};
	padding: 0.75rem 1.2rem;
	cursor: pointer;
	&:hover,
	&:focus {
		color: ${buttonColorHoverFocus};
		text-decoration: ${CTAUnderline};
		background: ${buttonBackgroundHoverFocus};
	}
	&.active,&.current {
		color: ${buttonColorHoverFocus};
		background: ${buttonBackgroundHoverFocus};
		text-decoration: ${CTAUnderline};
	}
`;
const ButtonText = styled.button`
	${baseStyle};
	${stripButtonStyle}
	${mainTransition}
	color: ${fontColor};
	text-transform: uppercase;
	font-family: ${appfontFamilySecondary};
	cursor: pointer;
	background: transparent;
	border: 0;
	padding: 0;
	letter-spacing: 1px;
	border-bottom: 2px solid rgba(0, 0, 0, 0);
	&:focus,
	&:hover {
		border-bottom: 2px solid ${colorSlightOpacity};
	}
	&.active,
	&.current {
		color: ${fontColor};
		border-bottom: 2px solid ${fontColor};
	}
`;
const HyperLink = styled.a`
	${baseStyle};
	${mainTransition}
	cursor: pointer;
	/* white-space: nowrap; */
	&:hover,
	&:focus {
		text-decoration: underline;
		font-weight: bold;
	}
	text-decoration: underline;
`;

const MenuLink = styled(NavLink)`
	${baseStyle};
	font-weight: 500;
	${mainTransition}
	position:relative;
	border: 0;
	hyphens: manual;
	background: none;
	color: ${navBarButtonColor};
	font-family: ${appfontFamilySecondary};
	border-bottom: 0;
	text-transform: uppercase;
	cursor: pointer;
	text-decoration: none;
	&::before{
		content: '';
		border-bottom: 2px solid rgba(0,0,0,0);
		${mainTransition}
		${crossOut};
	}
	${tablet} {
		hyphens: none;
	}
	&:hover,
	&:focus {
		color: ${navBarHoverFocus};
		&::before{
		content: '';
			border-bottom: 2px solid ${colorSlightOpacity};
		}
		/* text-decoration: ${CTAUnderline}; */
		/* border-bottom: 2px solid ${fontColor}; */
	}
	&.active,
	&.current {
		color: ${navBarButtonActive};
		&::before {
		content: '';
			border-bottom: 2px solid ${fontColor};
		}
		/* text-decoration: ${CTAUnderline}; */
		/* border-bottom: 2px solid ${fontColor}; */
	}
`;

const Text = ({
	h1,
	h2,
	h3,
	h4,
	h5,
	paragraph,
	button,
	buttontext,
	link,
	menuLink,
	figcaption,
	format,
	...props
}) => {
	if (h1) return <HeadingOne {...props} />;
	if (h2) return <HeadingTwo {...props} />;
	if (h3) return <HeadingThree {...props} />;
	if (h4) return <HeadingFour {...props} />;
	if (h5) return <HeadingFive {...props} />;
	if (button) return <Button tabIndex='0' {...props} />;
	if (buttontext) return <ButtonText {...props} />;
	if (link) return <HyperLink tabIndex='0' {...props} />;
	if (menuLink) return <MenuLink tabIndex='0' {...props} />;
	if (figcaption) return <Figcaption {...props} />;
	if (format) return <TextFormatter {...props} />;
	return <Paragraph {...props} />;
};

export default Text;
