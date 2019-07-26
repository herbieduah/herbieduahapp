/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	HeadingOne,
	HeadingTwo,
	HeadingThree,
	Image,
	Link,
	// Small,
	// Figure,
	// Figcaption,
	// Gif,
	Header
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
import cornishPastyPic from "../media/images/picsOfMe/hd-herbieSmile-1974.jpg";
import testPic from "../media/images/photography-herbieFood-2222.jpg";
import testPic2 from "../media/images/photography-melPhoto-2221.jpg";
// import ReactPlayer from "react-player";

const header = "Contacts";

const ContactsPage = ({ contentProps }) => {
	return (
		<Fragment>
			<ContentShow less>
				{/* <Paragraph>
					Hello, I'm Herbie, a Photographer and Front End Developer with a
					passion for designing and engineering user experiences for you.
				</Paragraph> */}
				<div className='flex-container'>
					<Paragraph>
						<Link href='mailto:herbduah@gmail.com'>herbduah@gmail.com</Link>
					</Paragraph>
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<HeadingTwo>Email</HeadingTwo>
				<Paragraph>
					You can email at{" "}
					<Link href='mailto:herbduah@gmail.com'>herbduah@gmail.com</Link>
				</Paragraph>
				<HeadingTwo>Social</HeadingTwo>
				<Paragraph>
					You can message me or keep up on this project on any of these
					platforms as well.{" "}
				</Paragraph>
				<Paragraph>
					<Link href='https://instagram.com/herbieduah'>Instagram</Link>&nbsp;
					<Link href='https://twitter.com/herbieduah'>Twitter</Link>&nbsp;
					<Link href='https://www.linkedin.com/in/herbieduah/'>
						LinkedIn
					</Link>{" "}
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default ContactsPage;
