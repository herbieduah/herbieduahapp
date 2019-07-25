/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	Link,
	Header,
	Image,
	Figure,
	Figcaption
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
import Yes1480x2220 from "../media/images/startNow/Yes.jpg";
import FullPage1480x1824 from "../media/images/startNow/FullPage.jpg";
import FullSizeStudents1480x1774 from "../media/images/startNow/FullSizeStudents.jpg";
import idkwhatIamDoing1480x2220 from "../media/images/startNow/idkwhatIamDoing.jpg";
import smileStock1480x2220 from "../media/images/startNow/smileStock.jpg";

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
				<div className='container'>
					<Header>{header}</Header>
					<Figure src={StandOutFromTheRest2000x3000}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={NAUConstruction2000x1500}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={KnowTheGame2000x1500}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={herbieCareerWidePoster1480x1500}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={ConstructAPlan13X19x1952x2874}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={ConstructAPlan2000x1500}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={CareerWidePosterPhotoshop1480x1973}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={CareerPoster1480x950}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={ACMClubPhoto2000x2667}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={Yes1480x2220}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={FullPage1480x1824}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={FullSizeStudents1480x1774}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={idkwhatIamDoing1480x2220}>
						<Figcaption>Something</Figcaption>
					</Figure>
					<Figure src={smileStock1480x2220}>
						<Figcaption>Something</Figcaption>
					</Figure>
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default StartNowPage;
