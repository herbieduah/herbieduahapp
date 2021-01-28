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

import { amexAlertsTopMobile, amexAlertsAllDesktop } from "../MediaVariables";

import { ShowIf } from "../ComponentHelpers";

const header = "American Express";
const workDuration = "May 2020 - Present";
const workSkills = "React, Redux, CSS (Sass), HTML5, Javascript";
const workTools = "Visual Studio Code, Jenkins, Swagger, JIRA, Bitbucket";

const AmericanExpressPage = ({ contentProps }) => {
  const { forDev } = contentProps;
  return (
    <Fragment>
      <ContentShow less>
        <LessContent header={header}></LessContent>
      </ContentShow>
      <ContentShow containerLarge more>
        <ZigZag>
          <Header>{header}</Header>
          <WorkInfo workinfo={workinfo} />
        </ZigZag>

        <ZigZag>
          <Paragraph className="marginTopXLarge">
            I worked closely with product owner, design, API and QA team members to develop and release highly visited{" "}
            <Link href="https://global.americanexpress.com/account-management/alerts">Account Alerts</Link> (Amex card
            is required to login) page from the ground up.
          </Paragraph>
          <ShowIf noAnimation thisValue={forDev} thatValue={true}>
            <Paragraph>
              On the day to day, I build and refactor UIs with 100% test coverage, work with backend REST APIs to
              display and update required data and, support testing and deployment through various environments for{" "}
              <Link href="https://global.americanexpress.com">American Express</Link>.
            </Paragraph>
          </ShowIf>
          <Figure
            mockup
            className="paddingLRSm"
            alt="American Express Alerts page screenshot"
            src={amexAlertsAllDesktop}>
            <Figcaption className="marginBottomLarge">
              American Express Account Alerts page screenshot. You can check it out{" "}
              <Link href="https://global.americanexpress.com/account-management/alerts">here</Link>, if you're an Amex
              card member
            </Figcaption>
          </Figure>
        </ZigZag>

        <ZigZag>
          <Figure
            mockup
            className="paddingLRSm"
            alt="American Express Alerts page mobile screenshot"
            src={amexAlertsTopMobile}>
            <Figcaption className="marginBottomLarge">
              American Express Account Alerts page screenshot on mobile.
            </Figcaption>
          </Figure>
        </ZigZag>

        <ContentCategory category="work" />
      </ContentShow>
    </Fragment>
  );
};

export default AmericanExpressPage;

const workinfo = {
  workDuration,
  workSkills,
  workTools,
};
