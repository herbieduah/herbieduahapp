/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
  Paragraph,
  // HeadingTwo,
  Header,
  Link,
  ContentCategory,
  ContentShow,
  GenerateTheme,
} from "../ContentHelpers";
// import Emoji from "a11y-react-emoji";

const header = "Gradients";

const GradientsPage = () => {
  return (
    <Fragment>
      <ContentShow less>
        <Paragraph>I have curated a beautiful collection of gradients.</Paragraph>
      </ContentShow>
      <ContentShow more>
        <Header>{header}</Header>
        <GenerateTheme type="gradient" />
        <Paragraph className="marginTopMed">
          Big shout out to <Link href="https://webgradients.com/">webgradients.com</Link> for their stellar choices of
          gradients and the names to with theme.
        </Paragraph>
        <ContentCategory category="customize" />
      </ContentShow>
    </Fragment>
  );
};

export default GradientsPage;
