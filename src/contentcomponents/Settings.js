/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import { Paragraph, HeadingTwo, Header, ContentShow } from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
import Text from "../stylecomponents/Text";
// import Emoji from "a11y-react-emoji";
const header = "Settings";

const SettingsPage = ({ contentProps }) => {
	const { navBarRight, setNavBarRight } = contentProps;
	const moveNavBar = () => {
		navBarRight ? setNavBarRight(false) : setNavBarRight(true);
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
				<HeadingTwo>Move Navigation Bar</HeadingTwo>
				<Paragraph>
					This setting moves navigations bar to the right or left.
				</Paragraph>
				<div className='pos-rel c-margin-bottom'>
					<ShowIf thisValue={navBarRight} thatValue={true}>
						<Text button onClick={moveNavBar} className='padding-left-right'>
							Move Navigation bar to the left to the left, everything you need
							to navigate this site to the left
						</Text>
					</ShowIf>
					<ShowIf thisValue={navBarRight} thatValue={false}>
						<Text button onClick={moveNavBar} className='padding-left-right'>
							Move Navigation Bar to the right
						</Text>
					</ShowIf>
				</div>
				<HeadingTwo>Complimentary Navigation Bar</HeadingTwo>
				<Paragraph>
					{" "}
					This setting adds a background complimentary to the current background
					to the navigation bar.
				</Paragraph>
				<HeadingTwo>Technical vs Non-Technical</HeadingTwo>
				<Paragraph>
					My main audience are people that do not know much about coding so I
					didn't want to add a lot of technical jargon, but if you are
					knowledgable about coding or want to learn then I recommend turning on
					this settings.
				</Paragraph>
				<HeadingTwo>Lazy loading</HeadingTwo>
				<Paragraph>Stop lazyloading</Paragraph>
				<HeadingTwo>Minimal Mode</HeadingTwo>
				<Paragraph>
					This setting gets rids of the slider AND the navigation bar and adds a
					tiny "hamburger" in place, just like every other site.
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default SettingsPage;
