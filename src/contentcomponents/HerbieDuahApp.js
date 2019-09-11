/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	// HeadingTwo,
	// HeadingThree,
	// Image,
	FiGif,
	Figcaption,
	Figure,
	ContentCategory,
	// Gif,
	Header
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
import Emoji from "a11y-react-emoji";

import {
	thisAppHDRHomeTop,
	thisAppHerbieDuahMobile,
	thisAppHerbieDuahComeUX,
	thisAppHDRHomeUX,
	thisAppGatsbySmiling,
	thisAppappOld
} from "../MediaVariables";
import { thisAppherokuappdesktop, thisAppGatsby } from "../VideoVariables";

const header = "Hi, I'm Herbie";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

/* <ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState> */

// const HomePage = ({ contentProps }) => {
const HerbieDuahAppPage = ({ contentProps }) => {
	const { fullScreen } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>Why I made this portolio</Paragraph>
				<div className='less__container'>
					<Figure src={thisAppHDRHomeTop}>
						<Figcaption>
							HerbieDuah.app Desktop website screenshot March 2019 (Development)
						</Figcaption>
					</Figure>
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Figure src={thisAppHerbieDuahComeUX}>
					<Figcaption>
						HerbieDuah.com coming design UX Design Summer 2018{" "}
						<Emoji className='emoji' symbol='😂' label='laugh' />. What an
						amateur.
					</Figcaption>
				</Figure>
				<Figure src={thisAppHDRHomeUX}>
					<Figcaption>HerbieDuah.app UX Design February 2019</Figcaption>
				</Figure>
				<Figure src={thisAppHerbieDuahMobile} className='paddingLRMed'>
					<Figcaption>
						HerbieDuah.app Desktop website screenshot March 2019 (Development)
					</Figcaption>
				</Figure>
				<FiGif
					width='720'
					height='900'
					className='paddingLRSm'
					url={thisAppherokuappdesktop}>
					<Figcaption>
						HerbieDuah.app Desktop website screen recording April 2019
						(Development)
					</Figcaption>
				</FiGif>
				<Figure src={thisAppappOld} className='paddingLRMed'>
					<Figcaption>
						HerbieDuah.app Mobile website screenshot April 2019 (Development)
					</Figcaption>
				</Figure>
				<FiGif className='paddingLRSm' url={thisAppGatsby}>
					<Figcaption>
						HerbieDuah.app Mobile website screen recording June 2019
						(Development)
					</Figcaption>
				</FiGif>
				<Figure src={thisAppGatsbySmiling} className='paddingLRMed'>
					<Figcaption>
						HerbieDuah.app Mobile website screenshot June 2019 (Development)
					</Figcaption>
				</Figure>
				<ContentCategory fullScreen={fullScreen} category='work' />
			</ContentShow>
		</Fragment>
	);
};

export default HerbieDuahAppPage;
