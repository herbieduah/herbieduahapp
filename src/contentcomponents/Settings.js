/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import { Paragraph, HeadingTwo, Image, Header } from "../ContentHelpers";
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
			</ContentShow>
		</Fragment>
	);
};

export default SettingsPage;
