/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	Link,
	// HeadingThree,
	// Image,
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

const header = "Ugg";

const UggPage = ({ contentProps }) => {
	// const { whom } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>Working on the UGG team</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<Paragraph>
					I was a UI Developer for Deckers Brands,a footwear designer and
					distributor for two years.
				</Paragraph>
				<HeadingTwo>Interactive Emails</HeadingTwo>
				<Paragraph>
					Email development sucks. Ask any developer who has development emails
					before and they will say the same thing. It usually took 30-40 hrs to
					develop a new template for UGG that works on most email clients.
				</Paragraph>

				<Paragraph>
					I demoed an email framework called MJML to team. Once learned, you can
					build an email template before lunch. It also had some unique features
					like the ability to add an accordion, carousal, or text on an image.
					These features are somewhat easy to develop for web development but
					overlay complex on email on development.
				</Paragraph>

				<Paragraph>
					Using MJML, I coordinated with our design and marketing team to
					develop a couple of UGG emails. Some are now featured
					www.bestemaildesigns and the MJML framework site.
				</Paragraph>
				<HeadingTwo>Landing Pages</HeadingTwo>
				<Paragraph>
					Throughout my time on the <Link href='https://www.ugg.com/'>UGG</Link>
					team, I got the chance to develop some unique landing pages.
				</Paragraph>

				<HeadingTwo>Unsolicited Ugg Homepage Redesign</HeadingTwo>
				<Paragraph>I designed my version of UGG Desktop homepage</Paragraph>

				<HeadingTwo>Trudy Gillenwater</HeadingTwo>
				<Paragraph>
					I got a 35 dollar parking ticket because I forgot to move my vehicle
					after some time. My coworker sarcastically suggested I should make a
					GoFundMe, so I did. The team shared my GoFundMe, and after a couple of
					hours, it was paid for by a secret admirer: Trudy Gillenwater.
				</Paragraph>

				<Paragraph>Oh Trudy.</Paragraph>
			</ContentShow>
		</Fragment>
	);
};

export default UggPage;
