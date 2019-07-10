import React, { Fragment, useContext, useEffect, useRef } from "react";
import { globalState } from "./State";
import { revealSecs } from "./helpers";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";
import { browserName, mobileModel } from "react-device-detect";
import { NavLink } from "react-router-dom";
import Media from "./maincomponents/Media";

const spacingBottom = "c-margin-bottom";
const spacingTopBottom = "c-margin-top c-margin-bottom";
export const Paragraph = props => {
	return (
		<Reveal>
			<Text m className={spacingBottom}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const Reveal = props => {
	return (
		<Fade duration={revealSecs}>
			<div>{props.children}</div>
		</Fade>
	);
};

export const HeadingOne = props => {
	return (
		<Reveal>
			<Text xxl className={spacingTopBottom}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const HeadingTwo = props => {
	return (
		<Reveal>
			<Text xl className={spacingTopBottom}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const HeadingThree = props => {
	return (
		<Reveal>
			<Text xl className={spacingTopBottom}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const Image = props => {
	const height = props.height;
	const src = props.src;
	const alt = props.alt;
	return (
		<Reveal>
			<Media
				type='image'
				height={height}
				src={src}
				alt={alt}
				className={spacingTopBottom}
			/>
		</Reveal>
	);
};

export const Figure = props => {
	const height = props.height;
	const src = props.src;
	const alt = props.alt;
	return (
		<Reveal>
			<figure className={spacingTopBottom}>
				<Media type='image' height={height} src={src} alt={alt} />
				{props.children}
			</figure>
		</Reveal>
	);
};

export const Figcaption = props => {
	return (
		<Reveal>
			<Text s figcaption>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const Gif = props => {
	const url = props.url;
	const desc = props.desc;
	return (
		<Reveal>
			<Media type='gif' url={url} desc={desc} className={spacingTopBottom} />
		</Reveal>
	);
};
