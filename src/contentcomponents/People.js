/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import { Paragraph, HeadingTwo, Image, Header } from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";
import photographyTesfayFamilyKiss1480x2220 from "../media/images/people/photography-photographyTesfayFamilyKiss2-2220.jpg";
import abenaNightTime1480x2221 from "../media/images/people/photography-abenaNightTime-2221.jpg";
import ashleyTaylor1480x2221 from "../media/images/people/photography-ashleyTaylor-2222.jpg";
import connorGrad1480x2221 from "../media/images/people/photography-connorGrad-2221.jpg";
import cristian1480x2220 from "../media/images/people/photography-cristian-2220.jpg";
import david1480x2220 from "../media/images/people/photography-david-2220.jpg";
import dyesaColors1480x2221 from "../media/images/people/photography-dyesaColors-2221.jpg";
import emmaBW1480x2221 from "../media/images/people/photography-emmaBW-1850.jpg";
import emmaModel1480x2221 from "../media/images/people/photography-emmaModel-2221.jpg";
import fashionShow1480x2221 from "../media/images/people/photography-fashionShow-2221.jpg";
import herbieNatasha1480x2221 from "../media/images/people/photography-herbieNatasha-2221.jpg";
import jesseForte1480x2219 from "../media/images/people/photography-jesseForte-2219.jpg";
import oforis1480x2221 from "../media/images/people/photography-oforis-2221.jpg";
const header = "People";

const PeoplePage = ({ contentProps }) => {
	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>I take pictures of people</Paragraph>
			</ContentShow>
			<ContentShow more>
				<div className='container'>
					<Header>{header}</Header>

					<Image src={abenaNightTime1480x2221} />
					<Image src={ashleyTaylor1480x2221} />
					<Image src={connorGrad1480x2221} />
					<Image src={cristian1480x2220} />
					<Image src={david1480x2220} />
					<Image src={dyesaColors1480x2221} />
					<Image src={emmaBW1480x2221} />
					<Image src={emmaModel1480x2221} />
					<Image src={fashionShow1480x2221} />
					<Image src={herbieNatasha1480x2221} />
					<Image src={jesseForte1480x2219} />
					<Image src={photographyTesfayFamilyKiss1480x2220} />
					<Image src={oforis1480x2221} />
				</div>
			</ContentShow>
		</Fragment>
	);
};

export default PeoplePage;