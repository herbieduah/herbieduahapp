/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, ComingSoon, Paragraph, Header } from "../ContentHelpers";

const header = "Experience";

const Resume = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>My past experience</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>Copied and pasted from LinkedIn</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default Resume;
