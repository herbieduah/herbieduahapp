/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import {
  ContentShow,
  ContentCategory,
  Paragraph,
  Header,
  HeadingTwo,
  Experience,
  LessContent,
  Link,
  // HeadingThree,
  // HeadingOne,
  // Small
} from "../ContentHelpers";

const header = "Resume";

const Resume = () => {
  return (
    <Fragment>
      <ContentShow less>
        {/* <LessContent header={header}>My work experience.</LessContent> */}

        <LessContent header={header}>
          <Link href="https://drive.google.com/file/d/1CtJxRPJxSRPlrDE0k28YKkFA165i3Cax/view">Check Out My Resume</Link>
        </LessContent>
        <div className="less__container">
          <Paragraph>
            Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </Paragraph>
        </div>
      </ContentShow>
      <ContentShow more>
        <Header>{header}</Header>
        <HeadingTwo>Education</HeadingTwo>
        <Experience>
          <Text>
            <strong>Bachelor of Science in Applied Computer Science</strong>
          </Text>
          <Text>Northern Arizona University, Flagstaff Arizona</Text>
          <Text className="marginBottomSm">
            <i>August 11 - May 2016</i>
          </Text>
        </Experience>
        <HeadingTwo>Experience</HeadingTwo>
        <Experience>
          <Text l>Front End Developer</Text>
          <Text format>Discount Tire</Text>
          <Text format>
            <i>March 2018 to Present</i>
          </Text>
          <ul>
            <li>
              <Text format>
                Introduced prototyping and various UX concepts to create more usable, feature-rich, and aesthetically
                pleasing web pages/applications for the intranet used mainly by 1000+ Discount/America Tire stores
                nationwide.
              </Text>
            </li>
            <li>
              <Text format>
                Updating existing website content, creating new layouts, landing pages that follow existing web
                standards; making a few modifications to existing developed code.
              </Text>
            </li>
          </ul>
        </Experience>

        <Experience>
          <Text l>User Interface Developer</Text>
          <Text format>Deckers Brands</Text>
          <Text format>
            <i>August 2016 to March 2018</i>
          </Text>
          <ul>
            <li>
              <Text format>
                Operated on an Agile development team, conducted A/B testing, and developed user interfaces with
                accessibility and performance in mind for UGG.com’s 100,000+ monthly unique users.
              </Text>
            </li>
            <li>
              <Text format>
                Led the collaboration efforts between marketing and design team to develop innovative emails using the
                MJML framework. The emails are featured on the mjml.io and reallygoodemails.com.
              </Text>
            </li>
          </ul>
        </Experience>

        <Experience>
          <Text l>Graphic and Web Designer</Text>
          <Text format>Flagstaff Chamber of Commerce</Text>
          <Text format>
            <i>November 2015 to March 2017</i>
          </Text>
          <ul>
            <li>
              <Text format>
                Created visuals and cohesive designs that reflect various objectives and goals using illustrations,
                colors, images, typography and layout for events, web, and print.
              </Text>
            </li>
            <li>
              <Text format>
                Developed custom landing pages, made design suggestions, diagnosed and fixed web content problems, and
                performed on-page SEO for Wordpress site.
              </Text>
            </li>
          </ul>
        </Experience>

        <Experience>
          <Text l>Digital Designer</Text>
          <Text format>Northern Arizona University</Text>
          <Text format>
            <i>February 2014 to July 2016</i>
          </Text>
          <ul>
            <li>
              <Text format>
                Worked directly with the Career Development Director to create a series of posters, digital art,
                documents, videos, and other mediums geared towards helping students start their career.
              </Text>
            </li>
            <li>
              <Text format>
                Constructed a mobile-friendly web page on a very limiting legacy Content Management System to drive more
                college students to learn and access the information they need to find jobs.
              </Text>
            </li>
          </ul>
        </Experience>

        <Experience>
          <Text l>Digital Business Intern</Text>
          <Text format>Deckers Brands</Text>
          <Text format>
            <i>January 2016 to May 2016</i>
          </Text>
          <ul>
            <li>
              <Text format>
                Identified pain points for the company by rotating through each department of the e-commerce operation
                for UGG, Teva, HOKA ONE ONE, and Sanuk to present an innovative idea to the executive team.
              </Text>
            </li>
            {/* <li>
							<Text format>
								I worked with the e-mail development team to design, create and
								execute marketing emails.
							</Text>
						</li> */}
          </ul>
        </Experience>

        <Experience>
          <Text l>Student Web Developer</Text>
          <Text format>Northern Arizona University</Text>
          <Text format>
            <i>May 2014 to July 2015</i>
          </Text>
          <ul>
            <li>
              <Text format>
                Demonstrated ability to maintain web services and reports using HTML, CSS, Javascript, ASP.NET, C#, and
                other Microsoft programming platforms and programming methodologies.
              </Text>
            </li>
            <li>
              <Text format>
                Learned analytical skills to be able to research, analyze, detect, and technically correct errors within
                in-house developed processes with the help of experienced mentors.
              </Text>
            </li>
          </ul>
        </Experience>
        <div className="marginTopLarge">
          <Paragraph>
            <Link href="https://drive.google.com/file/d/1S-Xp5mUFdcyMnwiAvs06Ksp-a2UX6TOQ/view">
              Check Out My Resume.
            </Link>
          </Paragraph>
          <Paragraph>
            <Link href="https://www.linkedin.com/in/herbieduah/">Connect with me on LinkedIn.</Link>
          </Paragraph>
        </div>
        <ContentCategory category="about" />
      </ContentShow>
    </Fragment>
  );
};

export default Resume;
