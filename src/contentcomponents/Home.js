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
	Header,
	Flex,
	ContentShow
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
import cornishPastyPic from "../media/images/picsOfMe/hd-herbieSmile-1974.jpg";
import yes from "../media/images/startNow/Yes.jpg";
import testPicHorizontal from "../media/videos/videosOfme/raveMillyRock_1.mp4";
import testVideoHorizontal from "../media/videos/videosOfme/dadDance_1.mp4";

// import ReactPlayer from "react-player";

const header = "Hello";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

/* <ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState> */

// const HomePage = ({ contentProps }) => {
const HomePage = ({ contentProps }) => {
	const { whom } = contentProps;
	return (
		<Fragment>
			<ContentShow less>
				<ShowIf noAnimation thisValue={"everyone"} thatValue={whom}>
					<Paragraph>
						Nowadays, there is an app for everything. In the future, I believe
						there is going to be an app for everyone. This belief and my passion
						for crafting user experiences inspired me to design and engineer
						this web app.
					</Paragraph>
					<Small className='c-interact'>
						Interact with the slider to reveal more.&nbsp;
						<Emoji className='emoji' symbol='🙂' label='smile' />
					</Small>
				</ShowIf>
				<ShowIf noAnimation thisValue={"recruiter"} thatValue={whom}>
					<Paragraph>
						Hi there! I appreciate the LinkedIn message, I really do! I've spent
						the last few months designing and engineering this award-worthy
						porfolio in hopes of landing a top UX Engineer position or any top
						position that let's me utilize my design and coding skillz. Please
						feel free to take a look around.&nbsp;
						<Emoji className='emoji' symbol='😉' label='wink' />
						).
					</Paragraph>
				</ShowIf>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>Hi I'm Herbie</Header>
					<ShowIf noAnimation thisValue={"recruiter"} thatValue={whom}>
						<Paragraph>
							On average, I receive about 5 LinkedIn InMessage messages a week.
							I've usually being ignoring most of them but I recently heard
							there is a cost to you guys for un-answered messages and I feel
							terribly sorry about that. I customized part of my porfolio to
							give you a better understanding of my skills or what I want.
						</Paragraph>
						<Image src={yes} className='container' />
						<Paragraph className=' '>
							Granted, it is still under construction and I will be making
							frequent updates. Hope you're having a great day who ever you are
							and good luck on the employee hunt!
						</Paragraph>
					</ShowIf>
					<Image src={cornishPastyPic} />
					<Paragraph>
						I am Phoenix based a Web developer/designer with five years of
						experience. I graduated at Northern Arizona University with a degree
						in Applied Computer Science. Somewhere along the way, I fell in love
						with design. I enjoy any opportunity that allows me to use my coding
						AND design skills
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
