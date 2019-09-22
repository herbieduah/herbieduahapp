import React, { Fragment, useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { globalState } from "./State";
import {
	revealSecs,
	useWindowResize,
	revealValues,
	isPortrait,
	getCurrentTransition,
	getThemeInfo,
	getTransitionInfo,
	camelCaseHelper
} from "./helpers";
import ClickNHold from "react-click-n-hold";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";
// import Zoom from "react-ElementReveal/Zoom";
// import SubMenu from "./maincomponents/SubMenu";
import Text from "./stylecomponents/Text";
import Media from "./maincomponents/Media";
import { themes } from "./stylecomponents/Theme";
// import ScrollAnimation from "react-animate-on-scroll";
import {
	ThemeCircleContainer,
	TransitionTextContainer,
	FlexContainer,
	MarqueeWrapper,
	StartUp
} from "./stylecomponents/Base";
import { ShowIf, MenuTabs } from "./ComponentHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { appTransitions } from "./stylecomponents/Transitions";
import {
	// cMarginBottomMed,
	// cMarginTopMed,
	cMarginBottom,
	cMarginTop
} from "./stylecomponents/StyleHelpers";
export const defaultAlt = "I will be adding an alt tag to this image soon";
export const defaultDesc = "This is a video, I will be describing it soon";
const spacingBottom = "c-margin-bottom";
const videoLocation = "cloud-gif";
// const spacingBottomMed = "c-margin-bottom-med";
// const spacingTopBottom = "c-margin-top c-margin-bottom";
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
	const isContentPortrait = isPortrait(ww, wh);

	// const isContentPortrait = isPortrait(ww, wh);
	const showMore = fullScreen ? true : isShowingMore;
	const showLess = fullScreen ? false : !isShowingMore;
	// const headerClass = showLess ? noSpacingTopBottom : spacingTopBottom;
	const transitionClasses = getCurrentTransition(currentTransition);
	// const values = { ww, wh, cw, ch };
	// const isShowingMore = ElementRevealValues(values).isShowingMore;
	const whereToDrag = isContentPortrait ? `down` : `right`;
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
			<TransitionGroup>
				{showLess ? (
					<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
						<aside className='less'>
							<div className='less__wrapper'>
								{props.children}
								<Instructions className='less__drag'>
									Drag then release slider {whereToDrag} for more.&nbsp;
								</Instructions>
							</div>
						</aside>
					</CSSTransition>
				) : null}
			</TransitionGroup>
		);
	}
	if (props.more) {
		return (
			<TransitionGroup>
				{showMore ? (
					<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
						<article className='container more'>
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
			<ElementReveal>
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
			</ElementReveal>
		);
	}
};

export const Header = props => {
	// const { fullScreen, setFullScreening, setFullscreen } = useContext(
	// 	globalState
	// );
	// const onFullScreening = () => {
	// 	setFullScreening(true);
	// 	console.log("Holding!!!");
	// };
	// const onFullScreenTimeOutEnded = () => {
	// 	setFullScreening(false);
	// 	fullScreen ? setFullscreen(false) : setFullscreen(true);
	// 	console.log("Hold timeout ended!");
	// };
	// const onFullScreenEnded = () => {
	// 	setFullScreening(false);
	// 	console.log("Hold ended!");
	// };

	return (
		// <ElementReveal>
		// 	<ClickNHold
		// 		time={3} // Time to keep pressing. Default is 2
		// 		fullScreen={fullScreen}
		// 		onStart={onFullScreening}
		// 		onClickNHold={onFullScreenTimeOutEnded} //Timeout callback
		// 		onEnd={onFullScreenEnded}>

		// 	</ClickNHold>
		// </ElementReveal>
		<Fragment>
			{props.less ? (
				<Text h1 xs className='paddingLR less__header'>
					{props.children}
				</Text>
			) : (
				<header className='content__header container '>
					<HeadingOne>{props.children}</HeadingOne>
				</header>
			)}
		</Fragment>
	);
};

// export const ComingSoon = props => {
// 	return (
// 		<Fade up duration={revealSecs}>
// 			<div className='container'>
// 				<Text m>Working on the content for {props.header}.</Text>
// 			</div>
// 		</Fade>
// 	);
// };

// export const ElementReveal = props => {
// 	return (
// 		<Fade duration={revealSecs}>
// 			<div>{props.children}</div>
// 		</Fade>
// 	);
// };

export const ElementReveal = props => {
	const { currentTransition } = useContext(globalState);
	const transitionValues = getTransitionInfo(currentTransition);
	return (
		<Reveal
			effect={transitionValues.enterTransition}
			effectOut={transitionValues.exitTransition}
			duration={revealSecs}>
			<div {...props}>{props.children}</div>
		</Reveal>
	);
};

export const Instructions = props => {
	return (
		<ElementReveal>
			<Text
				xs
				className={`paddingLR instructions all-caps c-margin-bottom-med ${props.className ||
					""}`}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const ContentCategory = props => {
	const categoryArr = ["customize", "work", "photography", "about"];
	const tabIndex = categoryArr.indexOf(props.category);
	return (
		<ShowIf
			noAnimation
			thisValue={props.fullScreen && !props.minimalMode}
			thatValue={true}>
			<ElementReveal duration={revealSecs}>
				<div className='c-category'>
					<MenuTabs showCategory={false} tabIndex={tabIndex} />
				</div>
			</ElementReveal>
		</ShowIf>
	);
};

export const Paragraph = props => {
	const compClassName = props.className ? props.className : "";
	const lessClass = props.less ? "less__main-text " : "c-margin-bottom-med ";

	return (
		<Fragment>
			<ElementReveal>
				<Text
					m={!props.less}
					l={props.less}
					wide={props.less || props.wide}
					className={`${compClassName} ${lessClass} paddingLR`}>
					{props.children}
				</Text>
			</ElementReveal>
		</Fragment>
	);
};

export const Small = props => {
	const compClassName = props.className ? props.className : "";
	return (
		<ElementReveal>
			<small>
				<Text
					s
					format
					className={`c-margin-bottom-med  paddingLR ${compClassName}`}>
					{props.children}
				</Text>
			</small>
		</ElementReveal>
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
		<ElementReveal>
			<Text
				h1
				l
				semibold
				className={`c-margin-top-large ${compClassName} c-margin-bottom-med padding-left-right `}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const HeadingTwo = props => {
	const compClassName = props.className ? props.className : "";
	return (
		<ElementReveal>
			<Text
				h2
				l
				bold
				className={` ${compClassName} container  breather c-margin-bottom-med  padding-left-right`}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const UL = props => {
	return (
		<ul className='paddingLR' {...props}>
			{props.children}
		</ul>
	);
};

export const LI = props => {
	return (
		<li className='marginLR'>
			<ElementReveal>
				<Text format m {...props}>
					{props.children}
				</Text>
			</ElementReveal>
		</li>
	);
};

export const Experience = props => {
	return (
		<ElementReveal>
			<div className='c-experience '>{props.children}</div>
		</ElementReveal>
	);
};

export const HeadingThree = props => {
	const compClassName = props.className ? props.className : "";
	return (
		<ElementReveal>
			<Text
				h3
				l
				className={`c-margin-top-med  c-margin-bottom-med paddingLR ${compClassName} `}>
				{props.children}
			</Text>
		</ElementReveal>
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
		<ElementReveal>
			{props.cloud ? (
				<Media
					type='cloud-image'
					src={src}
					alt={alt}
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
		</ElementReveal>
	);
};

export const Figure = props => {
	// const height = props.height;
	const src = props.src;
	const alt = props.alt ? props.alt : defaultAlt;
	const figClass = props.className ? props.className : "";
	const mockup = props.mockup ? true : false;
	const isCloud = props.cloud ? "cloud-" : "";
	return (
		<ElementReveal>
			<figure className={`c-margin-bottom`}>
				{mockup ? (
					<div className={figClass}>
						<Media
							type={`${isCloud}image`}
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
								type={`${isCloud}image`}
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
		</ElementReveal>
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
	// const isCloud = props.cloud ? "cloud-" : "";
	return (
		<ElementReveal>
			<Media
				type={videoLocation}
				url={url}
				width={props.width}
				height={props.height}
				desc={desc}
				className={`${spacingBottom} ${props.className}`}
			/>
		</ElementReveal>
	);
};

export const FiGif = props => {
	const url = props.url;
	const desc = props.desc ? props.desc : defaultDesc;
	// const isCloud = props.cloud ? "cloud-" : "";
	return (
		<ElementReveal>
			<figure className={`${spacingBottom}`}>
				<Media
					type={videoLocation}
					width={props.width}
					height={props.height}
					url={url}
					className={props.className || ""}
					desc={desc}
				/>
				{props.children}
			</figure>
		</ElementReveal>
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
			<ElementReveal className='themeCircle__container'>
				<button className={`themeCircle__button ${currentClass}`}>
					{current ? (
						<div className='themeCircle__selected'>
							<Text format m bold>
								Current
							</Text>
						</div>
					) : null}
				</button>
				<Text format s className={`themeCircle__text ${currentClass}`}>
					{themeValues.text}
				</Text>
			</ElementReveal>
		</ThemeCircleContainer>
	);
};

export const GenerateTheme = props => {
	const type = props.type;
	return (
		<ElementReveal>
			<ul className='themeCircle'>
				{themes.map(function(element, uniqueKey) {
					if (element.type === type) {
						return <ThemeCircles themeValue={element.name} key={uniqueKey} />;
					} else {
						return null;
					}
				})}
			</ul>
		</ElementReveal>
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
			className={`appTransition__item`}>
			<div className={`appTransition__container`}>
				<Text
					buttontext
					className={`appTransition__container ${currentClass}`}
					m>
					<span className={enterTextTransition}>
						{camelCaseHelper(transitionValues.enterTransition)}
					</span>
					&nbsp;and&nbsp;
					<span className={exitTextTransition}>
						{camelCaseHelper(transitionValues.exitTransition)}
					</span>
				</Text>
			</div>
		</TransitionTextContainer>
	);
};

export const GenerateTransition = props => {
	return (
		<ElementReveal>
			<ul className='appTransition'>
				{appTransitions.map(function(element, uniqueKey) {
					return (
						<TransitionTexts transitionValue={element.name} key={uniqueKey} />
					);
				})}
			</ul>
		</ElementReveal>
	);
};

export const WorkInfo = props => {
	const { workDuration, workSkills, workTools } = props.workinfo;
	return (
		<ElementReveal>
			<ul className='c-work-info breather-bottom'>
				<li>
					<Text s format>
						<strong>Duration:</strong>&nbsp;
						{workDuration}
					</Text>
				</li>
				<li>
					<Text s format>
						<strong>Skills:</strong>&nbsp;
						{workSkills}
					</Text>
				</li>
				<ShowIf noAnimation thisValue={props.techy} thatValue={true}>
					<li>
						<Text s format>
							<strong>Tools:</strong>&nbsp;
							{workTools}
						</Text>
					</li>
				</ShowIf>
			</ul>
		</ElementReveal>
	);
};

export const Marquee = props => {
	return (
		<ElementReveal>
			{props.playing ? (
				<MarqueeWrapper left={props.left} className='padding-left-right'>
					{props.children}
				</MarqueeWrapper>
			) : (
				<div className='padding-left-right'>{props.children}</div>
			)}
		</ElementReveal>
	);
};

export const DisableSetting = props => {
	// const { currentTransition } = useContext(globalState);
	// const transitionClasses = getCurrentTransition(currentTransition);
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

export const Button = props => {
	return (
		<ElementReveal>
			<Text button s className='marginLR cMarginBottomSm' {...props}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const Seperator = styled.div`
	${cMarginBottom};
	${cMarginTop};
`;

export const AppStartUp = () => {
	const [showApp, setShowApp] = useState(true);
	const startUpTransitions = {
		// enter: "animated",
		// 	enterActive: "bounceIn",
		exit: "animated",
		exitActive: "fadeOut"
	};
	const showTheApp = () => {
		if (showApp) {
			setTimeout(() => {
				setShowApp(false);
			}, 5000);
		}
	};
	const skipIntro = () => {
		setShowApp(false);
	};

	useEffect(() => {
		showTheApp();
	});
	return (
		<TransitionGroup>
			{showApp ? (
				<CSSTransition timeout={4000} classNames={startUpTransitions}>
					<StartUp>
						<div>
							{/* <Fade duration={1000}>
								<Text l wide className='startUp__nowadays'>
									Nowadays, there is an app for everything. <br />
								</Text>
							</Fade> */}
							<Fade duration={1000}>
								<Text l wide className='startUp__future'>
									In the future, there is going to be an app for everyone.
								</Text>
							</Fade>
							<Fade delay={3000} duration={1500}>
								<Text l wide className='startUp__my-own'>
									So I made my own.
								</Text>
							</Fade>
							<Fade duration={500}>
								<div className='startUp__skip'>
									<Text m buttontext onClick={skipIntro}>
										skip intro
									</Text>
								</div>
							</Fade>
						</div>
					</StartUp>
				</CSSTransition>
			) : null}
		</TransitionGroup>
	);
};
