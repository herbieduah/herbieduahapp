/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
import { ContentShow, Paragraph, Header } from "../ContentHelpers";

const header = "Inspiration";

const UXvsHXPage = () => {
  return (
    <Fragment>
      <ContentShow less>
        <Header less>{header}</Header>
        <Paragraph less>In the future, I believe there is going to be an app for everyone.</Paragraph>
        <div className="less__container">
          {/* <Paragraph>
						In the future, I believe everyone is going to have their own app. I
						imagine it will be a mixture between the data and features from all
						your social media apps all merged in an app with the help of Machine
						Learning. I envision every user having a different experience with
						your app, just like they do in real life. The idea of everyone
						having their own app was the main inspiration for the look and feel
						of this web app.
					</Paragraph> */}
        </div>
      </ContentShow>
      <ContentShow more>
        <Header>{header}</Header>
        <Paragraph>Coming soon.</Paragraph>
      </ContentShow>
    </Fragment>
  );
};

export default UXvsHXPage;
