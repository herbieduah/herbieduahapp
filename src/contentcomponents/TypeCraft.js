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
            <Link href="http://bedzinexhibit.org/">Coming Soon</Link>. The exhibit, "Through the Eyes of Youth: Life and
            Death in the Będzin Ghetto" tells the story of young people in the Jewish ghetto of Będzin (Poland) before,
            during, and after the Holocaust.
          </Paragraph>
          <Figure mockup className="paddingLRSm" alt="PENDING ALT INFORMATION" src={bedzinExhibitOld}>
            <Figcaption className="marginBottomLarge">
              The web design before the redesign from &nbsp;
              <Link href="https://archive.org/web/">Wayback Machine</Link>
            </Figcaption>
          </Figure>
          <Paragraph></Paragraph>
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
