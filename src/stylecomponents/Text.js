import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import {
	mobile,
	fontColor,
	buttonColorActive,
	buttonColor,
	linkColorActive,
	linkColor,
	mainTransition,
	buttonBorderColorActive,
	buttonBorderColor,
	linkBorderColorActive,
	linkBorderColor,
	navBorderColor,
	navBorderColorActive,
	navColor
} from "./StyleHelpers";

const baseStyle = css`
	font-family: "commuters-sans", -apple-system, BlinkMacSystemFont, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
	margin-bottom: ${props => props.noMargin && "0"};
	font-weight: 400;
	margin-top: 0;
	line-height: 1.5;
	color: ${fontColor};
	text-align: ${props => {
		if (props.center) return "center";
		if (props.right) return "right";
		return "left";
	}};

	font-size: ${props => {
		if (props.xs) return "0.8em";
		if (props.s) return "0.9em";
		if (props.m) return "1.2em";
		if (props.l) return "1.5em";
		if (props.xl) return "2em";
		return "1em";
	}};
	${mobile} {
		font-size: ${props => {
			if (props.xs) return "0.7em";
			if (props.s) return "0.8em";
			if (props.m) return "1em";
			if (props.l) return "1.35em";
			if (props.xl) return "1.7em";
			return ".85em";
		}};
	}
	font-weight: ${props => {
		if (props.bold) return "700";
		return "400";
	}};
	font-style: ${props => {
		if (props.italic) return "italic";
		return "normal";
	}};
	max-width: 100%;
	margin: 0 0 3%;
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

	/* @media (max-width: 480px) {
    font-size: 40px;
  } */
`;

const HeadingTwo = styled.h2`
	line-height: 1;
	line-height: 1.25;
	${baseStyle};
`;

const HeadingThree = styled.h3`
	${baseStyle};
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
const TextFormatter = styled.span`
	${baseStyle};
`;
const Button = styled.button`
	${baseStyle};
	font-weight: 700;
	${mainTransition}
	line-height: 1;
	border: 0;
	padding: 0;
	background: none;
	color: ${buttonColor};
	cursor: pointer;
	border-bottom: 1px solid ${buttonBorderColor};
	white-space: nowrap;
	&:hover,
	&:focus {
		color: ${buttonColorActive};
		border-bottom: 3px solid ${buttonBorderColorActive};
	}
`;
/* const HyperLink = styled.a`
	${baseStyle};
	font-weight: 400;
	${mainTransition}
	line-height: 1;
	border: 0;
	padding: 0;
	background: none;
	color: ${linkColor};
	cursor: pointer;
	border-bottom: 1px solid ${linkBorderColor};
	white-space: nowrap;
	&:hover,
	&:focus {
		color: ${linkColorActive};
		border-bottom: 3px solid ${linkBorderColorActive};
	}
	text-decoration: none;
`; */

const HyperLink = styled.a`
	${baseStyle};
	font-weight: 400;
	${mainTransition}
	line-height: 1;
	border: 0;
	padding: 0.2rem 0.7rem;
	background: none;
	color: ${navColor};
	cursor: pointer;
	border: 1px solid ${navBorderColor};
	white-space: nowrap;
	border-radius: 1.1rem;
	&:hover,
	&:focus {
		border: 1px solid ${navBorderColorActive};
	}
	&.active {
		color: ${navBorderColorActive};
		border: 1px solid ${navColor};
		background-color: ${navColor};
	}
	text-decoration: none;
	margin-bottom: 5%;
`;

const MenuLink = styled(NavLink)`
	${baseStyle};
	font-weight: 400;
	${mainTransition}
	line-height: 1;
	border: 0;
	padding: 0;
	background: none;
	color: ${linkColor};
	cursor: pointer;
	border-bottom: 1px solid ${linkBorderColor};
	white-space: nowrap;
	&:hover,
	&:focus {
		color: ${linkColorActive};
		border-bottom: 3px solid ${linkBorderColorActive};
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
	noMargin,
	button,
	right,
	center,
	link,
	menuLink,
	format,
	...props
}) => {
	if (h1)
		return (
			<HeadingOne
				noMargin={noMargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (h2)
		return (
			<HeadingTwo
				noMargin={noMargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (h3)
		return (
			<HeadingThree
				noMargin={noMargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (h4)
		return (
			<HeadingFour
				noMargin={noMargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (h5)
		return (
			<HeadingFive
				noMargin={noMargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	if (button)
		return (
			<Button noMargin={noMargin} right={right} center={center} {...props} />
		);
	if (link)
		return (
			<HyperLink noMargin={noMargin} right={right} center={center} {...props} />
		);
	if (menuLink)
		return (
			<MenuLink noMargin={noMargin} right={right} center={center} {...props} />
		);
	if (format)
		return (
			<TextFormatter
				noMargin={noMargin}
				right={right}
				center={center}
				{...props}
			/>
		);
	return (
		<Paragraph noMargin={noMargin} right={right} center={center} {...props} />
	);
};

export default Text;
