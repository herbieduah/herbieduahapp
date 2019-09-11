/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	// HeadingThree,
	Image,
	Link,
	// Figure,
	// Figcaption,
	Gif,
	Header,
	// Flex,
	ContentShow
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
// import { Image as CloudImage, Video } from "cloudinary-react";
import Emoji from "a11y-react-emoji";
import { mobileModel, isMobileOnly } from "react-device-detect";
// import Modal from "../maincomponents/Modal";
// import cornishPastyPic from "../media/images/picsOfMe/test.jpg";
// import yes from "../media/images/startNow/Yes.jpg";
// import testPicHorizontal from "../media/videos/videosOfme/raveMillyRock_1.mp4";
import vneckcrewneck from "../media/videos/videosOfme/vNeckCrewNeck.mp4";
// import { ScrollDownPortrait } from "../stylecomponents/Base";
// import { thisAppGatsbySmiling, placesicyAlley } from "../MediaVariables";
// import YouTube from "react-youtube";
import {
	picsOfMeHeroImageTwo,
	picsOfMeHero,
	picsOfMeSelfieOlympics
} from "../MediaVariables";
// import ReactPlayer from "react-player";

const header = "HerbieDuah.app";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

/* <ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState> */

// const HomePage = ({ contentProps }) => {
const HomePage = ({ contentProps }) => {
	const { whom } = contentProps;
	// const opts = {
	// 	height: "100%",
	// 	width: "100%",
	// 	playerVars: {
	// 		autoplay: 1,
	// 		controls: 0,
	// 		cc_load_policy: 0,
	// 		fs: 0,
	// 		iv_load_policy: 3,
	// 		modestbranding: 1,
	// 		rel: 0,
	// 		showinfo: 0
	// 	}
	// };

	return (
		<Fragment>
			<ContentShow less>
				{/* <ScrollDownPortrait /> */}
				<Header less>{header}</Header>
				<ShowIf noAnimation thisValue={"everyone"} thatValue={whom}>
					<Paragraph less>
						{/* Nowadays, there is an app for everything. In the future, I believe
						there is going to be an app for everyone. Hi I'm Herbie, and this is
						my app. */}
						Hi, I'm Herbie Duah and this is personal <s>website</s> web app.
						{/* <Gif
							url={
								"https://res.cloudinary.com/dwccyjn5e/video/upload/c_scale,w_200/v1567287430/giftguide_11_1_copy_guoyg8.mp4"
							}
						/> */}
						{/* I also enjoy designing and developing websites for
						you. */}
					</Paragraph>
				</ShowIf>
				<ShowIf noAnimation thisValue={"linkedin"} thatValue={whom}>
					<Paragraph>
						Hi LinkedIn connect, I hope networking is going good for you.. In
						the future, I believe there is going to be an app for everyone, so I
						made my own.
					</Paragraph>
				</ShowIf>
				<ShowIf noAnimation thisValue={"reddit"} thatValue={whom}>
					<Paragraph>
						Hi there fellow redditor, hope all is well. In the future, I believe
						there is going to be an app for everyone, so I made my own.
					</Paragraph>
				</ShowIf>
				<ShowIf noAnimation thisValue={"dherbstatwitter"} thatValue={whom}>
					<Paragraph>
						You know what's crazy? I am still not tired of MegTheeStallion
						twerking on the timeline.
						<ShowIf noAnimation thisValue={isMobileOnly} thatValue={true}>
							&nbsp; I know she is blessing the lil {mobileModel} you holding
							right now.
						</ShowIf>
						Anyways, here is my web app, it ain't done yet tho.
					</Paragraph>
				</ShowIf>
				<div className='less__container'>
					<Image
						src={picsOfMeHeroImageTwo}
						className='paddingLR'
						alt='a picture of me'
					/>
					<Paragraph>
						I've been designing and developing webite for over five years, I
						have a passion for creating user experiences and a love for
						photography.
					</Paragraph>
					<Paragraph>
						You can follow me on&nbsp;
						<Link href='https://instagram.com/herbieduah'>Instagram</Link>
						,&nbsp;
						<Link href='https://twitter.com/herbieduah'>Twitter</Link>&nbsp;or
						&nbsp;
						<Link href='https://www.linkedin.com/in/herbieduah/'>LinkedIn</Link>
						&nbsp; if you'd like to connect.
					</Paragraph>
				</div>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>
					<ShowIf noAnimation thisValue={"dherbstatwitter"} thatValue={whom}>
						<Paragraph>Guess who built this joint.</Paragraph>
						<Gif url={vneckcrewneck} />
						<Paragraph className=' '>
							That's right me. All me shout out to Drake. I appreciate you for
							checking out the link. Have fun exploring you. Slide in my DMs if
							you find anything strange{" "}
							<Emoji className='emoji' symbol='😉' label='nerd' />
						</Paragraph>
					</ShowIf>
					<ShowIf noAnimation thisValue={"linkedin"} thatValue={whom}>
						<HeadingTwo>First Off</HeadingTwo>
						<Paragraph className=' '>
							I'd like to say thanks. You could have been wishing your coworker
							or some connection you don't really know a happy work anniversary
							but instead you're here, checking out my web app. I really
							appreciate you.
						</Paragraph>
					</ShowIf>
					<ShowIf noAnimation thisValue={"reddit"} thatValue={whom}>
						<HeadingTwo>First Off</HeadingTwo>
						<Paragraph className=' '>
							I'd like to say thanks. You could have been upvoting some reddit
							post but instead you're here, checking out my web app. I really
							appreciate you.
						</Paragraph>
						<Paragraph className=' '>
							Shoutout to r/webdev, r/reactjs/ and r/web_design/. Y'all are
							awesome!
						</Paragraph>
					</ShowIf>
					<Image src={picsOfMeHero} alt='a picture of me smiling' />
					<Paragraph>
						I am a Phoenix based a Web developer/designer with five years of
						experience. I graduated at Northern Arizona University with a degree
						in Applied Computer Science. Somewhere along the way, I fell in love
						with design. I enjoy any opportunity that allows me to use my coding
						and design skills
						<Emoji className='emoji' symbol='🤓' label='nerd' />.
					</Paragraph>
					{/* <HeadingTwo>An app for everyone</HeadingTwo>
					<Paragraph>
						In the future, I believe everyone is going to have their own app. I
						imagine it will be a mixture between the data and features from all
						your social media apps all merged in an app with the help of Machine
						Learning. I envision every user having a different experience with
						your app, just like they do in real life. The idea of everyone
						having their own app was the main inspiration for the look and feel
						of this web app.
					</Paragraph> */}
					<HeadingTwo>Designed and engineered for you</HeadingTwo>
					<Image src={picsOfMeSelfieOlympics} alt='a picture of me smiling' />
					<Paragraph>
						I have a passion for developing and designing user experiences for
						people like you. Even though this portfolio is about me, I want you,
						the user, to choose how you experience it
						<Emoji className='emoji' symbol='🙂' label='smile' />.
					</Paragraph>
					<HeadingTwo>This project is in Beta</HeadingTwo>
					<Paragraph>
						I am not quite finished yet but it is almost done.
					</Paragraph>
					{/* <Paragraph>
						I googled "Beta software development" on Google and straight out
						plagiarized because I have to shower and go to work soon. I really
						wanted to share the Beta out this morning. It's Aug 21 at 6:53 AM
						right now. Damn! I still have to steam my dress pants and dress shirt!
						AhhHH!!
					</Paragraph> */}
					{/* <Paragraph>
						Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur
						blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros.
					</Paragraph>
					<Small>
						Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur
						blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac,
						vestibulum at eros.
					</Small>
					<HeadingOne>HerbieDuah.app</HeadingOne>
					<HeadingTwo>HerbieDuah.app let me tell you all about it</HeadingTwo>
					<HeadingThree>
						HerbieDuah.app let me tell you all about it
					</HeadingThree>
					<Image src={testPic} />
					<Figure src={testPic2} height={2222}>
						<Figcaption>Me fat ass getting food</Figcaption>
					</Figure>
					<Gif url={testVideo} /> */}
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default HomePage;
