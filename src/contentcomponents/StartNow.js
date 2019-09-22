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
import { ShowIf } from "../ComponentHelpers";
// import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
import {
	startNowNAUConstruction,
	startNowACMClubPhoto,
	startNowCareerPoster,
	startNowYes,
	startNowsmileStock,
	startNowStandOutFromTheRest,
	startNowFullPage,
	startNowFullSizeStudents,
	startNowherbieCareerWidePoster,
	startNowidkwhatIamDoing,
	startNowKnowTheGame,
	startNowConstructAPlan,
	startNowConstructAPlanHorizontal,
	// startNowCareerWidePosterPhotoshop,
	startNowCareerImageWithPeople,
	startNowCareerResourseGuide
} from "../MediaVariables";

// import howtowritecoverletter_1 from "../media/videos/startnow/howtowritecoverletter_1.mp4";
// import resumeemail from "../media/videos/startnow/resumeemail.mp4";
import { startNowcoverLetterGif, startNowresumeEmail } from "../VideoVariables";

const header = "Start Now";
const workDuration = "May 2014 - August 2016";
const workSkills = "Graphic Design, Print Design and Digital Art";
const workTools = "Adobe Creative Suite and VideoScribe";

const StartNowPage = ({ contentProps }) => {
	const { forDev } = contentProps;

	return (
		<Fragment>
			<ContentShow less>
				<Header less>{header}</Header>
				<Paragraph less>
					I helped other students get jobs while I was in college.
				</Paragraph>
				<div className='less__container paddingLRSm'>
					<Image src={startNowCareerImageWithPeople} />
				</div>
			</ContentShow>
			<ContentShow more>
				<Header>{header}</Header>
				<WorkInfo workinfo={workinfo} />
				<Image
					className='paddingLRSm'
					alt='A poster with construct a plan'
					width='1952'
					height='2874'
					src={startNowConstructAPlan}
				/>
				<Paragraph>
					My first job was working directly with the Career Development Director
					for the Northern Arizona University (deep breath) College of
					Engineering and Natural Sciences (CEFNS).
				</Paragraph>
				<Paragraph>
					Our main goal was to help CEFNS students start their career.
				</Paragraph>
				<Figure
					className='paddingLRMed'
					alt='Arcade machine'
					width='2000'
					height='2667'
					src={startNowACMClubPhoto}>
					<Figcaption>
						An arcade machine created by Association for Computing Machinery
						(ACM) club.
					</Figcaption>
				</Figure>
				<Figure
					className='paddingLRSm'
					alt='know the game poster'
					width='2000'
					height='1500'
					src={startNowKnowTheGame}>
					<Figcaption>
						"Know The Game" poster with the arcade machine.
					</Figcaption>
				</Figure>
				<HeadingTwo>Start Now Campaign</HeadingTwo>
				<Paragraph>
					The Start Now campaign was a series of posters, digital art,
					documents, videos and other mediums geared toward that primary goal.
				</Paragraph>
				<Paragraph>
					We chose to go with a 1920s Vintage Travel Posters for the art
					direction because starting a career is like a journey.
				</Paragraph>
				<Figure
					className='paddingLRMed'
					alt=' A photo of the Construction of the Science and Health Building.'
					width='2000'
					height='1500'
					src={startNowNAUConstruction}>
					<Figcaption>
						Construction of the Science and Health Building.
					</Figcaption>
				</Figure>
				<Figure
					alt='Construct a plan poster'
					width='2000'
					height='1500'
					src={startNowConstructAPlanHorizontal}>
					<Figcaption>
						"Construct A Plan" poster with the picture of construction of the
						Science and Health Building.
					</Figcaption>
				</Figure>

				<Figure
					className='paddingLRSm'
					alt='poster with trees on it'
					width='2000'
					height='3000'
					src={startNowStandOutFromTheRest}>
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
				<ShowIf noAnimation thisValue={forDev} thatValue={true}>
					<Paragraph>
						The limitation of the CMS was quite impressive. I tried injecting
						javascript, throwing in the style tag and the wackiest code into it
						and it wouldn't budge. I thought it could be manipulated since it
						was old but no.
					</Paragraph>
				</ShowIf>
				<Paragraph>I had to get creative.</Paragraph>
				<Figure
					className='paddingLRSm'
					alt='photo of the NAU Start Now site'
					width='1480'
					height='1824'
					src={startNowFullPage}>
					<Figcaption>
						(Screenshot captured from{" "}
						<Link href='www.web.archive.org/'>web.archive.org</Link>) I created
						big "buttons" so users can easily navigate on mobile.{" "}
					</Figcaption>
				</Figure>
				<Figure
					className='paddingLRSm'
					alt='photo of the NAU Start Now site start page'
					width='1480'
					height='1774'
					src={startNowFullSizeStudents}>
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
				<FiGif url={startNowresumeEmail}>
					<Figcaption>
						<Link href='https://www.youtube.com/watch?v=z8i6kHg0YoY'>
							How to Write an Excellent Resume
						</Link>{" "}
					</Figcaption>
				</FiGif>
				<FiGif url={startNowcoverLetterGif}>
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
				<Figure
					className='paddingLRSm'
					alt='a picture of me with an outrageous smile'
					width='1480'
					height='2220'
					src={startNowsmileStock}>
					<Figcaption>
						When you laugh at the employers jokes because you want the job
						really bad.
					</Figcaption>
				</Figure>
				<Figure
					className='paddingLRSm'
					alt='A picture of me witha tiger woods yes pose'
					width='1480'
					height='2220'
					src={startNowYes}>
					<Figcaption>When you get the job.</Figcaption>
				</Figure>

				<Figure
					className='paddingLRSm'
					alt='a picture of me being confused'
					width='1480'
					height='2220'
					src={startNowidkwhatIamDoing}>
					<Figcaption>
						When you don't know what you are doing at the job.
					</Figcaption>
				</Figure>

				<Figure
					alt='a picture of me On a Career and Premedical Professions Fair poster.'
					width='1480'
					height='1500'
					src={startNowCareerPoster}>
					<Figcaption>
						On a Career and Premedical Professions Fair poster.
					</Figcaption>
				</Figure>

				<Figure
					alt='a picture of a wide panner'
					width='1480'
					height='1500'
					src={startNowherbieCareerWidePoster}>
					<Figcaption>
						I designed the huge banner to hold the posters and the poster on the
						left.
					</Figcaption>
				</Figure>
				<Figure
					alt='me on the cover of a career resource guide'
					width='1480'
					height='1500'
					src={startNowCareerResourseGuide}>
					<Figcaption>I was on the cover of a Career Resource Guide</Figcaption>
				</Figure>

				<HeadingTwo>In Conclusion</HeadingTwo>
				<Paragraph>
					Overall, I couldn't have asked for a better first job.
				</Paragraph>

				{/* <Figure alt='' width='' height='' src={CareerWidePosterPhotoshop1480x1973}>
					<Figcaption>Something</Figcaption>
				</Figure> */}
				<ContentCategory category='work' />
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
