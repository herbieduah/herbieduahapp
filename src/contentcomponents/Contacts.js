/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
  Paragraph,
  // HeadingOne,
  HeadingTwo,
  // HeadingThree,
  //   Image,
  Link,
  ContentCategory,
  ContentShow,
  LessContent,
  // Small,
  Figure,
  Figcaption,
  // Gif,
  Header
} from "../ContentHelpers";

import { picsOfMesmileOnPhone } from "../MediaVariables";
// import Emoji from "a11y-react-emoji";
// import Modal from "../maincomponents/Modal";
// import cornishPastyPic from "../media/images/picsOfMe/hd-herbieSmile-1974.jpg";
// import testPic from "../media/images/photography-herbieFood-2222.jpg";
// import testPic2 from "../media/images/photography-melPhoto-2221.jpg";
// import ReactPlayer from "react-player";

const header = "Contact";

const ContactsPage = () => {
  return (
    <Fragment>
      <ContentShow less>
        {/* <Paragraph>
					Hello, I'm Herbie, a Photographer and Front End Developer with a
					passion for designing and engineering user experiences for you.
				</Paragraph> */}
        <LessContent header={header}>
          <Link href="mailto:herbduah@gmail.com">Email me</Link>
        </LessContent>
        <div className="less__container">
          <Paragraph>
            You can also message me on&nbsp;
            <Link href="https://instagram.com/herbieduah">Instagram</Link>
            ,&nbsp;
            <Link href="https://twitter.com/herbieduah">Twitter</Link>or &nbsp;
            <Link href="https://www.linkedin.com/in/herbieduah/">LinkedIn</Link>
          </Paragraph>
        </div>
      </ContentShow>
      <ContentShow more>
        <Header>{header}</Header>

        <HeadingTwo>Email</HeadingTwo>
        <Paragraph>
          You can email at <Link href="mailto:herbduah@gmail.com">herbduah@gmail.com</Link>
        </Paragraph>
        <HeadingTwo>Social</HeadingTwo>
        <Paragraph>You can message me on any of these platforms as well. </Paragraph>
        <Paragraph>
          <Link href="https://instagram.com/herbieduah">Instagram</Link>&nbsp;
          <Link href="https://twitter.com/herbieduah">Twitter</Link>&nbsp;
          <Link href="https://www.linkedin.com/in/herbieduah/">LinkedIn</Link>{" "}
        </Paragraph>
        <Figure alt="picture of me smiling on a phone call" className="marginTopLarge" src={picsOfMesmileOnPhone}>
          <Figcaption>When you hit me up.</Figcaption>
        </Figure>
        <ContentCategory category="about" />
      </ContentShow>
    </Fragment>
  );
};

export default ContactsPage;
