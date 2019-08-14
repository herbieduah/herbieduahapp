/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	HeadingOne,
	HeadingTwo,
	HeadingThree,
	Image,
	Small,
	Figure,
	Figcaption,
	Gif,
	Header
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
import herbieduahcomMobile1480x2632 from "../media/images/thisApp/herbieduahcomMobile.jpg";
import appOld1480x2923 from "../media/images/thisApp/appOld.jpg";
import HDRHome1480x1052 from "../media/images/thisApp/HDRHome.jpg";
import HDRHomeCopy4x1480x1052 from "../media/images/thisApp/HDRHomeCopy4.jpg";
import HDRHomeCopy6x1480x1052 from "../media/images/thisApp/HDRHomeCopy6.jpg";
import herbieduahComiPad from "../media/videos/thisApp/herbieduahcom.mp4";
// import ReactPlayer from "react-player";

const header = "Hi, I'm Herbie";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

/* <ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState> */

// const HomePage = ({ contentProps }) => {
const HerbieDuahAppPage = ({ contentProps }) => {
	// const { whom } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>About this website</Paragraph>
				<div className='flex-container' />
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>

				<Gif url={herbieduahComiPad} />
				<Paragraph>
					<span className='alpha'>
						This will probably the last page to be finished.
					</span>
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default HerbieDuahAppPage;
