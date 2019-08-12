/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	Link,
	Header,
	Figcaption,
	Figure
	// HeadingThree,
	// Image,
	// Small,
	// Figure,
	// Figcaption,
	// Gif,
	// Header
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";
// ../media/images/bedzin/GlossaryDesktop.jpg
import throughbedzinDesktop1480x3193 from "../media/images/bedzin/throughbedzinDesktop.jpg";
import BedzinCreationofExhibitDesktop1480x2781 from "../media/images/bedzin/BedzinCreationofExhibitDesktop.jpg";
import BedziniPhoneCreationofExhibit1480x9042 from "../media/images/bedzin/BedziniPhoneCreationofExhibit.jpg";
import bedziniPhoneNavNormal1480x2877 from "../media/images/bedzin/bedziniPhoneNavNormal.jpg";
import beziniPhoneExhibit1480x6938 from "../media/images/bedzin/beziniPhoneExhibit.jpg";
import GlossaryDesktop1480x2749 from "../media/images/bedzin/GlossaryDesktop.jpg";

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
					&nbsp;
					<Link href='http://bedzinexhibit.org/'>bedzinexhibit.org</Link>. The
					exhibit, "Through the Eyes of Youth: Life and Death in the Będzin
					Ghetto" tells the story of young people in the Jewish ghetto of Będzin
					(Poland) before, during, and after the Holocaust.
				</Paragraph>

				<Paragraph>
					While other capstone projects were more towards engineering, ours had
					a UX design aspect to it, so I volunteered to be the designer.It's
					worth mentioning this was my very first website UX design. Back then,
					I didn't even have the web development skills to code my design.
				</Paragraph>

				<HeadingTwo>Modern Look and Feel</HeadingTwo>
				<Paragraph className='c-margin-bottom'>
					The main goal of the project was to bring a whole new look and feel to
					the design of the website. Below you'll see some mockups I created for
					the website. It's worth mentioning this was my very first website UX
					design.
				</Paragraph>
				<Figure
					mockup
					className='paddingLR'
					src={BedzinCreationofExhibitDesktop1480x2781}>
					<Figcaption className='c-margin-bottom'>
						Creation of the Exhibit page for desktop
					</Figcaption>
				</Figure>
				<Figure
					mockup
					className='paddingLRMed'
					src={BedziniPhoneCreationofExhibit1480x9042}>
					<Figcaption className='c-margin-bottom'>
						Creation of the Exhibit page for mobile
					</Figcaption>
				</Figure>
				<Figure
					mockup
					className='paddingLR'
					src={throughbedzinDesktop1480x3193}>
					<Figcaption className='c-margin-bottom'>
						Desktop version of the homepage
					</Figcaption>
				</Figure>
				<Figure
					mockup
					className='paddingLRMed'
					src={beziniPhoneExhibit1480x6938}>
					<Figcaption className='c-margin-bottom'>
						Mobile version of the homepage
					</Figcaption>
				</Figure>
				<Figure
					mockup
					className='paddingLRMed'
					src={bedziniPhoneNavNormal1480x2877}>
					<Figcaption className='c-margin-bottom'>Mobile menu</Figcaption>
				</Figure>

				<Figure mockup className='paddingLR' src={GlossaryDesktop1480x2749}>
					<Figcaption className='c-margin-bottom'>
						Glossary page. Desktop version.
					</Figcaption>
				</Figure>

				<HeadingTwo>In Conclusion</HeadingTwo>
				<Paragraph>
					The experience taught me a lot about prototyping, setting up
					requirements, communicating with stakeholders, and working with a
					small team for an extended period to deliver a project.
				</Paragraph>

				<Paragraph>
					Throughout the project, I was enlightened by the story about the
					Będzin Ghetto. If you'd like to learn more about it, you can visit
					&nbsp;<Link href='http://bedzinexhibit.org/'>bedzinexhibit.org</Link>
				</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default BedzinExhibitPage;
