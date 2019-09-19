/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	// HeadingThree,
	// Image,
	Link,
	UL,
	LI,
	FiGif,
	Figcaption,
	Figure,
	WorkInfo,
	ContentCategory,
	ContentShow,
	// Gif,
	Header
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
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

const header = "HerbieDuah.app";
const workDuration = "January 2019 - Present";
const workSkills = "HTML5, CSS, Javascript, Prototyping, UX Design";
const workTools = "Adobe Creative Suite, Github, Sketch, Visual Studio Code";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

/* <ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState> */

// const HomePage = ({ contentProps }) => {
const HerbieDuahAppPage = ({ contentProps }) => {
	const { fullScreen, minimalMode, techy } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>Why I made this portolio.</Paragraph>
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
				<WorkInfo techy={techy} workinfo={workinfo} />
				<Paragraph>
					<Emoji className='emoji' symbol='🚧' label='contruction' />
					Coming Soon{" "}
					<Emoji className='emoji' symbol='🚧' label='contruction' />
				</Paragraph>
				<ShowIf noAnimation thisValue={techy} thatValue={true}>
					<HeadingTwo>For My Devs</HeadingTwo>
					<UL>
						<LI>
							I didn't intend for this to be an app. I wanted to make a website
							that was customizable but during the development I realized it was
							very "app-like". The idea of creating my own app later on inspired
							me.
						</LI>
						<LI>
							This is built on create-react-app (no ejection). All client no
							server baby!
						</LI>
						<LI>I use Styled Components heavily for my themes</LI>
						<LI>
							I host my videos myself but I have a copy on&nbsp;
							<Link href='https://cloudinary.com'>Cloudinary</Link>
							&nbsp;
						</LI>
						<LI>
							I used asked for feedback on r/webdev r/userexperience subreddit
						</LI>
						<LI>
							I host on
							<Link href='https://app.netlify.com/'>Netlify</Link>&nbsp;
						</LI>
						<LI>
							I kept the content at a max-width of 740px so I wouldn't have to
							resize a lot of images.
						</LI>
						<LI>
							<s>
								I am aware my site is not accessible and I am working on it.
							</s>
							I gotta add some alt tags.
						</LI>
					</UL>
				</ShowIf>
				<Paragraph>
					While I figure out how to structure the rest of this page, here are
					some pictures and videos.
				</Paragraph>
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

				<ContentCategory
					fullScreen={fullScreen}
					minimalMode={minimalMode}
					category='work'
				/>
			</ContentShow>
		</Fragment>
	);
};

const workinfo = {
	workDuration,
	workSkills,
	workTools
};

export default HerbieDuahAppPage;
