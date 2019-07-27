/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	HeadingTwo,
	Image,
	Header,
	Gif,
	HeadingThree
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";
const header = "Settings";

const SettingsPage = ({ contentProps }) => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					You change certain aspects of this site to your liking.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<HeadingTwo>Move Navigation Bar</HeadingTwo>
				<Paragraph>
					This setting moves navigations bar to the right or left.
				</Paragraph>
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
