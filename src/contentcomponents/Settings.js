/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	HeadingTwo,
	Header,
	ContentShow,
	ContentCategory,
	Small,
	Button,
	// SettingButton,
	DisableSetting
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
		techy,
		setTechy,
		setSides,
		switchSides,
		fullScreen,
		setFullscreen
	} = contentProps;
	const moveNavBar = () => {
		navBarRight ? setNavBarRight(false) : setNavBarRight(true);
	};
	const complementNavBar = () => {
		navBarComplement ? setNavBarComplement(false) : setNavBarComplement(true);
	};

	const basicMode = () => {
		minimalMode ? setMinimalMode(false) : setMinimalMode(true);
		fullScreen ? setFullscreen(false) : setFullscreen(true);
	};

	// const downloadEverything = () => {
	// 	lazyLoading ? setLazyLoading(false) : setLazyLoading(true);
	// };

	const knowCode = () => {
		techy ? setTechy(false) : setTechy(true);
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
				<Header less>{header}</Header>
				<Paragraph less>
					You can change certain aspects of this web app to your liking.
				</Paragraph>
				<div className='less__container'>
					{/* <Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
						risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta
						gravida at eget metus. Sed posuere consectetur est at lobortis.
						Maecenas sed diam eget risus varius blandit sit amet non magna.
					</Paragraph> */}
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>
					I want to make sure you have the best experience using my web app, so
					I created some settings that enable you to change certain aspects it.
				</Paragraph>
				<HeadingTwo>Developer Mode</HeadingTwo>
				<ShowIf noAnimation thisValue={techy} thatValue={false}>
					<Paragraph>
						I developed my web app for two types of people: people who know code
						and people who do not. To give the best experience for both, I
						decided to hide a lot of the technical jargon. If you're
						knowledgable about coding or would like to learn more, then I
						suggest turning on this setting.
					</Paragraph>
				</ShowIf>
				<ShowIf noAnimation thisValue={techy} thatValue={true}>
					<Paragraph>
						I sprinkled some technical knowledge around the web app. I also only
						show specific components like the Switch Sides setting for technical
						users. (I wanted to turn on the Matrix theme when "Activate
						Developer mode" was clicked but that would have been too cliché.)
					</Paragraph>
				</ShowIf>

				<ShowIf noAnimation thisValue={techy} thatValue={true}>
					<Button onClick={knowCode}>De-Activate developer mode</Button>
				</ShowIf>
				<ShowIf noAnimation thisValue={techy} thatValue={false}>
					<Button onClick={knowCode}>Activate developer mode</Button>
				</ShowIf>
				<ShowIf noAnimation thisValue={techy} thatValue={true}>
					<DisableSetting
						thisValue={fullScreen}
						thatValue={true}
						message="You can't interact with this setting if the slider is not showing">
						<HeadingTwo>Switch sides (Failure)</HeadingTwo>
						<Paragraph>
							This lets you switch the content and the menu. This was one of the
							first settings I had when I started developing this app but I
							neglected it and failed to keep up with.
						</Paragraph>
						{/* <Paragraph>
						I mean it does what it's intended to do but it doesn't look good.
					</Paragraph> */}
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
				</ShowIf>
				{/* <ShowIf noAnimation thisValue={techy} thatValue={true}>
					<HeadingTwo>Lazy loading</HeadingTwo>
				</ShowIf> */}
				{/* <ShowIf noAnimation thisValue={techy} thatValue={false}>
					<HeadingTwo>Best Experience Mode</HeadingTwo>
				</ShowIf>

				<ShowIf noAnimation thisValue={techy} thatValue={false}>
					<Paragraph>
						Right now, all the images and gifs on the web app load as you
						scroll. Activating this setting downloads every image and gif on the
						site (No loading screens) therefore, giving you the best experience.
					</Paragraph>
				</ShowIf>
				<ShowIf noAnimation thisValue={techy} thatValue={true}>
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
						<ShowIf noAnimation thisValue={techy} thatValue={false}>
							Activate Best Experience Mode
						</ShowIf>
						<ShowIf noAnimation thisValue={techy} thatValue={true}>
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
					message="You can't interact with this setting because you've made the web app look like every other website.">
					<HeadingTwo>Move navigation bar</HeadingTwo>
					<Paragraph>
						This setting moves navigations bar to the right or left. (It's
						useful on mobile if you're left handed.)
					</Paragraph>
					<ShowIf noAnimation thisValue={navBarRight} thatValue={true}>
						<Button onClick={moveNavBar}>Move Navigation Bar Left</Button>
						{/* <Small>
							Move Navigation bar to the left to the left, everything you need
							to navigate the site to the left.
						</Small> */}
					</ShowIf>
					<ShowIf noAnimation thisValue={navBarRight} thatValue={false}>
						<Button onClick={moveNavBar}>
							Move Navigation Bar to the right
						</Button>
						{/* <Small>
							Move Navigation bar back to right side, not the wrong side, the
							right side, the side I chose first which is right.
						</Small> */}
					</ShowIf>
				</DisableSetting>

				<HeadingTwo>Like every other site</HeadingTwo>
				<Paragraph>
					This setting gets rids of the slider and the vertical navigation bar
					therefore making it like every other website.
				</Paragraph>
				<ShowIf noAnimation thisValue={minimalMode} thatValue={true}>
					<Button onClick={basicMode}>Go back to the slider</Button>
				</ShowIf>
				<ShowIf noAnimation thisValue={minimalMode} thatValue={false}>
					<Button onClick={basicMode}>
						Make it look like every other site
					</Button>
				</ShowIf>
				<DisableSetting
					thisValue={minimalMode}
					thatValue={false}
					message='This setting is only works when the web app looks like every other website.'>
					<HeadingTwo>Background Navigation Bar</HeadingTwo>
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
						<Button onClick={complementNavBar}>Remove background color</Button>
					</ShowIf>
				</DisableSetting>

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
