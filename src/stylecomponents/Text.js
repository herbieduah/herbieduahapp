import React from "react";
import styled, { css } from "styled-components";
import { mobile } from "./StyleHelpers";

const baseStyle = css`
	@import url("https://fonts.googleapis.com/css?family=Assistant");
	font-family: ${props => props.theme.fontFamily};
	margin-bottom: ${props => props.noMargin && "0"};
	font-weight: 400;
	margin-top: 0;
	line-height: 1.5;
	color: ${props => props.theme.fontColor};
	text-align: ${props => {
		if (props.center) return "center";
		if (props.right) return "right";
		return "left";
	}};
	font-size: ${props => {
		if (props.xs) return "0.8em";
		if (props.s) return "0.9em";
		if (props.m) return "1.1em";
		if (props.l) return "1.5em";
		if (props.xl) return "2em";
		return "1em";
	}};
	font-weight: ${props => {
		if (props.bold) return "700";
		return "400";
	}};
	font-style: ${props => {
		if (props.italic) return "italic";
		return "normal";
	}};
	max-width: 100%;
	margin: 0 0 5%;
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
	${mobile} {
		font-size: 1rem;
	}
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

const Text = ({
	h1,
	h2,
	h3,
	h4,
	h5,
	paragraph,
	noMargin,
	right,
	center,
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
	return (
		<Paragraph noMargin={noMargin} right={right} center={center} {...props} />
	);
};

export default Text;
