/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	// HeadingThree,
	Image,
	Small,
	// Figure,
	// Figcaption,
	Gif,
	Header,
	// Flex,
	ContentShow
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
import Emoji from "a11y-react-emoji";
import { mobileModel, isMobileOnly } from "react-device-detect";
// import Modal from "../maincomponents/Modal";
import cornishPastyPic from "../media/images/picsOfMe/hd-herbieSmile-1974.jpg";
// import yes from "../media/images/startNow/Yes.jpg";
// import testPicHorizontal from "../media/videos/videosOfme/raveMillyRock_1.mp4";
import vneckcrewneck from "../media/videos/videosOfme/vNeckCrewNeck.mp4";

// import ReactPlayer from "react-player";

const header = "Hi I'm Herbie";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

/* <ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState> */

// const HomePage = ({ contentProps }) => {
const HomePage = ({ contentProps }) => {
	const { whom, isContentPortrait } = contentProps;
	const whereToDrag = isContentPortrait ? `down` : `right`;
	return (
		<Fragment>
			<ContentShow less>
				<ShowIf noAnimation thisValue={"everyone"} thatValue={whom}>
					<Paragraph noReveal>
						{/* Nowadays, there is an app for everything. In the future, I believe
						there is going to be an app for everyone. Hi I'm Herbie, and this is
						my app. */}
						In the future, I believe there is going to be an app for everyone,
						so I made my own.
						{/* I also enjoy designing and developing websites for
						you. */}
					</Paragraph>
				</ShowIf>
				<ShowIf noAnimation thisValue={"linkedin"} thatValue={whom}>
					<Paragraph>
						Yo what's up my LinkedIn connect, I hope networking is going good
						for you.. In the future, I believe there is going to be an app for
						everyone, so I made my own. I also enjoy designing and developing
						websites for you.
					</Paragraph>
				</ShowIf>
				<ShowIf noAnimation thisValue={"reddit"} thatValue={whom}>
					<Paragraph>
						Hi there fellow redditor, hope all is well. In the future, I believe
						there is going to be an app for everyone, so I made my own. I also
						enjoy designing and developing websites for you.
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
				<Small className='c-interact'>
					Drag the slider {whereToDrag} to reveal more.&nbsp;
					<Emoji className='emoji' symbol='🙂' label='smile' />
				</Small>
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
					<Image
						src={cornishPastyPic}
						nolazyload
						width='1480'
						height='1974'
						alt='a picture of me'
					/>
					<Paragraph>
						I am a Phoenix based a Web developer/designer with five years of
						experience. I graduated at Northern Arizona University with a degree
						in Applied Computer Science. Somewhere along the way, I fell in love
						with design. I enjoy any opportunity that allows me to use my coding
						and design skills
						<Emoji className='emoji' symbol='🤓' label='nerd' />.
					</Paragraph>
					<HeadingTwo>An app for everyone</HeadingTwo>
					<Paragraph>
						In the future, I believe everyone is going to have their own app. I
						imagine it will be a mixture between the data and features from all
						your social media apps all merged in an app with the help of Machine
						Learning. I envision every user having a different experience with
						your app, just like they do in real life. The idea of everyone
						having their own app was the main inspiration for the look and feel
						of this web app.
					</Paragraph>
					<HeadingTwo>Designed and engineered for you</HeadingTwo>
					<Paragraph>
						I have a passion for developing and designing user experiences for
						people like you. Even though this portfolio is about me, I want you,
						the user, to choose how you experience it
						<Emoji className='emoji' symbol='🙂' label='smile' />.
					</Paragraph>
					<HeadingTwo>This project is in Beta</HeadingTwo>
					<Paragraph>
						Beta refers to the phase in software development between the alpha
						phase and the release candidate phase. Beta software is generally
						considered "complete" by the developer but still not ready for
						general use due to a lack of testing "in the wild."
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
