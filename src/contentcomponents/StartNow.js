/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	Link,
	Header,
	Image
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
import StandOutFromTheRest2000x3000 from "../media/images/startNow/StandOutFromTheRest.jpg";
import NAUConstruction2000x1500 from "../media/images/startNow/NAUConstruction.jpg";
import KnowTheGame2000x1500 from "../media/images/startNow/KnowTheGame.jpg";
import herbieCareerWidePoster1480x1500 from "../media/images/startNow/herbieCareerWidePoster-317.jpg";
import ConstructAPlan13X19x1952x2874 from "../media/images/startNow/ConstructAPlan13X19.jpg";
import ConstructAPlan2000x1500 from "../media/images/startNow/ConstructAPlan-Horizontal.jpg";
import CareerWidePosterPhotoshop1480x1973 from "../media/images/startNow/CareerWidePosterPhotoshop-208.jpg";
import CareerPoster1480x950 from "../media/images/startNow/CareerPoster-950.jpg";
import ACMClubPhoto2000x2667 from "../media/images/startNow/ACMClubPhoto.jpg";

const header = "Start Now";

const StartNowPage = ({ contentProps }) => {
	// const { whom } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					Revamped a traveling exhibit site for my senior capstone.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Image src={StandOutFromTheRest2000x3000} />
				<Image src={NAUConstruction2000x1500} />
				<Image src={KnowTheGame2000x1500} />
				<Image src={herbieCareerWidePoster1480x1500} />
				<Image src={ConstructAPlan13X19x1952x2874} />
				<Image src={ConstructAPlan2000x1500} />
				<Image src={CareerWidePosterPhotoshop1480x1973} />
				<Image src={CareerPoster1480x950} />
				<Image src={ACMClubPhoto2000x2667} />
			</ContentShow>
		</Fragment>
	);
};

export default StartNowPage;
