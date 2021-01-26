/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
  Paragraph,
  HeadingTwo,
  Link,
  Header,
  LessContent,
  Figcaption,
  Figure,
  ContentCategory,
  WorkInfo,
  Image,
  ZigZag,
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";

import {
  glossaryDesktop,
  bedziniPhoneNavNormal,
  // bedzinthroughbedzinDesktop,
  bedzinCreationofExhibitDesktop,
  bedzinExhibitOld,
  // iPhoneExhibitMobile,
  // bedzinIPhoneExhibit,
  bedziniPhoneCreationofExhibit,
} from "../MediaVariables";

const header = "Typecraft";
const workDuration = "September 2020 - Present";
const workSkills = "React, Redux, Less, API";
const workTools = "VSCode, Github";

const BedzinExhibitPage = () => {
  return (
    <Fragment>
      <ContentShow less>
        <LessContent header={header}>Revamped a traveling exhibit site for my senior capstone.</LessContent>
        <div className="less__container">
          <Image
            className="paddingLRSm"
            src={bedzinCreationofExhibitDesktop}
            alt="creation of the exhibit mockup page"
          />
        </div>
      </ContentShow>
      <ContentShow containerLarge more>
        <ZigZag>
          <Header>{header}</Header>
          <WorkInfo workinfo={workinfo} />
        </ZigZag>

        <ZigZag>
          <Paragraph className="marginTopXLarge">
            For my Computer Science capstone, my group was tasked with revamping &nbsp;
            <Link href="http://bedzinexhibit.org/">bedzinexhibit.org</Link>. The exhibit, "Through the Eyes of Youth:
            Life and Death in the Będzin Ghetto" tells the story of young people in the Jewish ghetto of Będzin (Poland)
            before, during, and after the Holocaust.
          </Paragraph>
          <Figure
            mockup
            className="paddingLRSm"
            alt="A screenshot of The Bezdin website before redesign"
            src={bedzinExhibitOld}>
            <Figcaption className="marginBottomLarge">
              The web design before the redesign from &nbsp;
              <Link href="https://archive.org/web/">Wayback Machine</Link>
            </Figcaption>
          </Figure>
          <Paragraph>
            While other capstone projects were more towards engineering, ours had a UX design aspect to it, so I
            volunteered to be the designer. It's worth mentioning this was my very first website UX design.
          </Paragraph>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>Modern Look and Feel</HeadingTwo>
          <Paragraph className="marginBottomLarge">
            The main goal of the project was to bring a whole new look and feel to the design of the website. Below
            you'll see some mockups I created for the website. It's worth mentioning this was my very first website UX
            design.
          </Paragraph>
          <Figure
            mockup
            className="paddingLRSm"
            alt="a mock up of the creation of exhibit page for desktop"
            src={bedzinCreationofExhibitDesktop}>
            <Figcaption className="marginBottomLarge">Creation of the Exhibit page for desktop</Figcaption>
          </Figure>
          <Figure
            mockup
            className="paddingLRMed"
            alt="a mock up of the creation of exhibit page for mobile"
            width="1480"
            height="9042"
            src={bedziniPhoneCreationofExhibit}>
            <Figcaption className="marginBottomLarge">Creation of the Exhibit page for mobile</Figcaption>
          </Figure>
          <Figure
            mockup
            className="paddingLRSm"
            alt="a mock up of the desktop version of the homepage"
            width="1480"
            height="3193"
            src={bedzinCreationofExhibitDesktop}>
            <Figcaption className="marginBottomLarge">Desktop version of the homepage</Figcaption>
          </Figure>
          {/* <Figure
						mockup
						className='paddingLRMed'
						alt='a mock up of the mobile version of the homepage'
						width='1480'
						height='6938'
						src={iPhoneExhibitMobile}>
						<Figcaption className='marginBottomLarge'>
							Mobile version of the homepage
						</Figcaption>
					</Figure> */}
          <Figure
            mockup
            className="paddingLRMed"
            alt="A mock up of the mobile menu"
            width="1480"
            height="2877"
            src={bedziniPhoneNavNormal}>
            <Figcaption className="marginBottomLarge">Mobile menu</Figcaption>
          </Figure>

          <Figure
            mockup
            className="paddingLRSm"
            alt="a mock up for the glossary page"
            width="1480"
            height="2749"
            src={glossaryDesktop}>
            <Figcaption className="marginBottomLarge">Glossary page. Desktop version.</Figcaption>
          </Figure>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>In Conclusion</HeadingTwo>
          <Paragraph>
            The experience taught me a lot about prototyping, setting up requirements, communicating with stakeholders,
            and working with a small team for an extended period to deliver a project.
          </Paragraph>

          <Paragraph>
            Throughout the project, I was enlightened by the story about the Będzin Ghetto. If you'd like to learn more
            about it, you can visit &nbsp;
            <Link href="http://bedzinexhibit.org/">bedzinexhibit.org</Link>
          </Paragraph>
        </ZigZag>
        <ContentCategory category="work" />
      </ContentShow>
    </Fragment>
  );
};

export default BedzinExhibitPage;

const workinfo = {
  workDuration,
  workSkills,
  workTools,
};
