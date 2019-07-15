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
					Hello, I'm Herbie, a Photographer and Front End Developer with a
					passion for designing and engineering user experiences for you.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>
					<Paragraph>Coming soon</Paragraph>
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default SettingsPage;
