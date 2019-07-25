/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	Link,
	Image,
	// HeadingThree,
	// Image,
	// Small,
	// Figure,
	Figcaption,
	FiGif,
	Header,
	Figure
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
import trudywanted1480x3203 from "../media/images/ugg/work-trudywanted-3203.jpg";
import trudyGillenwater1480x2618 from "../media/images/ugg/work-trudyGillenwater-2618.jpg";
import trudyGoFundMe1480x3203 from "../media/images/ugg/work-trudyGoFundMe-3205.jpg";
import trudyGoFundMeSadFace1480x3205 from "../media/images/ugg/work-trudyGoFundMeSadFace-3205.jpg";
import trudy13203x1480x3203 from "../media/images/ugg/work-trudy13203.jpg";
import UnsolicitedUggDesktop2000x3203 from "../media/images/ugg/work-UnsolicitedUggDesktop.jpg";
import frikkinPhillipLim from "../media/videos/ugg/frikkinPhillipLim.mp4";
import JeremyScottDesktop_2 from "../media/videos/ugg/JeremyScottDesktop_2.mp4";
import JeremyScottMobile from "../media/videos/ugg/JeremyScottMobile.mp4";
import Philip from "../media/videos/ugg/Philip-Lim-Mobile.mp4";
import shoeuggemail from "../media/videos/ugg/shoeuggemail.mp4";
import slidesemail from "../media/videos/ugg/slidesemail.mp4";
import giftguide from "../media/videos/ugg/giftguide_11_1.mp4";
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
				<div className='container'>
					<Header>{header}</Header>
					<FiGif url={slidesemail}>
						<Figcaption>
							{" "}
							UGG email I developed with an interactive slider.
						</Figcaption>
					</FiGif>
					<Paragraph>
						I was a UI Developer for Deckers Brands,a footwear designer and
						distributor for two years.
					</Paragraph>
					<HeadingTwo>Interactive Emails</HeadingTwo>
					<Paragraph>
						Creating new email templates that work on most email clients usually
						took 30-40 hrs to develop and test. I demoed an email framework
						called MJML to team. Once learned, you could build an email template
						before lunch.
					</Paragraph>
					<Paragraph>
						It also had some unique features like the ability to add an
						accordion, carousal, or text on an image. These features are
						somewhat easy to develop for web development but overlay complex on
						email on development.
					</Paragraph>
					<Paragraph>
						Using MJML, I coordinated with our design and marketing team to
						develop a couple of UGG emails. Some are now featured
						<Link href='https://reallygoodemails.com/search/emails/ugg%20/'>
							reallygoodemails.com
						</Link>{" "}
						and the{" "}
						<Link href='https://mjml.io/templates'> MJML framework</Link> site.
					</Paragraph>
					<FiGif url={shoeuggemail}>
						<Figcaption>
							The product changed colors on hover and lead right to exact the
							product with the color when clicked.
						</Figcaption>
					</FiGif>

					<HeadingTwo>Landing Pages</HeadingTwo>
					<Paragraph>
						Throughout my time on the{" "}
						<Link href='https://www.ugg.com/'>UGG</Link>
						team, I got the chance to develop some unique landing pages.
					</Paragraph>
					<FiGif url={giftguide}>
						<Figcaption>
							UGG Holiday Gift Guide page with sparkles{" "}
							<Emoji symbol='✨' label='sparkles' />
						</Figcaption>
					</FiGif>
					<FiGif url={frikkinPhillipLim}>
						<Figcaption>
							Landing page for fashion designer Phillip Lim with elements fading
							into view on scroll
						</Figcaption>
					</FiGif>
					<FiGif url={Philip}>
						<Figcaption>
							Landing page for fashion designer Phillip Lim on mobile
						</Figcaption>
					</FiGif>
					<FiGif url={JeremyScottDesktop_2}>
						<Figcaption>
							Stylish landing page for fashion designer Jeremy Scott featuring
							Rita Ora and Lil Yatchy
						</Figcaption>
					</FiGif>
					<FiGif url={JeremyScottMobile}>
						<Figcaption>Landing page for Jeremy Scott on mobile</Figcaption>
					</FiGif>

					<HeadingTwo>Unsolicited Ugg Homepage Redesign</HeadingTwo>
					<Paragraph>I designed my version of UGG Desktop homepage</Paragraph>
					<Image src={UnsolicitedUggDesktop2000x3203} />
					<HeadingTwo>Trudy Gillenwater</HeadingTwo>
					<Paragraph>
						I got a 35 dollar parking ticket because I forgot to move my vehicle
						after some time. My coworker sarcastically suggested I should make a
						GoFundMe, so I did. The team shared my GoFundMe, and after a couple
						of hours, it was paid for by a secret admirer: Trudy Gillenwater.
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
						This Trudy prank which was orchestrated by multiple people brought
						joy into our lives for months and will always be remembered.
					</Paragraph>
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default UggPage;
