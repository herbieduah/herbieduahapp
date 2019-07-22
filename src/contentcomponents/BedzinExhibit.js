/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	Link,
	Header
	// HeadingThree,
	// Image,
	// Small,
	// Figure,
	// Figcaption,
	// Gif,
	// Header
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
import cornishPastyPic from "../media/images/picsOfMe/hd-herbieSmile-1974.jpg";
import testPic from "../media/images/photography-herbieFood-2222.jpg";
import testPic2 from "../media/images/photography-melPhoto-2221.jpg";
// import ReactPlayer from "react-player";

const header = "Będzin Exhibit";

const BedzinExhibitPage = ({ contentProps }) => {
	// const { whom } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					Revamped a traveling exhibit site for my senior capstone.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>
					For my Computer Science capstone, my group was tasked with revamping
					<Link href='http://bedzinexhibit.org/'>bedzinexhibit.org</Link>. The
					exhibit, "Through the Eyes of Youth: Life and Death in the Będzin
					Ghetto" tells the story of young people in the Jewish ghetto of Będzin
					(Poland) before, during, and after the Holocaust.
				</Paragraph>

				<Paragraph>
					While other capstone projects were more towards engineering, ours had
					a UX design aspect to it, so I volunteered to be the designer.
				</Paragraph>

				<Paragraph>
					It's worth mentioning this was my very first website UX design. Back
					then, I didn't even have the web development skills to code my design.
				</Paragraph>

				<HeadingTwo>Modern Look and Feel</HeadingTwo>
				<Paragraph>
					The main goal of the project was to bring a whole new look and feel to
					the design of the website.
				</Paragraph>

				<HeadingTwo>In Conclusion</HeadingTwo>
				<Paragraph>
					The experience taught me a lot about prototyping, setting up
					requirements, communicating with stakeholders, and working with a
					small team for an extended period to deliver a project.
				</Paragraph>

				<Paragraph>
					Throughout the project, I was enlightened by the story about the
					Będzin Ghetto. If you'd like to learn more about it, you can visit{" "}
					<Link href='http://bedzinexhibit.org/'>bedzinexhibit.org</Link>
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default BedzinExhibitPage;
