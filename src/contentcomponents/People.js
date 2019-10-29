/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	Image,
	Header,
	ContentShow,
	ContentCategory
} from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";
// import photographyTesfayFamilyKiss1480x2220 from "../media/images/people/photography-photographyTesfayFamilyKiss2-2220.jpg";
// import abenaNightTime1480x2221 from "../media/images/people/photography-abenaNightTime-2221.jpg";
// import ashleyTaylor1480x2221 from "../media/images/people/photography-ashleyTaylor-2222.jpg";
// import connorGrad1480x2221 from "../media/images/people/photography-connorGrad-2221.jpg";
// import cristian1480x2220 from "../media/images/people/photography-cristian-2220.jpg";
// import david1480x2220 from "../media/images/people/photography-david-2220.jpg";
// import dyesaColors1480x2221 from "../media/images/people/photography-dyesaColors-2221.jpg";
// import emmaModel1480x2221 from "../media/images/people/photography-emmaModel-2221.jpg";
// import fashionShow1480x2221 from "../media/images/people/photography-fashionShow-2221.jpg";
// import herbieNatasha1480x2221 from "../media/images/people/photography-herbieNatasha-2221.jpg";
// import jesseForte1480x2219 from "../media/images/people/photography-jesseForte-2219.jpg";
// import oforis1480x2221 from "../media/images/people/photography-oforis-2221.jpg";
// import nana1480x2220 from "../media/images/people/nana.jpg";
// import ceiphers1480x2220 from "../media/images/people/ceiphers.jpg";
// import grindingWie1480x2220 from "../media/images/people/grindingWie.jpg";
// import gweg1480x987 from "../media/images/people/gweg.jpg";
// import halle1480x2220 from "../media/images/people/halle.jpg";
// import johnnyGrad1480x2220 from "../media/images/people/johnnyGrad.jpg";
// import meliPoet1480x2220 from "../media/images/people/meliPoet.jpg";
// import melphotography1480x2220 from "../media/images/people/melphotography.jpg";
import {
	peopleNatasha,
	// peopleMelphotography,
	peopleAbena,
	peopleGweg,
	peopleTheGRand,
	peopleNana,
	peopleTesfayFamily,
	peopleMelvinBenz,
	peopleMelvin,
	peopleMeliPoet,
	peopleJohnnyGrad,
	peopleJesseForte,
	peopleHalle,
	peopleGrindingWie,
	peopleGoldenFace,
	peopleFashionShow,
	peopleEmma,
	peopleDyesa,
	peopleDavid,
	peopleCristian,
	peopleconnorGrad,
	peopleCeiphers,
	peopleAshleyTaylor
} from "../MediaVariables";
const header = "People";

const PeoplePage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>I take pictures of people.</Paragraph>
				{/* <div className='less__container paddingLRSm'>
					<Image src={peopleCeiphers} />
					<Image src={peopleDyesa} />
					<Image src={peopleJohnnyGrad} />
				</div> */}
			</ContentShow>
			<ContentShow containerLarge more>
				<Header className='container'>{header}</Header>
				<Paragraph className='container' center>
					Here are some of my favorite photos I've taken of people.
				</Paragraph>
				<ul className='c-photos'>
					<li>
						<Image src={peopleAshleyTaylor} />
					</li>
					<li>
						<Image src={peopleGweg} />
					</li>
					<li>
						<Image src={peopleMelvinBenz} />
					</li>
					<li>
						<Image src={peopleAbena} />
					</li>
					<li>
						<Image src={peopleDavid} />
					</li>
					<li>
						<Image src={peopleTheGRand} />
					</li>
					<li>
						<Image src={peopleNana} />
					</li>
					<li>
						<Image src={peopleTesfayFamily} />
					</li>
					<li>
						<Image src={peopleMelvin} />
					</li>
					<li>
						<Image src={peopleMeliPoet} />
					</li>
					<li>
						<Image src={peopleJohnnyGrad} />
					</li>
					<li>
						<Image src={peopleJesseForte} />
					</li>
					<li>
						<Image src={peopleHalle} />
					</li>
					<li>
						<Image src={peopleGrindingWie} />
					</li>
					<li>
						<Image src={peopleFashionShow} />
					</li>
					<li>
						<Image src={peopleEmma} />
					</li>
					<li>
						<Image src={peopleDyesa} />
					</li>
					<li>
						<Image src={peopleCristian} />
					</li>
					<li>
						<Image src={peopleconnorGrad} />
					</li>
					<li>
						<Image src={peopleCeiphers} />
					</li>
					<li>
						<Image src={peopleNatasha} />
					</li>
					<li>
						<Image src={peopleGoldenFace} />
					</li>
				</ul>
				<ContentCategory category='photography' className='container' />
			</ContentShow>
		</Fragment>
	);
};
export default PeoplePage;
