/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Text from "../stylecomponents/Text";
import {
  Paragraph,
  // HeadingOne,
  HeadingTwo,
  // HeadingThree,
  Image,
  Emphasis,
  // Link,
  ContentCategory,
  Figure,
  Figcaption,
  Small,
  // Gif,
  Header,
  // Flex,
  ContentShow,
  ZigZag,
  LessContent,
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
import Emoji from "a11y-react-emoji";
import { ForSomeone, forYouHelper } from "../maincomponents/ForYou";
import { isMobile } from "react-device-detect";
import {
  picsOfMesnowsmilephotography,
  picsOfMeshowingtilly,
  picsOfMeHero,
  WhatIfHomepage,
  WhatIfAnAppForEveryone,
} from "../MediaVariables";
// import ReactPlayer from "react-player";
import { videosofmevNeckCrewNeck, videosofmephotosSedona } from "../VideoVariables";
const header = "HerbieDuah.app";
// There is an app for everything, in
// 					the future, I believe there is going to be an app for everyone. I am
// 					Herbie Duah, and this is my app.

/* <ThisValueEqualsState thisValue='Connor' stateValue={whom}>
						<Text xl>BIG DOGGG</Text>
					</ThisValueEqualsState> */

// const HomePage = ({ contentProps }) => {
const HomePage = ({ contentProps }) => {
  const { whom, forYou, ww, wh, isContentPortrait } = contentProps;
  // const opts = {
  // 	height: "100%",
  // 	width: "100%",
  // 	playerVars: {
  // 		autoplay: 1,
  // 		controls: 0,
  // 		cc_load_policy: 0,
  // 		fs: 0,
  // 		iv_load_policy: 3,
  // 		modestbranding: 1,
  // 		rel: 0,
  // 		showinfo: 0
  // 	}
  // };

  return (
    <Fragment>
      <ContentShow less>
        <LessContent header={header}>
          Hi<span className="text-cap">{forYouHelper(forYou)}</span>, I'm Herbie Duah and this is my personal web app.
          {/* <br />
					<br />I built this portfolio as a way for me to learn and bring some
					of my creative and original ideas to life. */}
        </LessContent>
      </ContentShow>
      <ContentShow containerLarge more>
        <ZigZag>
          <Header version>{header}</Header>
          <div className="marginBottomLarge">
            <ShowIf noAnimation thisValue={isContentPortrait} thatValue={true}>
              <Small className="marginBottomLarge">
                Everyone is going to have their own app in the future, so I made my own.
              </Small>
            </ShowIf>

            <Paragraph className="paddingLRParagraph marginBottomLarge">
              Updating my Portfolio site this week to reflect my latest work experience. - Herbie 1/25/2021
            </Paragraph>

            <ShowIf noAnimation thisValue={isContentPortrait} thatValue={false}>
              <Small className="marginBottomLarge">
                Check this out on your phone when you get the chance&nbsp;{" "}
                <Emoji className="emoji" symbol="😜" label="face with stuck out tongue" />
              </Small>
            </ShowIf>
          </div>
        </ZigZag>
        <ZigZag>
          <Emphasis className="paddingLRParagraph">
            {/* Hey there */}
            <span>
              {forYouHelper(forYou)
                ? `Hey ${forYouHelper(forYou)}`
                : // <Emoji className='emoji' symbol='😄' label='smile' />
                  "Hello, I'm Herbie"}
            </span>
            &nbsp;
            <Emoji className="emoji" symbol="😄" label="smile" />
          </Emphasis>
          <ForSomeone whom={whom} forYou={forYou} />

          {/* <div className='marginTopLarge'>
						<Emphasis className='paddingLRMed' center>
							I'm Herbie.
						</Emphasis>
					</div> */}
          <Image
            src={picsOfMeHero}
            className="paddingLRParagraph"
            alt="A picture of me smiling infront of green plants "
          />
        </ZigZag>

        <ZigZag>
          <Emphasis className="paddingLRParagraph">I love designing and coding websites for humans.</Emphasis>
          <Figure className="paddingLRParagraph" alt="A photo of me with dog on a desk" src={picsOfMeshowingtilly}>
            <Figcaption>Sometimes I need help from non-humans.</Figcaption>
          </Figure>
        </ZigZag>
        <ZigZag>
          <Emphasis className="paddingLRParagraph">I also love to take photos.</Emphasis>
          <Image
            src={picsOfMesnowsmilephotography}
            className="paddingLRParagraph"
            alt="A picture of me sitting on snow while holding a camera"
          />
        </ZigZag>
        <ZigZag>
          {/* <div className='marginTopLarge marginBottomLarge'>
						<Emphasis className='paddingLRParagraph'>
							Nowadays, there is an app for everything. In the future, I believe
							there is going to be an app for everyone.
						</Emphasis>
					</div> */}
          {/* MockupStuff */}
          {/* <div className='marginTopLarge marginBottomLarge'>
						<Emphasis className='paddingLRParagraph'>
							In the future, everyone is going to have their own
						</Emphasis>
					</div> */}
          <div className="marginTopLarge ">
            <Emphasis className="paddingLRParagraph">
              In the future, I believe there is going to be an app for everyone.
            </Emphasis>
            <ShowIf noAnimation thisValue={isMobile} thatValue={true}>
              <Image
                src={WhatIfAnAppForEveryone}
                className="paddingLRParagraph"
                alt="Mockups of this web  app on an iPhone XR"
              />
            </ShowIf>
            <ShowIf noAnimation thisValue={isMobile} thatValue={false}>
              <Image src={WhatIfHomepage} className="paddingLRParagraph" alt="Mockups of this web  app on an iPad" />
            </ShowIf>
          </div>
          <Paragraph className="paddingLRParagraph">
            I envision every user having a unique experience with your app. This vision inspired me to craft my
            portfolio as a web app that lets you customize your experience{" "}
            <Emoji className="emoji" symbol="😉" label="wink" />
          </Paragraph>
        </ZigZag>
        <ContentCategory category="customize" />
      </ContentShow>
    </Fragment>
  );
};

export default HomePage;
