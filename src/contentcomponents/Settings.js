/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	HeadingTwo,
	Header,
	ContentShow,
	ContentCategory,
	LessContent,
	UL,
	LI,
	Small,
	Button,
	Emphasis,
	// SettingButton,
	DisableSetting,
	Link,
	Instructions,
	ZigZag,
	HeadingThree
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
// import Text from "../stylecomponents/Text";
import Emoji from "a11y-react-emoji";
const header = "Settings";

const SettingsPage = ({ contentProps }) => {
	const {
		navBarRight,
		setNavBarRight,
		navBarComplement,
		setNavBarComplement,
		minimalMode,
		setMinimalMode,
		// lazyLoading,
		// setLazyLoading,
		forDev,
		setForDev,
		setSides,
		switchSides,
		fullScreen,
		setFullscreen,

		setAccessible,
		accessible,
		videoControls,
		setVideoControls,
		downloaded
	} = contentProps;

	const controlVideoMode = () => {
		videoControls ? setVideoControls(false) : setVideoControls(true);
	};
	const moveNavBar = () => {
		navBarRight ? setNavBarRight(false) : setNavBarRight(true);
	};
	const complementNavBar = () => {
		navBarComplement ? setNavBarComplement(false) : setNavBarComplement(true);
	};
	// const turnOnAccessibilitySettings = () => {
	// 	setMinimalMode(true);
	// 	setFullscreen(true);
	// 	setVideoControls(true);
	// 	setNavBarComplement(true);
	// 	setAccessible(true);
	// };
	// const turnOffAccessibilitySettings = () => {
	// 	setMinimalMode(false);
	// 	setFullscreen(false);
	// 	setVideoControls(false);
	// 	setNavBarComplement(false);
	// 	setAccessible(false);
	// };

	const activateAccessibilityMode = () => {
		accessible ? setMinimalMode(false) : setMinimalMode(true);
		accessible ? setFullscreen(false) : setFullscreen(true);
		accessible ? setVideoControls(false) : setVideoControls(true);
		accessible ? setNavBarComplement(false) : setNavBarComplement(true);
		accessible ? setAccessible(false) : setAccessible(true);
	};

	const basicMode = () => {
		minimalMode ? setMinimalMode(false) : setMinimalMode(true);
		if (!fullScreen) {
			fullScreen ? setFullscreen(false) : setFullscreen(true);
		} else {
			setFullscreen(false);
		}
	};

	// const downloadEverything = () => {
	// 	lazyLoading ? setLazyLoading(false) : setLazyLoading(true);
	// };

	const knowCode = () => {
		forDev ? setForDev(false) : setForDev(true);
	};

	const failure = () => {
		setSides(false);
		setTimeout(() => {
			setSides(true);
		}, 10000);
	};

	return (
		<Fragment>
			<ContentShow less>
				<LessContent header={header}>
					You can change certain aspects of this web app to your liking.
				</LessContent>
				<div className='less__container'>
					{/* <Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
						risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta
						gravida at eget metus. Sed posuere consectetur est at lobortis.
						Maecenas sed diam eget risus varius blandit sit amet non magna.
					</Paragraph> */}
				</div>
			</ContentShow>
			<ContentShow containerLarge more>
				<Header>
					{header}
					<Small className='marginTopSm' center>
						Refreshing web app resets Settings to default.
					</Small>
				</Header>
				<ZigZag>
					<Paragraph>
						I want to make sure you have the best experience using my web app,
						so I created some settings that enable you to change certain aspects
						of it.
					</Paragraph>
				</ZigZag>
				<ZigZag>
					<HeadingTwo>
						Different look and feel
						<Emoji className='emoji' symbol='😎' label='smile with shades' />
					</HeadingTwo>
					<ShowIf noAnimation thisValue={minimalMode} thatValue={true}>
						<Paragraph>
							I had a different look and feel in mind for my web app, you should
							check it out.
						</Paragraph>
					</ShowIf>
					<ShowIf noAnimation thisValue={minimalMode} thatValue={false}>
						<Paragraph>New look and feel not doing it for you?</Paragraph>
					</ShowIf>
					<ShowIf noAnimation thisValue={minimalMode} thatValue={true}>
						<Button onClick={basicMode}>change look and feel</Button>
					</ShowIf>
					<ShowIf noAnimation thisValue={minimalMode} thatValue={false}>
						<Button onClick={basicMode}>change it back</Button>
					</ShowIf>
				</ZigZag>
				<ZigZag>
					<HeadingTwo>Accessibility</HeadingTwo>
					<Paragraph>
						These settings make certain parts of the web app more easier to
						experience.
					</Paragraph>
					<HeadingThree>Accessibility Mode (Beta)</HeadingThree>
					<ShowIf noAnimation thisValue={accessible} thatValue={false}>
						<Paragraph>Accessibility Mode changes these settings:</Paragraph>
						<UL>
							<LI>Adds Background color to Navigation Bar</LI>
							<LI>Changes the web app to a Traditional look</LI>
							<LI>Adds controls to video players</LI>
							<LI>(Also adds a scrollbar)</LI>
						</UL>
						{/* <Instructions>
						Find more details about these settings below.
					</Instructions> */}
					</ShowIf>
					<ShowIf noAnimation thisValue={accessible} thatValue={true}>
						<Paragraph>You've activated Accessibility Mode</Paragraph>
						<Paragraph>
							If you or someone you know are not able to navigate through my web
							app, please send any suggestions you have to myemail to{" "}
							<Link href='mailto:herbduah@gmail.com'>herbduah@gmail.com</Link>
						</Paragraph>
						<Paragraph>Accessibility Mode changes these settings:</Paragraph>
						<UL>
							<LI>Adds Background color to navigation bar</LI>
							<LI>Changes the web app to a traditional mode</LI>
							<LI>Adds controls to video players</LI>
						</UL>
						<Instructions>
							Find more details about these settings below.
						</Instructions>
					</ShowIf>
					<ShowIf noAnimation thisValue={accessible} thatValue={true}>
						<Button onClick={activateAccessibilityMode}>
							De-activate Accessibility Mode
						</Button>
					</ShowIf>
					<ShowIf noAnimation thisValue={accessible} thatValue={false}>
						<Button onClick={activateAccessibilityMode}>
							Activate Accessibility Mode
						</Button>
					</ShowIf>

					<DisableSetting
						thisValue={minimalMode}
						thatValue={true}
						message='This setting only works with the different look and feel'>
						<HeadingThree>Move navigation bar</HeadingThree>
						<Paragraph>
							This setting moves navigations bar to the right or left. (It's
							useful on mobile if you're left handed.)
						</Paragraph>
						<ShowIf
							noAnimation
							thisValue={navBarRight}
							thatValue={true}></ShowIf>
						<ShowIf noAnimation thisValue={navBarRight} thatValue={false}>
							<Button onClick={moveNavBar}>Move Navigation Bar right</Button>
						</ShowIf>
					</DisableSetting>

					<HeadingThree>Add controls to videos</HeadingThree>
					<Paragraph>
						This setting lets you add or remove controls for the videos.
					</Paragraph>
					<ShowIf noAnimation thisValue={videoControls} thatValue={true}>
						<Button onClick={controlVideoMode}>Remove controls</Button>
					</ShowIf>
					<ShowIf noAnimation thisValue={videoControls} thatValue={false}>
						<Button onClick={controlVideoMode}>Add controls</Button>
					</ShowIf>
					<DisableSetting
						thisValue={minimalMode}
						thatValue={false}
						message='This setting only works when the web app is set to the default look'>
						<HeadingThree>Navigation Bar background color</HeadingThree>
						<Paragraph>
							{" "}
							This setting adds a background color to the navigation bar. (Only
							useful for mobile and tablet devices)
						</Paragraph>
						<ShowIf noAnimation thisValue={navBarComplement} thatValue={false}>
							<Button onClick={complementNavBar}>Add background color</Button>
							{/* <Small>
							Complementary
						</Small> */}
						</ShowIf>
						<ShowIf noAnimation thisValue={navBarComplement} thatValue={true}>
							<Button onClick={complementNavBar}>
								Remove background color
							</Button>
						</ShowIf>
					</DisableSetting>
				</ZigZag>
				<ZigZag>
					<HeadingTwo>Tone</HeadingTwo>
					<Paragraph>
						Tones pertain to certain wordings on different areas of the web app.
					</Paragraph>
					<HeadingThree>Technical Tone</HeadingThree>
					<ShowIf noAnimation thisValue={forDev} thatValue={false}>
						<Paragraph>
							Activate this if you recognize keywords such as: HTML5, ReactJS,
							UX Design, Prototyping, Javascript, CSS, User Interface, User
							Experience etc... (Or If you want to learn about those keywords).
						</Paragraph>
					</ShowIf>
					<ShowIf noAnimation thisValue={forDev} thatValue={true}>
						<Paragraph>
							Some parts of the site have a lot of technical words, if you don’t
							like you can switch to a more normal tone.
						</Paragraph>
					</ShowIf>
					<ShowIf noAnimation thisValue={forDev} thatValue={true}>
						<Button onClick={knowCode}>change to non-technical tone</Button>
					</ShowIf>
					<ShowIf noAnimation thisValue={forDev} thatValue={false}>
						<Button onClick={knowCode}>change to technical tone</Button>
					</ShowIf>
				</ZigZag>
				<ContentCategory category='customize' />
			</ContentShow>
		</Fragment>
	);
};

export default SettingsPage;
