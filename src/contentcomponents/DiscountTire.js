/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	LessContent,
	// Link,
	Header,
	// HeadingThree,
	Image,
	ContentCategory,
	WorkInfo,
	Figure,
	Figcaption,
	ContentShow,
	ZigZag,
	Link
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
			<LessContent header={header}>
				Currently working at Discount Tire as a Front End Developer and a model?
			</LessContent>
			<div className='less__container paddingLRSm'>
				<Image className='paddingLRSm' src={dtCreepySmile} />
			</div>
		</ContentShow>
		<ContentShow containerLarge more>
			<Header>{header}</Header>
			<WorkInfo workinfo={workinfo} />
			<ZigZag>
				<Paragraph>
					Discount Tire Company is the largest tire and wheel retailer in the
					world. I am currently working there as a Front End Developer.
				</Paragraph>
				<Paragraph>
					My duties consist of developing and designing webpages for a legacy
					Intranet so unfortunately, I can't show any of my work on this web
					app.
				</Paragraph>
				<Paragraph>
					(If you really want to know,{" "}
					<Link href='mailto:herbduah@gmail.com'>contact me</Link>)
				</Paragraph>
			</ZigZag>
			<ZigZag>
				<HeadingTwo>Modeling</HeadingTwo>
				<Paragraph>
					I also work as a model for Discount Tire ( It's an inside joke. I
					volunteered to be a model for one of their shoots).
				</Paragraph>
				<Figure
					alt='A photo of me and another dude dressed as discount tire employees doing a tire check.'
					src={dtCheckOutTheseTires}>
					<Figcaption className='marginBottomLarge'>
						Confucius say, man who runs behind car will get exhausted, but man
						who runs in front of car will get tired.
					</Figcaption>
				</Figure>
				<Figure
					alt='A photo of me and another dude dressed as discount tire employees looking down'
					src={dtLookingDown}>
					<Figcaption className='marginBottomLarge'>
						Did you hear about the man who ran in front of the bus?He got tired.
					</Figcaption>
				</Figure>
				<Figure
					alt='A photo of me and another dude dressed as discount tire employees looking at each other next to a car while squatting'
					src={dtShootMentoringNearMustang}>
					<Figcaption className='marginBottomLarge'>
						Why do you call a pickup truck?
						<br />
						Because ya got a flat tire.
					</Figcaption>
				</Figure>
				<Figure
					alt='A photo of me and another dude dressed as discount tire employees looking at each other next to a car while standing'
					src={dtShootWithMustang}>
					<Figcaption className='marginBottomLarge'>
						Why did the bike fall over? Because it was two tired.
					</Figcaption>
				</Figure>
				<Figure
					alt='A photo of me and another dude dressed as discount tire employees  in a shop just laughing it up'
					src={dtTeamworkTools}>
					<Figcaption className='marginBottomLarge'>
						People should consider putting pedals on wheelchairs so that their
						arms don’t get tired.
					</Figcaption>
				</Figure>
				<Figure
					alt='A photo of me and another dude dressed as discount tire employees. The other dude looks disgruntled'
					src={dtPostedUp}>
					<Figcaption className='marginBottomLarge'>
						When your friend is wheely tired of your tire puns.
					</Figcaption>
				</Figure>
				<Figure alt='a discount tire pamphlet' src={dtReceipt}>
					<Figcaption className='marginBottomLarge'>
						Oh yeah I am on every receipt holder for their 1000+ stores
						nationawide so that's neat.
					</Figcaption>
				</Figure>
			</ZigZag>
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
