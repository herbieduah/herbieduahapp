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

import { typecraft } from "../MediaVariables";

const header = "Typecraft";
const workDuration = "September 2020 - Present";
const workSkills = "React, Redux, CSS (Less), HTML5, Javascript";
const workTools = "Visual Studio Code, Github";

const TypecraftPage = () => {
  return (
    <Fragment>
      <ContentShow less>
        <LessContent header={header}>
          Working with backend engineers and a product designer to implement comment functionality and other features
          using React.js and Redux.{" "}
        </LessContent>
      </ContentShow>
      <ContentShow containerLarge more>
        <ZigZag>
          <Header>{header}</Header>
          <WorkInfo workinfo={workinfo} />
        </ZigZag>

        <ZigZag>
          <Paragraph className="marginTopXLarge">
            <Link href="https://www.typecraftapp.com">Typecraft</Link> is a web app that enables users to create,
            prototype and present website content. I am working with backend engineers and a product designer to
            refactor and implement features such as commenting and viewer mode with React.js and Redux.
          </Paragraph>
          <Paragraph>
            The features are still being tested, will include more screenshots when the features are deployed to
            production.
          </Paragraph>
          <Figure mockup className="paddingLRSm" alt="Screenshot of a wireframe made with Typecraft" src={typecraft}>
            <Figcaption className="marginBottomLarge">
              Screenshot of a wireframe of the desktop view for this web app.
            </Figcaption>
          </Figure>
        </ZigZag>
        <ContentCategory category="work" />
      </ContentShow>
    </Fragment>
  );
};

export default TypecraftPage;

const workinfo = {
  workDuration,
  workSkills,
  workTools,
};
