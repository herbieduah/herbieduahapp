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
	// Small,
	Button,
	// SettingButton,
	DisableSetting,
	Link,
	Instructions,
	ZigZag
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
// import Text from "../stylecomponents/Text";
// import Emoji from "a11y-react-emoji";
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
			setFullscreen(true);
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
				<Header>{header}</Header>
				<ZigZag>
					<Paragraph>
						I want to make sure you have the best experience using my web app,
						so I created some settings that enable you to change certain aspects
						of it.
					</Paragraph>
				</ZigZag>
				<ZigZag>
					<HeadingTwo>Developer Mode</HeadingTwo>
					<ShowIf noAnimation thisValue={forDev} thatValue={false}>
						{/* <Paragraph>
							I developed my web app for two types of people: people who know
							code and people who do not. To give the best experience for both,
							I decided to hide a lot of the technical jargon. If you're
							knowledgable about coding or would like to learn more, then I
							suggest turning on this setting.
						</Paragraph> */}
						<Paragraph>
							Activate this if you recognize keywords such as: HTML5, ReactJS,
							UX Design, Prototyping, Javascript, CSS, User Interface, User
							Experience etc... (Or If you want to learn about those keywords).
						</Paragraph>
					</ShowIf>
					<ShowIf noAnimation thisValue={forDev} thatValue={true}>
						{/* <Paragraph>
							(I wanted to turn on the Matrix theme when "Activate Developer
							mode" was clicked but that would have been too cliché)
						</Paragraph> */}
						<Paragraph>
							I sprinkled a lot of technical jargon around this web app but I
							don't do a great a job indicating where.
						</Paragraph>
						<Paragraph>
							(Why not have this setting as a default?
							<br />
							95% of the people I know don't know all about these technical
							mambo jambo. I also wanted the tone to be easy to understand for
							everyone.
						</Paragraph>
					</ShowIf>

					<ShowIf noAnimation thisValue={forDev} thatValue={true}>
						<Button onClick={knowCode}>De-Activate developer mode</Button>
					</ShowIf>
					<ShowIf noAnimation thisValue={forDev} thatValue={false}>
						<Button onClick={knowCode}>Activate developer mode</Button>
					</ShowIf>
				</ZigZag>
				<ZigZag>
					<HeadingTwo>Accessibility Mode (Beta)</HeadingTwo>
					<ShowIf noAnimation thisValue={accessible} thatValue={false}>
						<Paragraph>Accessibility Mode changes these settings:</Paragraph>
						<UL>
							<LI>Adds Background color to Navigation Bar</LI>
							<LI>Changes the web app to a Traditional look</LI>
							<LI>Adds controls to video players</LI>
						</UL>
						<Instructions>
							Find more details about these settings below.
						</Instructions>
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
				</ZigZag>
				<ZigZag>
					<ShowIf noAnimation thisValue={downloaded} thatValue={false}>
						<HeadingTwo>Traditional or Default </HeadingTwo>
						<Paragraph>
							This setting lets you choose between a more traditional horizontal
							navigation menu up top <i>or</i> the default slider and the
							vertical navigation bar.
						</Paragraph>
						<ShowIf noAnimation thisValue={minimalMode} thatValue={true}>
							<Button onClick={basicMode}>Change to Default</Button>
						</ShowIf>
						<ShowIf noAnimation thisValue={minimalMode} thatValue={false}>
							<Button onClick={basicMode}>Change to Traditional</Button>
						</ShowIf>
					</ShowIf>
					<ShowIf noAnimation thisValue={downloaded} thatValue={true}>
						<DisableSetting
							thisValue={forDev}
							thatValue={true}
							message={`Unfortunately, the Slider causes problems when the app is "downloaded". You can use it if you switch to developer mode.`}>
							<HeadingTwo>Traditional or Default </HeadingTwo>
							<Paragraph>
								This setting gets rids of the default slider and the vertical
								navigation bar and replaces with a more traditional horizontal
								navigation menu up top.
							</Paragraph>
							<ShowIf noAnimation thisValue={minimalMode} thatValue={true}>
								<Button onClick={basicMode}>Change to Default</Button>
							</ShowIf>
							<ShowIf noAnimation thisValue={minimalMode} thatValue={false}>
								<Button onClick={basicMode}>Change to Traditional</Button>
							</ShowIf>
						</DisableSetting>
					</ShowIf>
				</ZigZag>
				{/* <ZigZag>
					<DisableSetting
						thisValue={fullScreen || !forDev}
						thatValue={true}
						message={`The web app has to be in it's Default mode and Developer Mode.`}>
						<HeadingTwo>Switch sides (Failure)</HeadingTwo>
						<Paragraph>
							This lets you switch the content and the menu. This was one of the
							first settings I had when I started developing this app but I
							neglected it and failed to keep up with.
						</Paragraph>
					
						<Paragraph>
							<strong>
								Since this is a failed setting, it will revert back in 10
								seconds
							</strong>
						</Paragraph>
						<ShowIf noAnimation thisValue={switchSides} thatValue={true}>
							<Button onClick={failure}>Switch sides for 10 Seconds</Button>
						</ShowIf>
						<ShowIf noAnimation thisValue={switchSides} thatValue={false}>
							<Paragraph>Reverting back in 10 seconds</Paragraph>
						</ShowIf>
					</DisableSetting>
				</ZigZag> */}
				<ZigZag>
					{/* <ShowIf noAnimation thisValue={forDev} thatValue={true}>
					<HeadingTwo>Lazy loading</HeadingTwo>
				</ShowIf> */}
					{/* <ShowIf noAnimation thisValue={forDev} thatValue={false}>
					<HeadingTwo>Best Experience Mode</HeadingTwo>
				</ShowIf>

				<ShowIf noAnimation thisValue={forDev} thatValue={false}>
					<Paragraph>
						Right now, all the images and gifs on the web app load as you
						scroll. Activating this setting downloads every image and gif on the
						site (No loading screens) therefore, giving you the best experience.
					</Paragraph>
				</ShowIf>
				<ShowIf noAnimation thisValue={forDev} thatValue={true}>
					<Paragraph>
						Stop lazy loading images and videos and download everything all at
						once. Speaking of lazy... it was either spending 2 hours to do this
						or 5-6 hours optimzing 100+ images and gifs for mobile and tablet or
						moving this to Gatsby or something (I will optimize for mobile and
						tablet when it is out of Beta). It's only ~ 30mb worth of images and
						videos(gifs)
					</Paragraph>
				</ShowIf>

				<ShowIf noAnimation thisValue={lazyLoading} thatValue={true}>
					<Button onClick={downloadEverything}>
						<ShowIf noAnimation thisValue={forDev} thatValue={false}>
							Activate Best Experience Mode
						</ShowIf>
						<ShowIf noAnimation thisValue={forDev} thatValue={true}>
							Turn Off Lazy load
						</ShowIf>
					</Button>
				</ShowIf>
				<ShowIf noAnimation thisValue={lazyLoading} thatValue={false}>
					<Paragraph>
						You can change this setting again if you refresh or come back to the
						site again
					</Paragraph>
				</ShowIf>  */}
					<DisableSetting
						thisValue={minimalMode}
						thatValue={true}
						message="You can't interact with this setting because the web app is set to Traditional.">
						<HeadingTwo>Move navigation bar</HeadingTwo>
						<Paragraph>
							This setting moves navigations bar to the right or left. (It's
							useful on mobile if you're left handed.)
						</Paragraph>
						<ShowIf noAnimation thisValue={navBarRight} thatValue={true}>
							<Button onClick={moveNavBar}>Move Navigation Bar left</Button>
							{/* <Small>
							Move Navigation bar to the left to the left, everything you need
							to navigate the site to the left.
						</Small> */}
						</ShowIf>
						<ShowIf noAnimation thisValue={navBarRight} thatValue={false}>
							<Button onClick={moveNavBar}>Move Navigation Bar right</Button>
							{/* <Small>
							Move Navigation bar back to right side, not the wrong side, the
							right side, the side I chose first which is right.
						</Small> */}
						</ShowIf>
					</DisableSetting>
				</ZigZag>

				<ZigZag>
					<HeadingTwo>Add controls to videos</HeadingTwo>
					<Paragraph>
						By default, all the videos on this web app autoplay (they all have
						no sound) and have no controls. This setting lets you add or remove
						controls for the videos.
					</Paragraph>
					<ShowIf noAnimation thisValue={videoControls} thatValue={true}>
						<Button onClick={controlVideoMode}>Remove controls</Button>
					</ShowIf>
					<ShowIf noAnimation thisValue={videoControls} thatValue={false}>
						<Button onClick={controlVideoMode}>Add controls</Button>
					</ShowIf>
				</ZigZag>
				<ZigZag>
					<DisableSetting
						thisValue={minimalMode}
						thatValue={false}
						message='This setting only works when the web app is set to Traditional.'>
						<HeadingTwo>Navigation Bar background color</HeadingTwo>
						<Paragraph>
							{" "}
							This setting adds a background color to the navigation bar.(Only
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
				<ContentCategory
					fullScreen={fullScreen}
					minimalMode={minimalMode}
					category='customize'
				/>
			</ContentShow>
		</Fragment>
	);
};

export default SettingsPage;
