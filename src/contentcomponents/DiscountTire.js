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
	WorkInfo
	// Small,
	// Figure,
	// Figcaption,
	// Gif,
	// Header
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
// import Modal from "../maincomponents/Modal";
import tireCheckMatt1480x987 from "../media/images/discountTire/work-herbieDTShoot3-987.jpg";
import showroomCheckMatt1480x987 from "../media/images/discountTire/work-herbieDTShoot2-987.jpg";
import standupTireCheck1480x987 from "../media/images/discountTire/work-herbieDTSHoot-987.jpg";
import dtbrochure1480x1973 from "../media/images/discountTire/work-herbieDTReceipt-1973.jpg";
import dtASU1480x2693 from "../media/images/discountTire/work-herbieDTPoster-2693.jpg";

const header = "Discount Tire";
const workDuration = "March 2018 - Present";
const workSkills = "UX Design, HTML5, CSS, Javascript, PHP, SQL, Prototyping";
const workTools = "CSS, HTML5, Javascript , PHP, Prototyping, SQL, UX Design ";

const DiscountTirePage = ({ contentProps }) => {
	// const { whom } = contentProps;
	const { fullScreen, techy } = contentProps;
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					Currently at Discount Tire as a Front End Developer and a model?
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<WorkInfo techy={techy} workinfo={workinfo} />
				<Paragraph>
					I am currently working at Discount Tire as a Front End Developer I. My
					job duties consist of developing for and updating content for a legacy
					Intranet System so unfortunately, I don't have any work to show.
				</Paragraph>
				<HeadingTwo>Modeling</HeadingTwo>
				<Paragraph>
					I volunteered to be a model for one of their shoots.
				</Paragraph>
				<Image
					alt='Photoshoot of me checking tires with another tire check'
					width='1480'
					height='987'
					src={tireCheckMatt1480x987}
				/>
				<Image
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
				/>
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
