/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	HeadingThree,
	Image,
	UL,
	LI,
	// Link,
	ContentCategory,
	// Figure,
	// Figcaption,
	Gif,
	Header,
	// Flex,
	ContentShow
} from "../ContentHelpers";
// import { ShowIf } from "../ComponentHelpers";
// import { Image as CloudImage, Video } from "cloudinary-react";
import Emoji from "a11y-react-emoji";
import { ForSomeone, forYouHelper } from "../maincomponents/ForYou";
// import Modal from "../maincomponents/Modal";
// import cornishPastyPic from "../media/images/picsOfMe/test.jpg";
// import yes from "../media/images/startNow/Yes.jpg";
// import testPicHorizontal from "../media/videos/videosOfme/raveMillyRock_1.mp4";
import vneckcrewneck from "../media/videos/videosOfme/vNeckCrewNeck.mp4";
// import { ScrollDownPortrait } from "../stylecomponents/Base";
// import { thisAppGatsbySmiling, placesicyAlley } from "../MediaVariables";
// import YouTube from "react-youtube";
import {
	// picsOfMeHeroImageTwo,
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
	const { whom, forYou, fullScreen, minimalMode } = contentProps;
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
				<Paragraph less>
					Hi<span className='text-cap'>{forYouHelper(forYou)}</span>, I'm Herbie
					and I love to design and develop for people like you
					<Emoji className='emoji' symbol='😃' label='smiling face' />.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>
					<ForSomeone whom={whom} forYou={forYou} />
					<Image
						cloud
						src={picsOfMeHero}
						className='paddingLR'
						alt='a picture of me smiling'
					/>
					<Paragraph>
						Nowadays, there is an app for everything. In the future, I believe
						there is going to be an app for everyone.
					</Paragraph>

					<Paragraph>
						I imagine it will be a mixture between the data and features from
						all your social media apps all merged in an app with the help of
						Machine Learning. I envision every user having a different
						experience with your app, just like they do in real life.{" "}
					</Paragraph>
					<Paragraph>
						This belief and my passion for crafting user experiences inspired me
						to design and engineer my portfolio into a web app.
					</Paragraph>

					{/* <HeadingTwo>A little bit about me and this web app</HeadingTwo>
					<HeadingThree>Three facts about me</HeadingThree>
					<UL>
						<LI>
							I always try to solve problems with a creative and original
							approach.
						</LI>
						<LI>
							I passionate when it comes to designing and developing User
							Interfaces with excellent User Experience.
						</LI>
						<LI>
							I had not developed a portfolio website since my Web Development
							class five years ago.
						</LI>
					</UL>
					<HeadingThree>The problem I was trying to solve</HeadingThree>
					<Paragraph>
						How do I utilize my five years of web development experience to
						design and develop the most creative and original User Interface
						with excellent User Experience?
					</Paragraph>
					<HeadingThree>The solution</HeadingThree>
					<Paragraph>This portfolio.</Paragraph> */}
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
					{/* <HeadingTwo>Designed and engineered for you</HeadingTwo>
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
					</Paragraph> */}
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
					<ContentCategory
						fullScreen={fullScreen}
						minimalMode={minimalMode}
						category='customize'
					/>
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default HomePage;
