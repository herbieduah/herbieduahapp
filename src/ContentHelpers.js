import React, { Fragment, useContext, useState } from "react";
import { globalState } from "./State";
import {
	revealSecs,
	useWindowResize,
	revealValues,
	isPortrait,
	getCurrentTransition,
	getThemeInfo,
	getTransitionInfo
} from "./helpers";
import ClickNHold from "react-click-n-hold";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import SubMenu from "./maincomponents/SubMenu";
import Text from "./stylecomponents/Text";
import Media from "./maincomponents/Media";
import { themes } from "./stylecomponents/Theme";
import {
	ThemeCircleContainer,
	TransitionTextContainer,
	FlexContainer,
	MarqueeWrapper
} from "./stylecomponents/Base";
import { ShowIf } from "./ComponentHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { appTransitions } from "./stylecomponents/Transitions";
export const defaultAlt = "I will be adding an alt tag to this image soon";
export const defaultDesc = "This is a video, I will be describing it soon";
const spacingBottom = "c-margin-bottom";
const spacingBottomMed = "c-margin-bottom-med";
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
						<aside className='content__less'>
							<div className='content__less-container'>{props.children}</div>
						</aside>
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
						<article className='container'>
							{props.children}
							<div className='offset' />
						</article>
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
				time={3} // Time to keep pressing. Default is 2
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

export const ContentCategory = props => {
	return (
		<ShowIf noAnimation thisValue={props.fullScreen} thatValue={true}>
			<Zoom duration={revealSecs}>
				<div>
					<nav className='c-submenu'>
						<SubMenu showCategory={true} category={props.category} />
					</nav>
				</div>
			</Zoom>
		</ShowIf>
	);
};

export const Paragraph = props => {
	const compClassName = props.className ? props.className : "";

	return (
		<Fragment>
			{props.noReveal ? (
				<Text
					m
					className={`c-margin-bottom-med ${compClassName} padding-left-right`}>
					{props.children}
				</Text>
			) : (
				<Reveal>
					<Text
						m
						className={`c-margin-bottom-med ${compClassName} padding-left-right`}>
						{props.children}
					</Text>
				</Reveal>
			)}
		</Fragment>
	);
};

export const Small = props => {
	const compClassName = props.className ? props.className : "";
	return (
		<Reveal>
			<small>
				<Text
					s
					format
					className={`c-margin-bottom-med  paddingLR ${compClassName}`}>
					{props.children}
				</Text>
			</small>
		</Reveal>
	);
};

export const SettingButton = props => {
	return (
		<ShowIf
			thisValue={props.var}
			thatValue={props.bool}
			className='stupidButtonHeight'>
			<Text button onClick={props.func} className='padding-left-right'>
				{props.cta}
			</Text>
			<Small>{props.children}</Small>
		</ShowIf>
	);
};

export const HeadingOne = props => {
	const compClassName = props.className ? props.className : "";
	return (
		<Reveal>
			<Text
				h1
				xxl
				bold
				className={`c-margin-top-large ${compClassName}  padding-left-right `}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const HeadingTwo = props => {
	const compClassName = props.className ? props.className : "";
	return (
		<Reveal>
			<Text
				h2
				xl
				className={` ${compClassName} container c-margin-top  padding-left-right`}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const HeadingThree = props => {
	const compClassName = props.className ? props.className : "";
	return (
		<Reveal>
			<Text
				h2
				l
				className={`c-margin-top  c-margin-bottom-med padding-left-right ${compClassName}container`}>
				{props.children}
			</Text>
		</Reveal>
	);
};

export const Link = props => {
	return (
		<Text link href={props.href} target='_blank'>
			{props.children}
			<span>&#8599;</span>
		</Text>
	);
};

export const Flex = props => {
	// const height = props.height
	return (
		<FlexContainer isPortrait={props.isPortrait} className='less__media'>
			<ul className='less__media-wrapper'>{props.children}</ul>
		</FlexContainer>
	);
};

export const Image = props => {
	// const height = props.height;
	const src = props.src;
	const alt = props.alt ? props.alt : defaultAlt;
	const imageClass = props.className ? props.className : "";
	return (
		<Reveal>
			<Fragment>
				{props.nolazyload ? (
					<img
						alt={alt}
						width={props.width || "100%"}
						height={props.height || "100%"}
						src={props.src}
						className={`${spacingBottom} ${imageClass}`}
					/>
				) : (
					<Media
						type='image'
						src={src}
						alt={alt}
						width={props.width}
						height={props.height}
						className={`${spacingBottom} ${imageClass}`}
					/>
				)}
			</Fragment>
		</Reveal>
	);
};

export const Figure = props => {
	// const height = props.height;
	const src = props.src;
	const alt = props.alt ? props.alt : defaultAlt;
	const figClass = props.className ? props.className : "";
	const mockup = props.mockup ? true : false;
	return (
		<Reveal>
			<figure className={`c-margin-bottom`}>
				{mockup ? (
					<div className={figClass}>
						<Media
							type='image'
							width={props.width}
							height={props.height}
							className='c-mockup'
							src={src}
							alt={alt}
						/>
						{props.children}
					</div>
				) : (
					<Fragment>
						<div className={figClass}>
							<Media
								type='image'
								width={props.width}
								height={props.height}
								src={src}
								alt={alt}
							/>
						</div>
						{props.children}
					</Fragment>
				)}
			</figure>
		</Reveal>
	);
};

export const Figcaption = props => {
	const figClass = props.className ? props.className : "";
	return (
		<Text s className={`${figClass} paddingLR`} center figcaption>
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
				width={props.width}
				height={props.height}
				desc={desc}
				className={`${spacingBottom} ${props.className}`}
			/>
		</Reveal>
	);
};

export const FiGif = props => {
	const url = props.url;
	const desc = props.desc ? props.desc : defaultDesc;
	return (
		<Reveal>
			<figure className={`${spacingBottom} ${props.className}`}>
				<Media
					type='gif'
					width={props.width}
					height={props.height}
					url={url}
					desc={desc}
				/>
				{props.children}
			</figure>
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
			<div className='themeCircle__container'>
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
			</div>
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

export const TransitionTexts = props => {
	const { setCurrentTransition, currentTransition } = useContext(globalState);
	const [enterTextTransition, setEnterTextTransition] = useState("");
	const [exitTextTransition, setExitTextTransition] = useState("");
	const transitionValues = getTransitionInfo(props.transitionValue);
	// const toggleAnimatedClass = setTimeout(() => {
	// 	animatedClass = "animated";
	// }, revealSecs);
	const changeTransition = () => {
		setCurrentTransition(props.transitionValue);
		setEnterTextTransition(`${transitionValues.enterTransition} animated`);
		setExitTextTransition(`${transitionValues.exitTransition} animated`);
		setTimeout(() => {
			setEnterTextTransition("");
			setExitTextTransition("");
		}, revealSecs);
	};
	const currentClass =
		currentTransition === transitionValues.name ? "current" : "";

	// const current = currentTheme === transitionValues.name ? true : false;

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 	  animated =''
	// 	}, revealSecs);
	// 	return () => clearTimeout(timer);
	//   }, []);
	return (
		<TransitionTextContainer
			onClick={changeTransition}
			className='appTransition__item'>
			<Text button m bold className={currentClass}>
				<span className={enterTextTransition}>
					{transitionValues.enterTransition}
				</span>
				, &nbsp;
				<span className={exitTextTransition}>
					{transitionValues.exitTransition}
				</span>
			</Text>
		</TransitionTextContainer>
	);
};

export const GenerateTransition = props => {
	return (
		<Reveal>
			<ul className='appTransition'>
				{appTransitions.map(function(element, uniqueKey) {
					return (
						<TransitionTexts transitionValue={element.name} key={uniqueKey} />
					);
				})}
			</ul>
		</Reveal>
	);
};

export const Marquee = props => {
	return (
		<Reveal>
			{props.playing ? (
				<MarqueeWrapper left={props.left} className='padding-left-right'>
					{props.children}
				</MarqueeWrapper>
			) : (
				<div className='padding-left-right'>{props.children}</div>
			)}
		</Reveal>
	);
};

export const DisableSetting = props => {
	const { currentTransition } = useContext(globalState);
	const transitionClasses = getCurrentTransition(currentTransition);
	const thisValue = props.thisValue;
	const thatValue = props.thatValue;
	const renderMe = thisValue === thatValue ? true : false;

	return (
		<Fragment>
			{renderMe ? (
				<Fragment>
					<div className='c-disable'>{props.children}</div>
					<Paragraph className='padding-left-right'>
						<strong>{props.message}</strong>
					</Paragraph>
				</Fragment>
			) : (
				<Fragment>{props.children}</Fragment>
			)}
		</Fragment>
	);
};
