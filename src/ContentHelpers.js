import React, { Fragment, useContext } from "react";
import { globalState } from "./State";
import {
	revealSecs,
	useWindowResize,
	revealValues,
	isPortrait,
	getCurrentTransition,
	getThemeInfo
} from "./helpers";
import ClickNHold from "react-click-n-hold";
import Fade from "react-reveal/Fade";
import Text from "./stylecomponents/Text";
import Media from "./maincomponents/Media";
import { themes } from "./stylecomponents/Theme";
import { ThemeCircleContainer } from "./stylecomponents/Base";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export const defaultAlt = "I will be adding an alt tag to this image soon";
export const defaultDesc = "This is a video, I will be describing it soon";
const spacingBottom = "c-margin-bottom";
const spacingTopBottom = "c-margin-top c-margin-bottom";
// const noSpacingTopBottom = "c-margin-0";

export const ContentShow = props => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		fullScreen,
		setFullScreening,
		setFullscreen,
		currentTransition
	} = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	// const isContentPortrait = isPortrait(ww, wh);
	const showMore = fullScreen ? true : isShowingMore;
	const showLess = fullScreen ? false : !isShowingMore;
	// const headerClass = showLess ? noSpacingTopBottom : spacingTopBottom;
	const transitionClasses = getCurrentTransition(currentTransition);
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
			<TransitionGroup className='animatecss-container'>
				{showLess ? (
					<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
						<aside className='content__less'>{props.children}</aside>
					</CSSTransition>
				) : null}
			</TransitionGroup>
		);
	}
	if (props.more) {
		return (
			<TransitionGroup className='animatecss-container'>
				{showMore ? (
					<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
						<Fragment>
							{props.children}
							<div className='offset' />
						</Fragment>
					</CSSTransition>
				) : null}
			</TransitionGroup>
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
						<Text s>{props.header}</Text>
					</header>
				</ClickNHold>
			</Fade>
		);
	}
};

export const Header = props => {
	const { fullScreen, setFullScreening, setFullscreen } = useContext(
		globalState
	);
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

	return (
		<Reveal>
			<ClickNHold
				time={2} // Time to keep pressing. Default is 2
				fullScreen={fullScreen}
				onStart={onFullScreening}
				onClickNHold={onFullScreenTimeOutEnded} //Timeout callback
				onEnd={onFullScreenEnded}>
				<header className='content__header container'>
					<HeadingOne>{props.children}</HeadingOne>
				</header>
			</ClickNHold>
		</Reveal>
	);
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
			<Text h1 xxl bold className={`${spacingBottom} ${props.className}`}>
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

export const ThemeCircles = props => {
	const { setTheme, currentTheme } = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const isContentPortrait = isPortrait(ww, wh);
	const themeValues = getThemeInfo(props.themeValue);
	const changeTheme = () => setTheme(props.themeValue);
	const currentClass = currentTheme === themeValues.name ? "current" : "";
	const current = currentTheme === themeValues.name ? true : false;
	return (
		<ThemeCircleContainer
			onClick={changeTheme}
			isPortrait={isContentPortrait}
			themeValues={themeValues}
			className='themeCircle__item'>
			<button className={`themeCircle__button ${currentClass}`}>
				{current ? (
					<div className='themeCircle__selected'>
						<Text format m bold>
							Current
						</Text>
					</div>
				) : null}
			</button>
			<Text format xs className={`themeCircle__text ${currentClass}`} bold>
				{themeValues.text}
			</Text>
		</ThemeCircleContainer>
	);
};

export const GenerateTheme = props => {
	const type = props.type;
	return (
		<Reveal>
			<ul className='themeCircle'>
				{themes.map(function(element, uniqueKey) {
					if (element.type === type) {
						return <ThemeCircles themeValue={element.name} key={uniqueKey} />;
					} else {
						return null;
					}
				})}
			</ul>
		</Reveal>
	);
};
