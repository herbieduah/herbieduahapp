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

const UGGPage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<LessContent header={header}>
					I worked on the<span className='all-caps'>Ugg</span>brand team during
					my time at Deckers Brands.
				</LessContent>
				<div className='less__container'>
					<Image
						mockup
						className='paddingLRSm'
						url={uggslidesemail}
						src={uggUnsolicitedUggDesktop}
						alt='A mock up of the UGG Homepage desktop'
					/>
				</div>
			</ContentShow>
			<ContentShow containerLarge more>
				<ZigZag>
					<Header>{header}</Header>
				</ZigZag>
				<WorkInfo workinfo={workinfo} />

				<ZigZag>
					<Paragraph>
						I was a User Interface Developer for the{" "}
						<span className='all-caps'>Ugg</span> Brand team.
					</Paragraph>
					<FiGif className='paddingLRSm' url={uggslidesemail}>
						<Figcaption>
							{" "}
							<span className='all-caps'>Ugg</span> email I developed with an
							interactive slider.
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
						develop a couple <span className='all-caps'>Ugg</span> emails. Some
						are now featured&nbsp;
						<Link href='https://reallygoodemails.com/search/emails/ugg%20/'>
							reallygoodemails.com
						</Link>{" "}
						and the{" "}
						<Link href='https://mjml.io/templates'> MJML framework</Link> site.
					</Paragraph>
					<FiGif className='paddingLRSm' url={uggslidesemail}>
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
						<Link href='https://www.ugg.com/'>
							<span className='all-caps'>Ugg</span>
						</Link>{" "}
						team, I got the chance to develop some unique landing pages.
					</Paragraph>

					<HeadingThree>
						<span className='all-caps'>Ugg</span> Holiday Gift Guide
					</HeadingThree>
					<FiGif className='paddingLRSm' url={ugggiftguide}>
						<Figcaption>
							<span className='all-caps'>Ugg</span> Holiday Gift Guide page with
							sparkles <Emoji className='emoji' symbol='✨' label='sparkles' />
						</Figcaption>
					</FiGif>
					<HeadingThree>
						<span className='all-caps'>Ugg</span> X Phillip Lim
					</HeadingThree>
					<FiGif className='paddingLRSm' url={uggPhillipLim}>
						<Figcaption>
							Landing page for fashion designer Phillip Lim with elements fading
							into view on scroll
						</Figcaption>
					</FiGif>
					{/* <FiGif  className="paddingLRSm" url={Philip}>
					<Figcaption>
						Landing page for fashion designer Phillip Lim on mobile
					</Figcaption>
				</FiGif> */}
					<HeadingThree>
						<span className='all-caps'>Ugg</span> X Jeremy Scott
					</HeadingThree>
					<FiGif className='paddingLRSm' url={uggJeremyScottDesktop}>
						<Figcaption>
							Stylish landing page for fashion designer Jeremy Scott featuring
							Rita Ora and Lil Yatchy
						</Figcaption>
					</FiGif>
					{/* <FiGif  className="paddingLRSm" url={JeremyScottMobile}>
					<Figcaption>Landing page for Jeremy Scott on mobile</Figcaption>
				</FiGif> */}
				</ZigZag>
				<ZigZag>
					<HeadingTwo>
						<span className='all-caps'>Ugg</span> Homepage Redesign
						(Unsolicited)
					</HeadingTwo>
					<Paragraph>
						I designed my version of <span className='all-caps'>Ugg</span>{" "}
						homepage
					</Paragraph>
					<Figure
						mockup
						src={uggUnsolicitedUggDesktop}
						alt='A mock up of the UGG Homepage desktop'
						className='paddingLRSm'>
						<Figcaption>
							Desktop version of the <span className='all-caps'>Ugg</span>{" "}
							homepage
						</Figcaption>
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

export default UGGPage;

const workinfo = {
	workDuration,
	workSkills,
	workTools
};
