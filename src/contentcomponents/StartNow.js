/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
	Paragraph,
	// HeadingOne,
	HeadingTwo,
	FiGif,
	Link,
	Header,
	Image,
	Figure,
	Figcaption,
	ContentCategory,
	ContentShow,
	WorkInfo
} from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
import StandOutFromTheRest2000x3000 from "../media/images/startNow/StandOutFromTheRest.jpg";
import NAUConstruction2000x1500 from "../media/images/startNow/NAUConstruction.jpg";
import KnowTheGame2000x1500 from "../media/images/startNow/KnowTheGame.jpg";
import herbieCareerWidePoster1480x1500 from "../media/images/startNow/herbieCareerWidePoster-317.jpg";
import ConstructAPlan13X19x1952x2874 from "../media/images/startNow/ConstructAPlan13X19.jpg";
import ConstructAPlan2000x1500 from "../media/images/startNow/ConstructAPlan-Horizontal.jpg";
// import CareerWidePosterPhotoshop1480x1973 from "../media/images/startNow/CareerWidePosterPhotoshop-208.jpg";
// import CareerPoster1480x950 from "../media/images/startNow/CareerPoster-950.jpg";
import ACMClubPhoto2000x2667 from "../media/images/startNow/ACMClubPhoto.jpg";
import Yes1480x2220 from "../media/images/startNow/Yes.jpg";
import FullPage1480x1824 from "../media/images/startNow/FullPage.jpg";
import FullSizeStudents1480x1774 from "../media/images/startNow/FullSizeStudents.jpg";
import idkwhatIamDoing1480x2220 from "../media/images/startNow/idkwhatIamDoing.jpg";
import smileStock1480x2220 from "../media/images/startNow/smileStock.jpg";
import howtowritecoverletter_1 from "../media/videos/startnow/howtowritecoverletter_1.mp4";
import resumeemail from "../media/videos/startnow/resumeemail.mp4";

const header = "Start Now";
const workDuration = "May 2014 - August 2016";
const workSkills = "Graphic Design, Print Design and Digital Art";
const workTools = "Adobe Creative Suite and VideoScribe";

const StartNowPage = ({ contentProps }) => {
	const { techy, fullScreen } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Paragraph>
					I worked directly with the Career Development Director to create a
					series of posters, digital art, documents, videos, and other mediums
					geared towards helping students start their career.
				</Paragraph>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<WorkInfo techy={techy} workinfo={workinfo} />
				<Image
					className='padding-left-right'
					src={ConstructAPlan13X19x1952x2874}
				/>
				<Paragraph>
					My first job was working directly with the Career Development Director
					for the Northern Arizona University (deep breath) College of
					Engineering and Natural Sciences (CEFNS).
				</Paragraph>
				<Paragraph>
					Our main goal was to help CEFNS students start their career.
				</Paragraph>
				<HeadingTwo>Start Now Campaign</HeadingTwo>
				<Paragraph>
					The Start Now campaign was a series of posters, digital art,
					documents, videos and other mediums geared toward that primary goal.
				</Paragraph>
				<Paragraph>
					We chose to go with a 1920s Vintage Travel Posters for the art
					direction because starting a career is like a journey.
				</Paragraph>
				<HeadingTwo>Start Now Posters</HeadingTwo>
				<Figure className='paddingLRMed' src={NAUConstruction2000x1500}>
					<Figcaption>
						Construction of the Science and Health Building.
					</Figcaption>
				</Figure>
				<Figure src={ConstructAPlan2000x1500}>
					<Figcaption>
						"Construct A Plan" poster with the picture of construction of the
						Science and Health Building.
					</Figcaption>
				</Figure>
				<Figure className='paddingLRMed' src={ACMClubPhoto2000x2667}>
					<Figcaption>
						An arcade machine created by Association for Computing Machinery
						(ACM) club.
					</Figcaption>
				</Figure>
				<Figure className='padding-left-right' src={KnowTheGame2000x1500}>
					<Figcaption>
						"Know The Game" poster with the arcade machine.
					</Figcaption>
				</Figure>
				<Figure
					className='padding-left-right'
					src={StandOutFromTheRest2000x3000}>
					<Figcaption>
						NAU is filled with a lot of trees... you get the point.
					</Figcaption>
				</Figure>
				<HeadingTwo>Web Design</HeadingTwo>
				<Paragraph>
					We wanted to drive everyone to our page on the Northern Arizona
					University (NAU) website through our posters. The problem was at the
					time, the Content Management System (CMS) was very archaic and
					extremely limited in terms of customization. Most of our target
					audience needed to be able to access the content on mobile, but the
					CMS was not mobile-friendly.
				</Paragraph>
				<Paragraph>I had to get creative.</Paragraph>
				<Figure className='paddingLR' src={FullPage1480x1824}>
					<Figcaption>
						(Screenshot captured from{" "}
						<Link href='www.web.archive.org/'>web.archive.org</Link>) I created
						big "buttons" so users can easily navigate on mobile.{" "}
					</Figcaption>
				</Figure>
				<Figure className='paddingLR' src={FullSizeStudents1480x1774}>
					<Figcaption>
						(Screenshot captured from{" "}
						<Link href='www.web.archive.org/'>web.archive.org</Link>) The CMS
						didn't allow PNG image files so I had to create some of these
						"buttons" with background color of the page.
					</Figcaption>
				</Figure>
				<HeadingTwo>
					How To Write an Excellent Resume and Cover Letter.
				</HeadingTwo>
				<Paragraph>
					I utilized a software called VideoScribe to create two very
					informative videos on how to write a resume and cover letter.
				</Paragraph>
				<FiGif url={resumeemail}>
					<Figcaption>
						<Link href='https://www.youtube.com/watch?v=z8i6kHg0YoY'>
							How to Write an Excellent Resume
						</Link>{" "}
					</Figcaption>
				</FiGif>
				<FiGif url={howtowritecoverletter_1}>
					<Figcaption>
						<Link href='https://www.youtube.com/watch?v=I3WQa1AN_V0'>
							How to Write an Excellent Cover Letter
						</Link>{" "}
					</Figcaption>
				</FiGif>
				<HeadingTwo>Modeling for Career Development</HeadingTwo>
				<Paragraph>
					I volunteered to be in a photo shoot, and I pretty much became the
					face of Career Development at NAU for some time.
				</Paragraph>
				<Figure className='padding-left-right' src={smileStock1480x2220}>
					<Figcaption>
						When you laugh at the employers jokes because you want the job
						really bad.
					</Figcaption>
				</Figure>
				<Figure className='padding-left-right' src={Yes1480x2220}>
					<Figcaption>When you get the job.</Figcaption>
				</Figure>

				<Figure className='padding-left-right' src={idkwhatIamDoing1480x2220}>
					<Figcaption>
						When you don't know what you are doing at the job.
					</Figcaption>
				</Figure>

				<Figure src={herbieCareerWidePoster1480x1500}>
					<Figcaption>
						On a Career and Premedical Professions Fair poster.
					</Figcaption>
				</Figure>

				<Figure src={herbieCareerWidePoster1480x1500}>
					<Figcaption>
						I designed the huge banner to hold the posters and the poster on the
						left.
					</Figcaption>
				</Figure>

				<HeadingTwo>In Conclusion</HeadingTwo>
				<Paragraph>
					Overall, I couldn't have asked for a better first job.
				</Paragraph>

				{/* <Figure src={CareerWidePosterPhotoshop1480x1973}>
					<Figcaption>Something</Figcaption>
				</Figure> */}
				<ContentCategory fullScreen={fullScreen} category='customize' />
			</ContentShow>
		</Fragment>
	);
};

export default StartNowPage;

const workinfo = {
	workDuration,
	workSkills,
	workTools
};
