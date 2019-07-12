import React from "react";
import { revealSecs } from "./helpers";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";
import Media from "./maincomponents/Media";
export const defaultAlt = "I will be adding an alt tag to this image soon";
export const defaultDesc = "This is a video, I will be describing it soon";
const spacingBottom = "c-margin-bottom";
const spacingTopBottom = "c-margin-top c-margin-bottom";

export const Reveal = props => {
	return (
		<Fade duration={revealSecs}>
			<div>{props.children}</div>
		</Fade>
	);
};

export const Paragraph = props => {
	return (
		<Reveal>
			<Text m className={`${spacingBottom} ${props.className}`}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const Small = props => {
	return (
		<Reveal>
			<Text s className={`${spacingBottom} ${props.className}`}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const HeadingOne = props => {
	return (
		<Reveal>
			<Text h1 xxl bold className={`${spacingTopBottom} ${props.className}`}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const HeadingTwo = props => {
	return (
		<Reveal>
			<Text h2 xl className={`${spacingTopBottom} ${props.className}`}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const HeadingThree = props => {
	return (
		<Reveal>
			<Text h2 l className={`${spacingTopBottom} ${props.className}`}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const Image = props => {
	// const height = props.height;
	const src = props.src;
	const alt = props.alt ? props.alt : defaultAlt;
	return (
		<Reveal>
			<Media
				type='image'
				src={src}
				alt={alt}
				className={`${spacingBottom} ${props.className}`}
			/>
		</Reveal>
	);
};

export const Figure = props => {
	// const height = props.height;
	const src = props.src;
	const alt = props.alt ? props.alt : defaultAlt;
	return (
		<Reveal>
			<figure className={`${spacingBottom} ${props.className}`}>
				<Media type='image' src={src} alt={alt} />
				{props.children}
			</figure>
		</Reveal>
	);
};

export const Figcaption = props => {
	return (
		<Text s figcaption>
			{props.children}
		</Text>
	);
};

export const Gif = props => {
	const url = props.url;
	const desc = props.desc ? props.desc : defaultDesc;
	return (
		<Reveal>
			<Media
				type='gif'
				url={url}
				desc={desc}
				className={`${spacingBottom} ${props.className}`}
			/>
		</Reveal>
	);
};
