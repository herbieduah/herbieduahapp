/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
	ContentShow,
	Paragraph,
	Header,
	HeadingTwo,
	UL,
	LI,
	Link
} from "../ContentHelpers";

const header = "Inspiration";

const InspirationPage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>
					Nowadays,there is an app for everything, in the future, I believe
					there is going to be an app for everyone.
				</Paragraph>
				<div className='less__container'>
					{/* <Paragraph>
						In the future, I believe everyone is going to have their own app. I
						imagine it will be a mixture between the data and features from all
						your social media apps all merged in an app with the help of Machine
						Learning. I envision every user having a different experience with
						your app, just like they do in real life. The idea of everyone
						having their own app was the main inspiration for the look and feel
						of this web app.
					</Paragraph> */}
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>

				<HeadingTwo>What if there was an app for you? Yes you</HeadingTwo>
				<Paragraph>
					An app anyone can download and experience you as a person depending on
					who they are.
				</Paragraph>
				<Paragraph>I'm not talking about social media.</Paragraph>

				<Paragraph>I'm talking about an app that:</Paragraph>
				<UL>
					<LI>
						Makes your first date feel like the 3rd because they downloaded your
						app.
					</LI>
					<LI>Urges employers to hire you without interviewing you.</LI>
					<LI>
						Your best friend can download and see things only they can see.
					</LI>
					<LI>Has your personality.</LI>
				</UL>

				<Paragraph>How would it look and feel like?</Paragraph>
				<Paragraph>What will the background look like?</Paragraph>
				<Paragraph>What kind of animations will it have?</Paragraph>
				<Paragraph>Is your app going to have a theme?</Paragraph>
				<Paragraph>
					What is the interface going to look like? Is it going to be the same
					for everyone?
				</Paragraph>
				<Paragraph>
					How will people experience your app? On their tablets? Consoles? Smart
					home hub? Virtual Reality?
				</Paragraph>
				<Paragraph>What kind of technologies will it have?</Paragraph>

				<Paragraph>
					Cambridge Analytica had 5,000 data points on each American voter. Is
					your app going to have an even more substantial amount of data about
					you being fed into it?
				</Paragraph>

				<Paragraph>
					Netflix uses algorithms to select the cover images for their
					selection, depending on its users. More companies are creating
					algorithm-driven user interfaces, as described in this website. Is
					your app going to have an algorithm-driven designed interface?
				</Paragraph>

				<Paragraph>
					Apple's FaceID can recognize you even in the dark. Is your app going
					to use facial recognition to identify who is experiencing it?
				</Paragraph>

				<Paragraph>
					Windows 10 requires 20gb of space on your hard drive. 5G download
					speed is at least 20gb per second. Is your app going to have the
					capabilities of an operating system?
				</Paragraph>
				<HeadingTwo>In the Future</HeadingTwo>
				<Paragraph>
					In the future, I believe everyone is going to have their own app. I
					imagine it will be a mixture between the data and features from all
					your social media apps all merged in an app with the help of Machine
					Learning. I envision every user having a different experience with
					your app, just like they do in real life.
				</Paragraph>
				<Paragraph>
					The compelling idea of everyone having their own app was the main
					inspiration for the look and feel of this web app.
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default InspirationPage;
