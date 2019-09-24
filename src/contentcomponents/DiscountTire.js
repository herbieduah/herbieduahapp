/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	// Link,
	Header,
	// HeadingThree,
	Image,
	ContentCategory,
	WorkInfo,
	Figure,
	Figcaption,
	ContentShow
	// Small,
	// Figure,
	// Figcaption,
	// Gif,
	// Header
} from "../ContentHelpers";
// import Modal from "../maincomponents/Modal";
// import tireCheckMatt1480x987 from "../media/images/discountTire/work-herbieDTShoot3-987.jpg";
// import showroomCheckMatt1480x987 from "../media/images/discountTire/work-herbieDTShoot2-987.jpg";
// import standupTireCheck1480x987 from "../media/images/discountTire/work-herbieDTSHoot-987.jpg";
// import dtbrochure1480x1973 from "../media/images/discountTire/work-herbieDTReceipt-1973.jpg";
// import dtASU1480x2693 from "../media/images/discountTire/work-herbieDTPoster-2693.jpg";
import {
	dtTeamworkTools,
	dtShootWithMustang,
	dtShootMentoringNearMustang,
	dtReceipt,
	// dtShootLaughing,
	// dtposter,
	dtPostedUp,
	dtLookingDown,
	dtCreepySmile,
	dtCheckOutTheseTires
} from "../MediaVariables";

const header = "Discount Tire";
const workDuration = "March 2018 - Present";
const workSkills = "CSS, HTML5, Javascript , PHP, Prototyping, SQL, UX Design";
const workTools =
	"Adobe Creative Cloud, Microsoft SQL Server, Photoshop , Visual Studio Code";

const DiscountTirePage = () => (
	<Fragment>
		<ContentShow less>
			<Header less>{header}</Header>
			<Paragraph less>
				Currently working at Discount Tire as a Front End Developer and a model?
			</Paragraph>
			<div className='less__container paddingLRSm'>
				<Image className='paddingLRSm' src={dtCreepySmile} />
			</div>
		</ContentShow>
		<ContentShow more>
			<Header>{header}</Header>
			<WorkInfo workinfo={workinfo} />
			<Paragraph>
				I am currently working at Discount Tire as a Front End Developer. My
				uties consist of developing and designing webpages and updating co for a
				legacy Intranet System so unfortunately, I can't show any of my work on
				here.
			</Paragraph>
			<HeadingTwo>Modeling</HeadingTwo>
			<Paragraph>
				I volunteered to be a model for one of their shoots.
			</Paragraph>
			<Figure src={dtCheckOutTheseTires}>
				<Figcaption className='marginBottomLarge'>
					Confucius say, man who runs behind car will get exhausted, but man who
					runs in front of car will get tired.
				</Figcaption>
			</Figure>
			<Figure src={dtLookingDown}>
				<Figcaption className='marginBottomLarge'>
					Did you hear about the man who ran in front of the bus?He got tired.
				</Figcaption>
			</Figure>
			<Figure src={dtShootMentoringNearMustang}>
				<Figcaption className='marginBottomLarge'>
					Why do you call a pickup truck?
					<br />
					Because ya got a flat tire.
				</Figcaption>
			</Figure>
			<Figure src={dtShootWithMustang}>
				<Figcaption className='marginBottomLarge'>
					Why did the bike fall over?Because it was two tired.
				</Figcaption>
			</Figure>
			<Figure src={dtTeamworkTools}>
				<Figcaption className='marginBottomLarge'>
					People would consider putting pedals on wheelchairs so that their arms
					don’t get tired.
				</Figcaption>
			</Figure>
			<Figure src={dtPostedUp}>
				<Figcaption className='marginBottomLarge'>
					When your friend is wheely tired of your tire puns.
				</Figcaption>
			</Figure>
			<Figure src={dtReceipt}>
				<Figcaption className='marginBottomLarge'>
					Discount Tire (America's Tire in California) is the largest retailer
					ires and wheels in the world with 1000+ stores nationwide and I am
					currently on every receipt holder and that's no joke
				</Figcaption>
			</Figure>
			<ContentCategory category='work' />
		</ContentShow>
	</Fragment>
);

export default DiscountTirePage;

const workinfo = {
	workDuration,
	workSkills,
	workTools
};
