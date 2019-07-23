/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	Link,
	Header,
	// HeadingThree,
	Image
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

const DiscountTirePage = ({ contentProps }) => {
	// const { whom } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					Currently at Discount Tire as a Front End Developer and a model?
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>
					<Paragraph>
						I am currently working at Discount Tire as a Front End Developer I.
						My job duties consist of developing for and updating content for a
						legacy Intranet System so unfortunately, I don't have any work to
						show.
					</Paragraph>
					<HeadingTwo>Modeling</HeadingTwo>
					<Paragraph>
						I volunteered to be a model for one of their shoots.
					</Paragraph>
					<Image src={tireCheckMatt1480x987} />
					<Image src={showroomCheckMatt1480x987} />
					<Image src={standupTireCheck1480x987} />
					<Image src={dtbrochure1480x1973} />
					<Image src={dtASU1480x2693} />
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default DiscountTirePage;
