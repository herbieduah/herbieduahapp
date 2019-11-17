/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	Link,
	Image,
	// Image,
	// HeadingThree,
	// Image,
	// Small,
	// Figure,
	ContentCategory,
	WorkInfo,
	Figcaption,
	FiGif,
	LessContent,
	Header,
	Figure,
	ContentShow,
	HeadingThree,
	ZigZag
} from "../ContentHelpers";
import Emoji from "a11y-react-emoji";

import { uggUnsolicitedUggDesktop } from "../MediaVariables";

import {
	ugggiftguide,
	uggPhillipLim,
	uggJeremyScottDesktop,
	uggslidesemail
} from "../VideoVariables";
const header = "Ugg";
const workDuration = "August 2016 - March 2018";
const workSkills = "HTML5, CSS, Javascript, Prototyping, UX Design";
const workTools = "Atom, Adobe Creative Suite, BitBucket, Visual Studio Code";

const UggPage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<LessContent header={header}>
					I worked on the Ugg brand team during my time at Deckers Brands.
				</LessContent>
				<div className='less__container'>
					<Image
						mockup
						src={uggUnsolicitedUggDesktop}
						alt='A mock up of the UGG Homepage desktop'
					/>
				</div>
			</ContentShow>
			<ContentShow containerLarge more>
				<Header>{header}</Header>
				<WorkInfo workinfo={workinfo} />

				<ZigZag>
					<Paragraph>
						I was a User Interface Developer for the Ugg Brand Team for two
						years.
					</Paragraph>
					<FiGif url={uggslidesemail}>
						<Figcaption>
							{" "}
							Ugg email I developed with an interactive slider.
						</Figcaption>
					</FiGif>
				</ZigZag>
				<ZigZag>
					<HeadingTwo>Interactive Emails</HeadingTwo>
					<Paragraph>
						Creating new email templates that work on most email clients usually
						took 30-40 hrs to develop and test. I demoed an email framework
						called MJML to team. Once learned, you could build an email template
						before lunch.
					</Paragraph>
					{/* <Paragraph>
						It also had some unique features like the ability to add an
						accordion, carousal, or text on an image. These features are
						somewhat easy to develop for web development but overly complex on
						email on development.
					</Paragraph> */}
					<Paragraph>
						Using MJML, I coordinated with our design and marketing team to
						develop a couple of UGG emails. Some are now featured&nbsp;
						<Link href='https://reallygoodemails.com/search/emails/ugg%20/'>
							reallygoodemails.com
						</Link>{" "}
						and the{" "}
						<Link href='https://mjml.io/templates'> MJML framework</Link> site.
					</Paragraph>
					<FiGif url={uggslidesemail}>
						<Figcaption>
							The product changed colors on hover and lead right to exact the
							product with the color when clicked.
						</Figcaption>
					</FiGif>
				</ZigZag>
				<ZigZag>
					<HeadingTwo>Landing Pages</HeadingTwo>
					<Paragraph>
						Throughout my time on the{" "}
						<Link href='https://www.ugg.com/'>UGG</Link> team, I got the chance
						to develop some unique landing pages.
					</Paragraph>

					<HeadingThree>UGG Holiday Gift Guide</HeadingThree>
					<FiGif url={ugggiftguide}>
						<Figcaption>
							UGG Holiday Gift Guide page with sparkles{" "}
							<Emoji className='emoji' symbol='✨' label='sparkles' />
						</Figcaption>
					</FiGif>
					<HeadingThree>Ugg X Phillip Lim</HeadingThree>
					<FiGif url={uggPhillipLim}>
						<Figcaption>
							Landing page for fashion designer Phillip Lim with elements fading
							into view on scroll
						</Figcaption>
					</FiGif>
					{/* <FiGif url={Philip}>
					<Figcaption>
						Landing page for fashion designer Phillip Lim on mobile
					</Figcaption>
				</FiGif> */}
					<HeadingThree>Ugg X Jeremy Scott</HeadingThree>
					<FiGif url={uggJeremyScottDesktop}>
						<Figcaption>
							Stylish landing page for fashion designer Jeremy Scott featuring
							Rita Ora and Lil Yatchy
						</Figcaption>
					</FiGif>
					{/* <FiGif url={JeremyScottMobile}>
					<Figcaption>Landing page for Jeremy Scott on mobile</Figcaption>
				</FiGif> */}
				</ZigZag>
				<ZigZag>
					<HeadingTwo>Ugg Homepage Redesign (Unsolicited)</HeadingTwo>
					<Paragraph>I designed my version of Ugg homepage</Paragraph>
					<Figure
						mockup
						src={uggUnsolicitedUggDesktop}
						alt='A mock up of the UGG Homepage desktop'
						width='2000'
						height='3203'>
						<Figcaption>Desktop version of the Ugg homepage</Figcaption>
					</Figure>
				</ZigZag>
				{/* <HeadingTwo>Trudy Gillenwater</HeadingTwo>
				<Paragraph>
					I got a 35 dollar parking ticket because I forgot to move my vehicle
					after some time. My coworker sarcastically suggested I should make a
					GoFundMe, so I did. The team shared my GoFundMe, and after a couple of
					hours, it was paid for by a secret admirer: Trudy Gillenwater.
				</Paragraph>
				<Figure src={trudyGoFundMeSadFace1480x3205}>
					<Figcaption>
						Look at that sad face, how could you not donate
					</Figcaption>
				</Figure>
				<Figure src={trudyGoFundMe1480x3203}>
					<Figcaption>My secret admirer</Figcaption>
				</Figure>
				<Figure src={trudyGillenwater1480x2618}>
					<Figcaption>Looked up Trudy on facebook</Figcaption>
				</Figure>
				<Figure src={trudy13203x1480x3203}>
					<Figcaption>Trudy left this at my desk</Figcaption>
				</Figure>
				<Figure src={trudywanted1480x3203}>
					<Figcaption>A random Wanted poster popped up.</Figcaption>
				</Figure>
				<Paragraph>
					I even received an email from trudygbooty@gmail.com
				</Paragraph>
				<Paragraph>
					This Trudy prank which was orchestrated by multiple people brought joy
					into our lives for months and will always be remembered.
				</Paragraph> */}
				<ContentCategory category='work' />
			</ContentShow>
		</Fragment>
	);
};

export default UggPage;

const workinfo = {
	workDuration,
	workSkills,
	workTools
};
