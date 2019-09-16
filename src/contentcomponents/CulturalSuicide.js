import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	// HeadingTwo,
	// Link,
	Header
	// HeadingThree,
	// Image,
	// Small,
	// Figure,
	// Figcaption,
	// Gif,
	// Header
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
// import ReactPlayer from "react-player";

const header = "Cultural $uicide";

const CulturalSuicidePage = ({ contentProps }) => {
	// const { whom , minimalMode } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>Coming soon</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>
					Working on designing and developing a site for my friends clothing
					brand, Cultural $uicide.
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default CulturalSuicidePage;
