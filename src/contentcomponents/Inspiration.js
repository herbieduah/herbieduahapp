/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, Header, Paragraph, HeadingTwo } from "../ContentHelpers";

const header = "Inspiration";

const InspirationPage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>I drew a lot of inspirations from many places</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<HeadingTwo>Design</HeadingTwo>
				<Paragraph>
					The design was inspired by a combination from a lot of these sites
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default InspirationPage;
