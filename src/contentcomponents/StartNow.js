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
  WorkInfo,
  ZigZag,
  LessContent,
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
  startNowCareerResourseGuide,
} from "../MediaVariables";

// import howtowritecoverletter_1 from "../media/videos/startnow/howtowritecoverletter_1.mp4";
// import resumeemail from "../media/videos/startnow/resumeemail.mp4";
import { startNowcoverLetterGif, startNowresumeEmail } from "../VideoVariables";

const header = "Start Now";
const workDuration = "May 2014 - August 2016";
const workSkills = "Graphic Design, Web Design, Print Design and Digital Art";
const workTools = "Adobe Creative Suite and VideoScribe";

const StartNowPage = ({ contentProps }) => {
  const { forDev } = contentProps;

  return (
    <Fragment>
      <ContentShow less>
        <LessContent header={header}>I helped other students get jobs while I was in college.</LessContent>
        <div className="less__container paddingLRParagraph">
          <Image src={startNowCareerImageWithPeople} />
        </div>
      </ContentShow>
      <ContentShow containerLarge more>
        <ZigZag>
          <Header>{header}</Header>
          <WorkInfo workinfo={workinfo} />
        </ZigZag>

        <ZigZag>
          <Paragraph className="marginTopXLarge">
            My first job was working directly with the Career Development Director for the Northern Arizona University
            (deep breath) College of Engineering and Natural Sciences (CEFNS).
          </Paragraph>

          <Paragraph>Our main goal was to help CEFNS students start their career.</Paragraph>

          <Figure
            className="paddingLRParagraph"
            alt="know the game poster with arcade poster"
            width="2000"
            height="1500"
            src={startNowKnowTheGame}>
            <Figcaption>"Know The Game" poster with the arcade machine.</Figcaption>
          </Figure>
          <Figure
            className="paddingLRParagraph"
            alt="Arcade machine"
            width="2000"
            height="2667"
            src={startNowACMClubPhoto}>
            <Figcaption>An arcade machine created by Association for Computing Machinery (ACM) club at NAU.</Figcaption>
          </Figure>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>Start Now Campaign</HeadingTwo>
          <Paragraph>
            The Start Now campaign was a series of posters, digital art, documents, videos and other mediums geared
            toward that primary goal.
          </Paragraph>
          <Paragraph>
            We chose to go with a 1920s Vintage Travel Posters for the art direction because starting a career is like a
            journey.
          </Paragraph>
          <Figure
            className="paddingLRParagraph"
            alt=" A photo of the Construction of the Science and Health Building at Northern Arizona University"
            width="2000"
            height="1500"
            src={startNowNAUConstruction}>
            <Figcaption>Construction of the Science and Health Building.</Figcaption>
          </Figure>
          {/* <Figure
						alt='Construct a plan poster with photo of the Construction of the Science and Health Building at Northern Arizona University'
						src={startNowConstructAPlanHorizontal}>
						<Figcaption>
							"Construct A Plan" poster with the picture of construction of the
							Science and Health Building.
						</Figcaption>
					</Figure> */}
          {/* <Image
						className='paddingLRParagraph'
						alt='A poster with construction building with the title Contruct A Plan'
						width='1952'
						height='2874'
						src={startNowConstructAPlan}
					/> */}
          <Figure
            alt="Construct a plan poster with photo of the Construction of the Science and Health Building at Northern Arizona University"
            className="paddingLRParagraph"
            src={startNowConstructAPlan}>
            <Figcaption>
              "Construct A Plan" poster with the picture of construction of the Science and Health Building.
            </Figcaption>
          </Figure>

          {/* <Image
						className='paddingLRParagraph'
						alt='Start Now poster with trees on it'
						src={startNowStandOutFromTheRest}></Image> */}
        </ZigZag>
        <ZigZag>
          <HeadingTwo>Web Design</HeadingTwo>
          <Paragraph>
            We wanted to drive everyone to our page on the Northern Arizona University (NAU) website through our
            posters. The problem was at the time, the Content Management System (CMS) was very archaic and extremely
            limited in terms of customization. Most of our target audience needed to be able to access the content on
            mobile, but the CMS was not mobile-friendly.
          </Paragraph>
          {/* <ShowIf noAnimation thisValue={forDev} thatValue={true}>
						<Paragraph>
							The limitation of the CMS was quite impressive. I tried injecting
							javascript, throwing in the style tag and the wackiest code into
							it and it wouldn't budge. I thought it could be manipulated since
							it was old but no.
						</Paragraph>
					</ShowIf> */}
          <Paragraph>I had to get creative.</Paragraph>
          <Figure
            className="paddingLRParagraph"
            alt="Screenshot of the NAU Start Now site"
            width="1480"
            height="1824"
            src={startNowFullPage}>
            <Figcaption>
              (Screenshot captured from <Link href="www.web.archive.org/">web.archive.org</Link>) I created big
              "buttons" so users can easily navigate on mobile.{" "}
            </Figcaption>
          </Figure>
          <Figure
            className="paddingLRParagraph"
            alt="Screenshot of the NAU Start Now site start page"
            width="1480"
            height="1774"
            src={startNowFullSizeStudents}>
            <Figcaption>
              (Screenshot captured from <Link href="www.web.archive.org/">web.archive.org</Link>) The CMS didn't allow
              PNG image files so I had to create some of these "buttons" with background color of the page.
            </Figcaption>
          </Figure>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>How To Write an Excellent Resume and Cover Letter</HeadingTwo>
          <Paragraph>
            I utilized a software called VideoScribe to create two very informative videos on how to write a resume and
            cover letter.
          </Paragraph>
          <div className="paddingLRParagraph">
            <FiGif url={startNowresumeEmail} desc="How to Write an Excellent Resume Screen Capture">
              <Figcaption>
                <Link href="https://www.youtube.com/watch?v=z8i6kHg0YoY">How to Write an Excellent Resume</Link>{" "}
              </Figcaption>
            </FiGif>
            <FiGif url={startNowcoverLetterGif} desc="ow to Write an Excellent Cover Letter Screen Capture">
              <Figcaption>
                <Link href="https://www.youtube.com/watch?v=I3WQa1AN_V0">How to Write an Excellent Cover Letter</Link>{" "}
              </Figcaption>
            </FiGif>
          </div>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>Modeling for Career Development</HeadingTwo>
          <Paragraph>
            I volunteered to be in a photo shoot, and I pretty much became the face of Career Development at NAU for
            some time.
          </Paragraph>
          <Figure
            className="paddingLRParagraph"
            alt="a picture of me in professional attire with an outrageous smile"
            width="1480"
            height="2220"
            src={startNowsmileStock}>
            <Figcaption>When you laugh at the employers jokes because you want the job really bad.</Figcaption>
          </Figure>
          <Figure
            className="paddingLRParagraph"
            alt="A picture of me in professional attire with a tiger woods like yes pose"
            width="1480"
            height="2220"
            src={startNowYes}>
            <Figcaption>When you get the job.</Figcaption>
          </Figure>

          <Figure
            className="paddingLRParagraph"
            alt="a picture of me in professional attire being confused"
            width="1480"
            height="2220"
            src={startNowidkwhatIamDoing}>
            <Figcaption>When you don't know what you are doing at the job.</Figcaption>
          </Figure>

          <Figure
            alt="a picture of me On a Career and Premedical Professions Fair poster."
            width="1480"
            height="1500"
            className="paddingLRParagraph"
            src={startNowCareerPoster}>
            <Figcaption>On a Career and Premedical Professions Fair poster.</Figcaption>
          </Figure>

          <Figure alt="a picture of a wide banner" className="paddingLRParagraph" src={startNowherbieCareerWidePoster}>
            <Figcaption>I designed the huge banner to hold the posters and the poster on the left.</Figcaption>
          </Figure>
          <Figure
            className="paddingLRParagraph"
            alt="me on the cover of a career resource guide"
            src={startNowCareerResourseGuide}>
            <Figcaption>I was on the cover of a Career Resource Guide</Figcaption>
          </Figure>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>In Conclusion</HeadingTwo>
          <Paragraph>Overall, I couldn't have asked for a better first job.</Paragraph>
        </ZigZag>
        {/* <Figure alt='' width='' height='' src={CareerWidePosterPhotoshop1480x1973}>
					<Figcaption>Something</Figcaption>
				</Figure> */}
        <ContentCategory category="work" />
      </ContentShow>
    </Fragment>
  );
};

export default StartNowPage;

const workinfo = {
  workDuration,
  workSkills,
  workTools,
};
