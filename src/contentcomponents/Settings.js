/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	HeadingTwo,
	Header,
	ContentShow,
	SettingButton,
	DisableSetting
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
import Text from "../stylecomponents/Text";
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
		lazyLoading,
		setLazyLoading,
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

	const downloadEverything = () => {
		lazyLoading ? setLazyLoading(false) : setLazyLoading(true);
	};

	const knowCode = () => {
		techy ? setTechy(false) : setTechy(true);
	};

	const failure = () => {
		setSides(false);
		setTimeout(() => {
			setSides(true);
		}, 7000);
	};

	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					You can change certain aspects of this site to your liking.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<DisableSetting
					thisValue={minimalMode}
					thatValue={true}
					message="You can't interact with this setting because you've made the app look like every other site">
					<HeadingTwo>Move Navigation Bar</HeadingTwo>
					<Paragraph>
						This setting moves navigations bar to the right or left.
					</Paragraph>
					<ShowIf noAnimation thisValue={navBarRight} thatValue={true}>
						<Text button onClick={moveNavBar} className='padding-left-right'>
							Move Navigation bar to the left to the left, everything you need
							to navigate the site to the left
						</Text>
					</ShowIf>
					<ShowIf noAnimation thisValue={navBarRight} thatValue={false}>
						<Text button onClick={moveNavBar} className='padding-left-right'>
							Move Navigation Bar to the right
						</Text>
					</ShowIf>
				</DisableSetting>
				<HeadingTwo>Complementary Navigation Bar</HeadingTwo>
				<Paragraph>
					{" "}
					This setting adds a background complementary to the current background
					to the navigation bar. (FYI: White complements white and black
					complements black)
				</Paragraph>
				<ShowIf noAnimation thisValue={navBarComplement} thatValue={false}>
					<Text
						button
						onClick={complementNavBar}
						className='padding-left-right'>
						Add complementary background
					</Text>
				</ShowIf>
				<ShowIf noAnimation thisValue={navBarComplement} thatValue={true}>
					<Text
						button
						onClick={complementNavBar}
						className='padding-left-right'>
						Remove complementary background
					</Text>
				</ShowIf>
				<HeadingTwo>
					Technical vs Non-Technical
					<span className='alpha'>Not functional</span>
				</HeadingTwo>
				<Paragraph>
					My main audience are people that do not know much about coding so I
					didn't want to add a lot of technical jargon, but if you are
					knowledgable about coding or want to learn then I recommend turning on
					this settings.
				</Paragraph>
				<ShowIf noAnimation thisValue={techy} thatValue={true}>
					<Text button onClick={knowCode} className='padding-left-right'>
						change tone to Technical
					</Text>
				</ShowIf>
				<ShowIf noAnimation thisValue={techy} thatValue={false}>
					<Text button onClick={knowCode} className='padding-left-right'>
						change tone to Non technical
					</Text>
				</ShowIf>
				{/* <HeadingTwo>
					Lazy loading <span className='alpha'>Not functional</span>
				</HeadingTwo>
				<Paragraph>Stop lazyloading</Paragraph>
					<ShowIf noAnimation thisValue={lazyLoading} thatValue={true}>
						<Text
							button
							onClick={downloadEverything}
							className='padding-left-right'>
							Turn Off Lazy load
						</Text>
					</ShowIf>
					<ShowIf noAnimation thisValue={lazyLoading} thatValue={false}>
						<Text className='padding-left-right'>
							You can change this setting again if you refresh or come back to
							the site again
						</Text>
					</ShowIf> */}
				<HeadingTwo>Like every other site</HeadingTwo>
				<Paragraph>
					This setting gets rids of the slider AND the vertical navigation bar
					making it like every other website.
				</Paragraph>
				<ShowIf noAnimation thisValue={minimalMode} thatValue={true}>
					<Text button onClick={basicMode} className='padding-left-right'>
						go back to the sliders and vertical navigation bar
					</Text>
				</ShowIf>
				<ShowIf noAnimation thisValue={minimalMode} thatValue={false}>
					<Text button onClick={basicMode} className='padding-left-right'>
						Make It look like every other site
					</Text>
				</ShowIf>
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
					<Paragraph>
						I mean it does what it's intended to do but it doesn't look good.
					</Paragraph>
					<Paragraph>
						<strong>
							Since this is a failed setting, it will revert back in 7 seconds
						</strong>
					</Paragraph>
					<ShowIf noAnimation thisValue={switchSides} thatValue={true}>
						<Text button onClick={failure} className='padding-left-right'>
							Switch Sides for 7 Seconds
						</Text>
					</ShowIf>
					<ShowIf noAnimation thisValue={switchSides} thatValue={false}>
						<Text className='padding-left-right'>
							Reverting back in 7 seconds
						</Text>
					</ShowIf>
				</DisableSetting>
			</ContentShow>
		</Fragment>
	);
};

export default SettingsPage;
