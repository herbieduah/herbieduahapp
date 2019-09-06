import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";
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
import Reveal from "react-reveal/Reveal";
// import Fade from "react-ElementReveal/Fade";
// import Zoom from "react-ElementReveal/Zoom";
import SubMenu from "./maincomponents/SubMenu";
import Text from "./stylecomponents/Text";
import Media from "./maincomponents/Media";
import { themes } from "./stylecomponents/Theme";
// import ScrollAnimation from "react-animate-on-scroll";
import {
	ThemeCircleContainer,
	TransitionTextContainer,
	FlexContainer,
	MarqueeWrapper
} from "./stylecomponents/Base";
import { ShowIf } from "./ComponentHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { appTransitions } from "./stylecomponents/Transitions";
import {
	cMarginBottomMed,
	cMarginTopMed,
	cMarginBottom,
	cMarginTop
} from "./stylecomponents/StyleHelpers";
export const defaultAlt = "I will be adding an alt tag to this image soon";
export const defaultDesc = "This is a video, I will be describing it soon";
const spacingBottom = "c-margin-bottom";
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
			<TransitionGroup className='animatecss-container'>
				{showLess ? (
					<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
						<aside className='less'>
							<div className='less__container'>
								{props.children}
								<Text m className='less__drag paddingLR'>
									Drag the slider {whereToDrag} to reveal more.&nbsp;
								</Text>
							</div>
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
			<div>{props.children}</div>
		</Reveal>
	);
};

export const ContentCategory = props => {
	return (
		<ShowIf noAnimation thisValue={props.fullScreen} thatValue={true}>
			<ElementReveal duration={revealSecs}>
				<div>
					<nav className='c-submenu'>
						<SubMenu showCategory={true} category={props.category} />
					</nav>
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
					m
					wide={props.less || props.wide}
					className={`${compClassName} ${lessClass} padding-left-right`}>
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
				bold
				className={`c-margin-top-large ${compClassName} breather-bottom padding-left-right `}>
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
				className={` ${compClassName} container  breather c-margin-bottom-med  padding-left-right`}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const Experience = props => {
	return (
		<ElementReveal>
			<div className='c-experience'>{props.children}</div>
		</ElementReveal>
	);
};

export const HeadingThree = props => {
	const compClassName = props.className ? props.className : "";
	return (
		<ElementReveal>
			<Text
				h2
				m
				className={`c-margin-top  c-margin-bottom-med padding-left-right ${compClassName}container`}>
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
	const isCloud = props.cloud ? "cloud-" : "";
	return (
		<ElementReveal>
			<Media
				type={`${isCloud}gif`}
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
	const isCloud = props.cloud ? "cloud-" : "";
	return (
		<ElementReveal>
			<figure className={`${spacingBottom}`}>
				<Media
					type={`${isCloud}gif`}
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
			<div className='themeCircle__container'>
				<button className={`themeCircle__button ${currentClass}`}>
					{current ? (
						<div className='themeCircle__selected'>
							<Text format l bold>
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
			<div className={`appTransition__container ${currentClass}`}>
				<Text button xs>
					<span className={enterTextTransition}>
						{transitionValues.enterTransition}
					</span>
					, &nbsp;
					<span className={exitTextTransition}>
						{transitionValues.exitTransition}
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
			<ul className='c-work-info'>
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
			<Text button xs className='padding-left-right' {...props}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const Seperator = styled.div`
	${cMarginBottom};
	${cMarginTop};
`;
