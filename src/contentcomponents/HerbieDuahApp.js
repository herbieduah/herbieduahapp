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
	LessContent,
	// Gif,
	Header,
	Emphasis
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

const header = "Case Study (Coming Soon)";
// const workDuration = "January 2019 - Present";
// const workSkills = "HTML5, CSS, Javascript, Prototyping, UX Design";
// const workTools = "Adobe Creative Suite, Github, Sketch, Visual Studio Code";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

/* <ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState> */

// const HomePage = ({ contentProps }) => {
const HerbieDuahAppPage = ({ contentProps }) => {
	const { forDev } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<LessContent header={header}>Why I made this portolio.</LessContent>
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
				{/* <WorkInfo workinfo={workinfo} /> */}
				<Emphasis>
					<Emoji className='emoji' symbol='🚧' label='contruction' />
					You're only seeing this because you chose "Developer Mode". I am still
					working on this part, wanted to get everything wrapped up first.
					<Emoji className='emoji' symbol='🚧' label='contruction' />
				</Emphasis>
				<ShowIf noAnimation thisValue={forDev} thatValue={true}>
					<HeadingTwo>For My Devs</HeadingTwo>
					<UL>
						{/* <LI>
							I didn't intend for this to be an app. I wanted to make a website
							that was customizable but during the development I realized it was
							very "app-like". The idea of creating my own app later on inspired
							me.
						</LI> */}
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
							I used asked for feedback on r/webdev r/userexperience
							r/designcriques subreddit
						</LI>
						<LI>
							I host on
							<Link href='https://app.netlify.com/'>Netlify</Link>&nbsp;
						</LI>
						<LI>
							I kept the content at a max-width of 540px so I wouldn't have to
							resize a lot of images.
						</LI>
					</UL>
				</ShowIf>
				<Paragraph>
					While I figure out how to structure the rest of this page, here are
					some pictures and videos.
				</Paragraph>
				<Figure src={thisAppHerbieDuahComeUX}>
					<Figcaption>
						HerbieDuah.com coming soon design UX Design Summer 2018{" "}
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

				<HeadingTwo>Special Thanks</HeadingTwo>
				<Paragraph>
					I am the sole developer, designer, engineer, UX writer etc and I put
					countless hours into this project.
				</Paragraph>
				<Paragraph>It was tough.</Paragraph>
				<Paragraph>Big shout out to these people for their support.</Paragraph>
				<UL>
					<LI wide>Daliza Jeffrey</LI>
					<LI wide>Henry Duah</LI>
					<LI wide>Kyle Mooney</LI>
					<LI wide>Johnny Haizel-Cobbina</LI>
					<LI wide>Nuvi Njinimbam</LI>
				</UL>

				<ShowIf noAnimation thisValue={forDev} thatValue={true}>
					<HeadingTwo>The Dev Community</HeadingTwo>
					<Paragraph>
						Shout out to the amazing developer community. I have truly learned a
						lot these past couple months. Once this project is wrapped, I hope
						to be more active in Stack Overflow and also sharing my knowledge on
						my&nbsp;<Link href='https://medium.com/@herbieduah'>Medium</Link>
						&nbsp;account.
					</Paragraph>
				</ShowIf>
				<ContentCategory category='about' />
			</ContentShow>
		</Fragment>
	);
};

// const workinfo = {
// 	workDuration,
// 	workSkills,
// 	workTools
// };

export default HerbieDuahAppPage;
