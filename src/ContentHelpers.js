//ContentHelpers file for my web app.
import React, { Fragment, useContext, useState, useEffect } from "react";
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
import Reveal from "react-reveal/Reveal";
import Text from "./stylecomponents/Text";
import Media from "./maincomponents/Media";
import { themes } from "./stylecomponents/Theme";
import {
	ThemeCircleContainer,
	TransitionTextContainer,
	MarqueeWrapper,
	ScrollDownPortrait
} from "./stylecomponents/Base";
import { ShowIf, MenuTabs, ScrollDownIndicator } from "./ComponentHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { appTransitions } from "./stylecomponents/Transitions";
// import PropTypes from "prop-types";

export const defaultAlt = "I will be adding an alt tag to this image soon";
export const defaultDesc = "This is a video, I will be describing it soon";

//Switch to 'gif' or 'image' to pull videos and images locally
const videoLocation = "cloud-gif";
const imageLocation = "cloud-image";

export const ContentShow = props => {
	const {
		contentWidth: cw,
		contentHeight: ch,
		fullScreen,
		currentTransition,
		minimalMode
	} = useContext(globalState);
	const { width: ww, height: wh } = useWindowResize();
	const values = { ww, wh, cw, ch };
	const isShowingMore = revealValues(values).isShowingMore;
	const isContentPortrait = isPortrait(ww, wh);
	const showMore = fullScreen ? true : isShowingMore;
	const showLess = fullScreen ? false : !isShowingMore;
	const transitionClasses = getCurrentTransition(currentTransition);
	const whereToDrag = isContentPortrait ? "down" : "right";
	const containerLarge = props.containerLarge ? "container-large" : "container";

	const [showInstructions, setShowInstructions] = useState(true);

	const showTheInstructions = () => {
		if (showMore) {
			setShowInstructions(false);
		}
	};
	useEffect(() => {
		showTheInstructions();
	});
	if (props.less) {
		return (
			<TransitionGroup>
				{showLess ? (
					<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
						<aside className='less'>
							<div className='less__wrapper'>
								{props.children}
								<ShowIf
									noAnimation
									thisValue={showInstructions}
									thatValue={true}>
									<Instructions className='less__drag'>
										Drag slider {whereToDrag} then release for more&nbsp;
									</Instructions>
								</ShowIf>
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
						<article className={`${containerLarge} more`}>
							<ScrollDownIndicator />
							<ShowIf
								noAbsolute
								thisValue={fullScreen && !minimalMode}
								thatValue={true}>
								<Instructions className='marginTopLarge justify-center text-center'>
									scroll to bottom or select minimize <br /> for menu
								</Instructions>
							</ShowIf>
							{props.children}
							{/* <ShowIf noAnimation thisValue={fullScreen} thatValue={false}>
								<Instructions>
									Continue to navigate {whereToDrag} for more.&nbsp;
								</Instructions>
							</ShowIf> */}
							<div className='offset' />
						</article>
					</CSSTransition>
				) : null}
			</TransitionGroup>
		);
	}
};

export const Header = props => {
	const className = props.className || "";
	return (
		<Fragment>
			<ShowIf noAnimation thisValue={props.less} thatValue={true}>
				<ElementReveal>
					<Text h1 m className='paddingLRSm less__header'>
						{props.children}
					</Text>
				</ElementReveal>
			</ShowIf>
			<ShowIf noAnimation thisValue={!props.less} thatValue={true}>
				<ElementReveal>
					<header className={`content__header container ${className}`}>
						<HeadingOne>{props.children}</HeadingOne>
					</header>
				</ElementReveal>
			</ShowIf>
		</Fragment>
	);
};

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
	const className = props.className || "";
	const center = props.center ? "justify-center" : "";
	return (
		<ElementReveal>
			<Small className={`c-instructions paddingLRSm ${className} ${center}`}>
				{props.children}
			</Small>
		</ElementReveal>
	);
};

export const ContentCategory = props => {
	const { fullScreen } = useContext(globalState);
	const categoryArr = ["customize", "work", "photography", "about"];
	const defaultIndex = props.category
		? categoryArr.indexOf(props.category)
		: -1;
	return (
		<ShowIf noAnimation thisValue={fullScreen} thatValue={true}>
			<ElementReveal>
				<div className='c-category marginLRSm container'>
					<MenuTabs showCategory={false} defaultIndex={defaultIndex} />
				</div>
			</ElementReveal>
		</ShowIf>
	);
};

export const Paragraph = props => {
	const className = props.className || "";
	const lessClass = props.less ? "less__main-text " : "marginBottomMed";
	const center = props.center ? "text-center" : "";
	return (
		<Fragment>
			<ElementReveal>
				<Text
					m={!props.less}
					l={props.less}
					secondary={props.less || props.secondary}
					className={`${className} ${lessClass} ${center} paddingLRSm`}>
					{props.children}
				</Text>
			</ElementReveal>
		</Fragment>
	);
};

export const Emphasis = props => {
	const className = props.className || "";
	const lessClass = props.less ? "less__main-text " : "marginBottomMed";
	return (
		<Fragment>
			<ElementReveal>
				<Text
					l
					{...props}
					bold
					tertiary
					className={`${className} ${lessClass} marginBottomMed marginTopMed paddingLRSm`}>
					{props.children}
				</Text>
			</ElementReveal>
		</Fragment>
	);
};

export const LessContent = props => {
	const className = props.className || "";
	const header = props.header;
	return (
		<Fragment>
			<ElementReveal>
				<header>
					<Text h1 xl className='paddingLRSm less__header'>
						{header}
					</Text>
				</header>
				<Text
					l
					{...props}
					secondary
					className={`${className} less__main-text paddingLRSm`}>
					{props.children}
				</Text>
			</ElementReveal>
		</Fragment>
	);
};

export const Small = props => {
	const className = props.className || "";
	return (
		<ElementReveal>
			<small>
				<Text
					s
					format
					tertiary
					className={`marginBottomMed  paddingLRSm ${className}`}
					{...props}>
					{props.children}
				</Text>
			</small>
		</ElementReveal>
	);
};

export const HeadingOne = props => {
	const className = props.className || "";
	return (
		<ElementReveal>
			<Text
				h1
				xl
				center
				semibold
				className={`${className} marginBottomXLarge marginTopXLarge paddingLRSm`}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const HeadingTwo = props => {
	const className = props.className || "";
	return (
		<ElementReveal>
			<Text
				h2
				l
				bold
				className={`${className} marginTopXLarge marginBottomSm paddingLRSm`}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const UL = props => {
	return (
		<ElementReveal>
			<ul className='paddingLRSm' {...props}>
				{props.children}
			</ul>
		</ElementReveal>
	);
};

export const LI = props => {
	return (
		<li className='marginLRSm'>
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
			<div className='c-experience'>{props.children}</div>
		</ElementReveal>
	);
};

export const HeadingThree = props => {
	const className = props.className || "";
	return (
		<ElementReveal>
			<Text
				h3
				m
				bold
				className={`marginTopLarge marginBottomMed paddingLRSm ${className}`}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const Link = props => {
	return (
		<Text link href={props.href} target='_blank' {...props}>
			{props.children}
			<span>&#8599;</span>
		</Text>
	);
};

export const Image = props => {
	const src = props.src;
	const alt = props.alt || defaultAlt;
	const className = props.className || "";
	return (
		<ElementReveal>
			<Media
				type={imageLocation}
				src={src}
				alt={alt}
				className={`marginBottomLarge ${className}`}
			/>
		</ElementReveal>
	);
};

export const Figure = props => {
	const src = props.src;
	const alt = props.alt || defaultAlt;
	const className = props.className || "";
	const mockup = props.mockup ? true : false;
	return (
		<ElementReveal>
			<figure className={`marginBottomLarge`}>
				{mockup ? (
					<div className={className}>
						<Media
							type={imageLocation}
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
						<div className={className}>
							<Media
								type={imageLocation}
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
	const className = props.className || "";
	return (
		<Text s figcaption center className={`${className} paddingLRSm`}>
			{props.children}
		</Text>
	);
};

export const Gif = props => {
	const url = props.url;
	const desc = props.desc || defaultDesc;
	const className = props.className || "";
	return (
		<ElementReveal>
			<Media
				type={videoLocation}
				url={url}
				width={props.width}
				height={props.height}
				desc={desc}
				className={`marginBottomLarge ${className}`}
			/>
		</ElementReveal>
	);
};

export const FiGif = props => {
	const url = props.url;
	const className = props.className || "";
	const desc = props.desc || defaultDesc;
	return (
		<ElementReveal>
			<figure className={`marginBottomLarge ${className}`}>
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
	const themeText = themeValues.text ? themeValues.text : "Text Color";
	const current = currentTheme === themeValues.name ? true : false;
	return (
		<ThemeCircleContainer
			onClick={changeTheme}
			isPortrait={isContentPortrait}
			themeValues={themeValues}
			className='themeCircle__item'>
			<ElementReveal className='themeCircle__container'>
				<button className={`themeCircle__button ${currentClass}`}>
					<div className='themeCircle__overlay'>
						{current ? (
							<Text
								format
								s
								tertiary
								bold
								className='themeCircle__current-text'>
								Current
							</Text>
						) : null}
						<Text
							format
							s
							tertiary
							bold
							className={`themeCircle__text ${currentClass}`}>
							{themeText}
						</Text>
					</div>
				</button>
				{/* <Text format s className={`themeCircle__text ${currentClass}`}>
					{themeValues.text}
				</Text> */}
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

	return (
		<TransitionTextContainer
			onClick={changeTransition}
			className={`appTransition__item`}>
			<Text xs button className={`appTransition__container ${currentClass}`}>
				<span className={enterTextTransition}>
					{camelCaseHelper(transitionValues.enterTransition)}
				</span>
				{/* &nbsp;and&nbsp; */}
				<span className={exitTextTransition}>
					{camelCaseHelper(transitionValues.exitTransition)}
				</span>
			</Text>
		</TransitionTextContainer>
	);
};

// export const GenerateTransition = props => (
// 	<ElementReveal>
// 		<ul className='appTransition' {...props}>
// 			{appTransitions.map(function(element, uniqueKey) {
// 				return (
// 					<TransitionTexts transitionValue={element.name} key={uniqueKey} />
// 				);
// 			})}
// 		</ul>
// 	</ElementReveal>
// );

export const GenerateTransition = props => {
	const type = props.type;
	return (
		<ElementReveal>
			<ul className='appTransition' {...props}>
				{appTransitions.map(function(element, uniqueKey) {
					if (element.type === type) {
						return (
							<TransitionTexts transitionValue={element.name} key={uniqueKey} />
						);
					} else {
						return null;
					}
				})}
			</ul>
		</ElementReveal>
	);
};

export const WorkInfo = props => {
	const { workDuration, workSkills, workTools } = props.workinfo;
	const { forDev } = useContext(globalState);
	return (
		<ZigZag>
			<ElementReveal>
				<ul className='c-work-info marginBottomXLarge'>
					<li>
						<Text s format>
							<strong>Duration</strong>
							<br />
							{workDuration}
						</Text>
					</li>
					<ShowIf noAnimation thisValue={forDev} thatValue={true}>
						<li>
							<Text s format>
								<strong>Skills</strong>
								<br />
								{workSkills}
							</Text>
						</li>
						<li>
							<Text s format>
								<strong>Tools</strong>
								<br />
								{workTools}
							</Text>
						</li>
					</ShowIf>
				</ul>
			</ElementReveal>
		</ZigZag>
	);
};

export const Marquee = props => {
	return (
		<ElementReveal>
			{props.playing ? (
				<MarqueeWrapper left={props.left} className='paddingLRSm'>
					{props.children}
				</MarqueeWrapper>
			) : (
				<div className='paddingLRSm'>{props.children}</div>
			)}
		</ElementReveal>
	);
};

export const DisableSetting = props => {
	const thisValue = props.thisValue;
	const thatValue = props.thatValue;
	const renderMe = thisValue === thatValue ? true : false;
	return (
		<Fragment>
			{renderMe ? (
				<Fragment>
					<div className='c-disable'>{props.children}</div>
					<Paragraph className='paddingLRSm'>
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
	const className = props.className || "";
	return (
		<ElementReveal>
			<Text
				button
				xs
				className={`${className} marginLRSm marginBottomSm`}
				{...props}>
				{props.children}
			</Text>
		</ElementReveal>
	);
};

export const PunGen = props => {
	const pun = props.pun;
	return (
		<ElementReveal>
			<Paragraph className='c-pun'>{pun}</Paragraph>
		</ElementReveal>
	);
};

export const ZigZag = props => {
	return (
		<div {...props} className='c-zigzag'>
			<div className='c-zigzag__content'>{props.children}</div>
		</div>
	);
};
