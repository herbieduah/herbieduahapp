/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
  Paragraph,
  Link,
  Header,
  LessContent,
  Figcaption,
  Figure,
  ContentCategory,
  WorkInfo,
  ZigZag,
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";

import {
  georgeDevmobileScreenshot,
  georgeDevIphoneWebsite,
  georgeDevDesktopDark,
  georgeDevDesktopLight,
} from "../MediaVariables";

const header = "GG Portolio";
const workDuration = "May 2020 - July 2020";
const workSkills = "React, UX Design, CSS (Sass)";
const workTools = "Adobe XD";

const GGPorfolioPage = () => {
  return (
    <Fragment>
      <ContentShow less>
        <LessContent header={header}>GG Portolio.</LessContent>
      </ContentShow>
      <ContentShow containerLarge more>
        <ZigZag>
          <Header>{header}</Header>
          <WorkInfo workinfo={workinfo} />
        </ZigZag>

        <ZigZag>
          <Paragraph className="marginTopXLarge">
            My friend, an iOS Dev, wanted to learn web development, so I designed an Apple.com-inspired one-page
            portfolio site for him to teach him how to develop it.
          </Paragraph>
          <Paragraph>
            <Link href="https://www.georgegarcia.dev/">George Garcia</Link>
          </Paragraph>
          <Figure
            mockup
            className="paddingLRSm"
            alt="Prototype of the George Garcia portfolio site"
            src={georgeDevDesktopDark}>
            <Figcaption className="marginBottomLarge">
              Prototype of the Dark Mode version of the site designed using Adobe XD
            </Figcaption>
          </Figure>
        </ZigZag>
        <ContentCategory category="work" />
      </ContentShow>
    </Fragment>
  );
};

export default GGPorfolioPage;

const workinfo = {
  workDuration,
  workSkills,
  workTools,
};
