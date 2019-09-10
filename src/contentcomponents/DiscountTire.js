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

const DiscountTirePage = ({ contentProps }) => {
	// const { whom } = contentProps;
	const { fullScreen, techy } = contentProps;
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>
					Currently working at Discount Tire as a Front End Developer and a
					model?
				</Paragraph>
				<div className='less__container'>
					<Figure
						className='paddingLR'
						alt='a mock up of the creation of exhibit page for desktop'
						src={dtCreepySmile}>
						<Figcaption className='c-margin-bottom'>
							Creation of the Exhibit page for desktop
						</Figcaption>
					</Figure>
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<WorkInfo techy={techy} workinfo={workinfo} />
				<Paragraph>
					I am currently working at Discount Tire as a Front End Developer I. My
					job duties consist of developing and designing webpages and updating
					content for a legacy Intranet System so unfortunately, I can't show
					any of my work.
				</Paragraph>
				<HeadingTwo>Modeling</HeadingTwo>
				<Paragraph>
					I volunteered to be a model for one of their shoots.
				</Paragraph>
				<Figure
					alt='Photoshoot of me checking tires with another tire tech'
					src={dtCheckOutTheseTires}>
					<Figcaption className='c-margin-bottom'>
						Confucius say, man who runs behind car will get exhausted, but man
						who runs in front of car will get tired.
					</Figcaption>
				</Figure>
				<Figure
					alt='Photoshoot of me checking tires with another tire tech'
					src={dtLookingDown}>
					<Figcaption className='c-margin-bottom'>
						Did you hear about the man who ran in front of the bus? He got
						tired.
					</Figcaption>
				</Figure>
				<Figure
					alt='Photoshoot of me checking tires with another tire tech'
					src={dtShootMentoringNearMustang}>
					<Figcaption className='c-margin-bottom'>
						Why do you call a pickup truck?
						<br />
						Because ya got a flat tire.
					</Figcaption>
				</Figure>
				<Figure
					alt='Photoshoot of me checking tires with another tire tech'
					src={dtShootWithMustang}>
					<Figcaption className='c-margin-bottom'>
						Why did the bike fall over? Because it was two tired.
					</Figcaption>
				</Figure>
				<Figure
					alt='Photoshoot of me checking tires with another tire tech'
					src={dtTeamworkTools}>
					<Figcaption className='c-margin-bottom'>
						Surely people would consider putting pedals on wheelchairs so that
						they’re arms don’t get tired.
					</Figcaption>
				</Figure>
				<Figure
					alt='Photoshoot of me checking tires with another tire tech'
					src={dtPostedUp}>
					<Figcaption className='c-margin-bottom'>
						When your friend is wheely tired of your tire puns.
					</Figcaption>
				</Figure>
				<Figure
					alt='Photoshoot of me checking tires with another tire tech'
					src={dtReceipt}>
					<Figcaption className='c-margin-bottom'>
						Discount Tire (America's Tire in California) is the largest retailer
						of tires and wheels in the world with 1000+ stores nationwide and I
						am currently on every receipt holder and that's no joke
					</Figcaption>
				</Figure>

				{/* <Image
					alt='I am checking the some tools with another tire check in the showroom'
					width='1480'
					height='987'
					src={showroomCheckMatt1480x987}
				/>
				<Image
					alt='Standing up next to a mustang'
					width='1480'
					height='987'
					src={standupTireCheck1480x987}
				/>
				<Image
					alt='Standing next to ASU Brochure'
					width='1480'
					height='1973'
					src={dtbrochure1480x1973}
				/>
				<Image
					alt='ASU brochure with me on it'
					width='1480'
					height='2693'
					src={dtASU1480x2693}
				/> */}
				<ContentCategory fullScreen={fullScreen} category='work' />
			</ContentShow>
		</Fragment>
	);
};

export default DiscountTirePage;

const workinfo = {
	workDuration,
	workSkills,
	workTools
};
