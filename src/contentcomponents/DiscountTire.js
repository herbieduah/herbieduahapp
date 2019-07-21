/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	Link,
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
import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
import cornishPastyPic from "../media/images/picsOfMe/hd-herbieSmile-1974.jpg";
import testPic from "../media/images/photography-herbieFood-2222.jpg";
import testPic2 from "../media/images/photography-melPhoto-2221.jpg";
// import ReactPlayer from "react-player";

const header = "Discount Tire";

const DiscountTirePage = ({ contentProps }) => {
	// const { whom } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					Currently at Discount Tire as a Front End Developer and a model?{" "}
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>
					I am currently working at Discount Tire as a Front End Developer I. My
					job duties consist of developing for and updating content for a legacy
					Intranet System so unfortunately, I don't have any work to show.
				</Paragraph>
				<HeadingTwo>Modeling</HeadingTwo>
				<Paragraph>
					I volunteered to be a model for one of their shoots.{" "}
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default DiscountTirePage;
