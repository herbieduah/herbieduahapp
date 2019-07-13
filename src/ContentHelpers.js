import React, { Fragment, useContext } from "react";
import { globalState } from "./State";
import {
	revealSecs,
	useWindowResize,
	revealValues,
	isPortrait
} from "./helpers";
import ClickNHold from "react-click-n-hold";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";
import Media from "./maincomponents/Media";
export const defaultAlt = "I will be adding an alt tag to this image soon";
export const defaultDesc = "This is a video, I will be describing it soon";
const spacingBottom = "c-margin-bottom";
const spacingTopBottom = "c-margin-top c-margin-bottom";

export const ContentShow = props => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		fullScreen,
		setFullScreening,
		setFullscreen
	} = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	// const isContentPortrait = isPortrait(ww, wh);
	const showMore = fullScreen ? true : isShowingMore;
	const showLess = fullScreen ? false : !isShowingMore;
	// const values = { ww, wh, cw, ch };
	// const isShowingMore = revealValues(values).isShowingMore;
	const onFullScreening = () => {
		setFullScreening(true);
		console.log("Holding!!!");
	};
	const onFullScreenTimeOutEnded = () => {
		setFullScreening(false);
		fullScreen ? setFullscreen(false) : setFullscreen(true);
		console.log("Hold timeout ended!");
	};
	const onFullScreenEnded = () => {
		setFullScreening(false);
		console.log("Hold ended!");
	};

	if (props.less) {
		return (
			<Fragment>
				<aside className='content__less'>{props.children}</aside>
			</Fragment>
		);
	}
	if (props.more) {
		return (
			<Fragment>
				{showMore ? <Fragment>{props.children}</Fragment> : null}
			</Fragment>
		);
	}
	if (props.header) {
		return (
			<Fade duration={revealSecs}>
				<ClickNHold
					time={2} // Time to keep pressing. Default is 2
					isPortrait={isPortrait(ww, wh)}
					fullScreen={fullScreen}
					onStart={onFullScreening}
					onClickNHold={onFullScreenTimeOutEnded} //Timeout callback
					onEnd={onFullScreenEnded}>
					<header className='content__header container'>
						<Text h1 xl={showMore} s={showLess} extrabold>
							{props.header}
						</Text>
					</header>
				</ClickNHold>
			</Fade>
		);
	}
};

export const ComingSoon = props => {
	return (
		<Fade up duration={revealSecs}>
			<div className='container'>
				<Text m>Working on the content for {props.header}.</Text>
			</div>
		</Fade>
	);
};

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
