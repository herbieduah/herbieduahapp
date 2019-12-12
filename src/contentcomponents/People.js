/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
	Paragraph,
	Image,
	Header,
	ContentShow,
	ContentCategory,
	LessContent,
	ZigZag
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
	peopleAshleyTaylor,
	alessondria
} from "../MediaVariables";
const header = "People";

const PeoplePage = () => {
	return (
		<Fragment>
			<ContentShow less>
				<LessContent header={header}>I take pictures of people.</LessContent>
				{/* <div className='less__container paddingLRSm'>
					<Image alt="photograph of " src={peopleCeiphers} />
					<Image alt="photograph of " src={peopleDyesa} />
					<Image alt="photograph of " src={peopleJohnnyGrad} />
				</div> */}
			</ContentShow>
			<ContentShow containerLarge more className='c-photos'>
				<ZigZag>
					<Header>{header}</Header>
					<Paragraph className='marginTopMed'>
						Here are some of my favorite photos I've taken of people.
					</Paragraph>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of a girl kneeling in snow'
						src={peopleAshleyTaylor}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of a girl infront fo a poinsettia'
						src={alessondria}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of my friend surrounded by his family while being promoted to Lieutenant'
						src={peopleGweg}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of my friend next to a fence'
						src={peopleMelvinBenz}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='photograph of girl looking up' src={peopleAbena} />
				</ZigZag>
				<ZigZag>
					<Image alt='photograph of kid smiling' src={peopleDavid} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of siblings infront of a gate looking all cool and stuff'
						src={peopleTheGRand}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='photograph of a girl looking up' src={peopleNana} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of a nice happy familyy '
						src={peopleTesfayFamily}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of guy sitting up on a window ledge '
						src={peopleMelvin}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of of girl sitting on a rock'
						src={peopleMeliPoet}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of nice graduation hug'
						src={peopleJohnnyGrad}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of guy leaning next to a Cactus '
						src={peopleJesseForte}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of a girl with a nice big smile'
						src={peopleHalle}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of a man infront of an escalator'
						src={peopleGrindingWie}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of girl at a fashion show'
						src={peopleFashionShow}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='portait of an European girl ' src={peopleEmma} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='portait of a girl within beautiful flowers'
						src={peopleDyesa}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of kid crossing his arms'
						src={peopleCristian}
					/>
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of a guy standing infront of a trea '
						src={peopleconnorGrad}
					/>
				</ZigZag>
				<ZigZag>
					<Image alt='photograph of  a couple' src={peopleCeiphers} />
				</ZigZag>
				<ZigZag>
					<Image
						alt='photograph of girl in walking down a stairs witha  graduation cap'
						src={peopleGoldenFace}
					/>
				</ZigZag>

				<ContentCategory category='photography' className='container' />
			</ContentShow>
		</Fragment>
	);
};
export default PeoplePage;
