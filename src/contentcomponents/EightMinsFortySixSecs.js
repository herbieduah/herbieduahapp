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
  FiGif,
  ZigZag,
} from "../ContentHelpers";
import { ContentShow } from "../ContentHelpers";

import {
  bedzinCreationofExhibitDesktop,
  bedzinExhibitOld,
  typecraft,
  georgeDevmobileScreenshot,
  georgeDevIphoneWebsite,
  georgeDevDesktopDark,
  georgeDevDesktopLight,
  amexDesktopFooter,
  amexAlertsTopMobile,
  amexAlertsMobile,
  amexAlertsAllDesktop,
  eightFortySixProtestMobile,
  eightFortySixMobileHome,
  eightFortySixmobile,
  eightFortySixHomeDesktop,
} from "../MediaVariables";
import { eightFortySixdesktop, eightFortySixmobileVid, eightFortySixdesktop2 } from "../VideoVariables";
import { ShowIf } from "../ComponentHelpers";

const header = "08:46";
const workDuration = "June 2020";
const workSkills = "React, UX Design, CSS(Sass)";
const workTools = "Visual Studio Code";

const EightMinsFortySixSecsPage = ({ contentProps }) => {
  const { isContentPortrait } = contentProps;
  return (
    <Fragment>
      <ContentShow less>
        <LessContent header={header}>08:46</LessContent>
      </ContentShow>
      <ContentShow containerLarge more>
        <ZigZag>
          <Header>{header}</Header>
          <WorkInfo workinfo={workinfo} />
        </ZigZag>

        <ZigZag>
          <Paragraph className="marginTopXLarge">
            On May 25th 2020, Officer Derek Chauvin, knelt on the neck of George Floyd for 8 minutes and 46 seconds and
            killed him. I was inspired by{" "}
            <Link href="https://blacklivesmatters.carrd.co/">blacklivesmatters.carrd.co</Link> to also create a website
            to educate and help people protest safely. I built the site a Progressive Web App so people could use
            certain parts of the site offline.
          </Paragraph>
          <Paragraph>
            Unfortunately, I had to sunset the project for the sake of my mental health at the time. I started the
            project during the first weeks of my first Software Engineering opportunity after six weeks of unemployment
            during a pandemic amid a nationwide protest for racial injustice.
          </Paragraph>
          <Paragraph>
            The project is still live. <Link href="https://www.8minutes46seconds.app">8minutes46seconds</Link>
          </Paragraph>

          <Figure
            mockup
            className="paddingLRSm"
            alt="Screenshot for the homepage of 8minutes46seconds"
            src={eightFortySixHomeDesktop}>
            <Figcaption className="marginBottomLarge">Screenshot of 8minutes46seconds.app homepage</Figcaption>
          </Figure>
        </ZigZag>

        <ZigZag>
          <ShowIf noAnimation thisValue={isContentPortrait} thatValue={false}>
            <FiGif
              className="paddingLRSm"
              desc="Screen recording of 8minutes46seconds"
              width="720"
              height="900"
              url={eightFortySixdesktop2}>
              <Figcaption>Screen recording of While You're at a Protest page</Figcaption>
            </FiGif>
          </ShowIf>
          <ShowIf noAnimation thisValue={isContentPortrait} thatValue={true}>
            <FiGif
              className="paddingLRSm"
              desc="Screen recording of 8minutes46seconds"
              width="720"
              height="900"
              url={eightFortySixmobileVid}>
              <Figcaption>Screen recording of While You're at a Protest page</Figcaption>
            </FiGif>
          </ShowIf>
        </ZigZag>

        <ContentCategory category="work" />
      </ContentShow>
    </Fragment>
  );
};

export default EightMinsFortySixSecsPage;

const workinfo = {
  workDuration,
  workSkills,
  workTools,
};
