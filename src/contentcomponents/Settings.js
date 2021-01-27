/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
import {
  Paragraph,
  HeadingTwo,
  Header,
  ContentShow,
  ContentCategory,
  LessContent,
  UL,
  LI,
  Small,
  Button,
  // Emphasis,
  Gif,
  Image,
  // SettingButton,
  DisableSetting,
  Link,
  Instructions,
  ZigZag,
  HeadingThree,
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
// import Text from "../stylecomponents/Text";
// import Emoji from "a11y-react-emoji";

import { SliderUIDesktop, SliderUIMobile } from "../VideoVariables";

import { AccessibilitySetting, TechnicalTheme } from "../MediaVariables";
const header = "Settings";

const SettingsPage = ({ contentProps }) => {
  const {
    navBarRight,
    setNavBarRight,
    navBarComplement,
    setNavBarComplement,
    minimalMode,
    setMinimalMode,
    // lazyLoading,
    // setLazyLoading,
    forDev,
    setForDev,
    setSides,
    // switchSides,
    fullScreen,
    setFullscreen,
    isContentPortrait,
    setAccessible,
    accessible,
    videoControls,
    setVideoControls,
    showAwardsBanner,
    setShowAwardsBanner,
    // downloaded
  } = contentProps;

  const controlVideoMode = () => {
    videoControls ? setVideoControls(false) : setVideoControls(true);
  };
  const moveNavBar = () => {
    navBarRight ? setNavBarRight(false) : setNavBarRight(true);
  };
  const complementNavBar = () => {
    navBarComplement ? setNavBarComplement(false) : setNavBarComplement(true);
  };
  // const turnOnAccessibilitySettings = () => {
  // 	setMinimalMode(true);
  // 	setFullscreen(true);
  // 	setVideoControls(true);
  // 	setNavBarComplement(true);
  // 	setAccessible(true);
  // };
  // const turnOffAccessibilitySettings = () => {
  // 	setMinimalMode(false);
  // 	setFullscreen(false);
  // 	setVideoControls(false);
  // 	setNavBarComplement(false);
  // 	setAccessible(false);
  // };

  const activateAccessibilityMode = () => {
    setMinimalMode(true);
    setFullscreen(true);
    accessible ? setVideoControls(false) : setVideoControls(true);
    accessible ? setNavBarComplement(false) : setNavBarComplement(true);
    accessible ? setAccessible(false) : setAccessible(true);
  };

  const basicMode = () => {
    minimalMode ? setMinimalMode(false) : setMinimalMode(true);
    if (!fullScreen) {
      fullScreen ? setFullscreen(false) : setFullscreen(true);
    } else if (fullScreen && !minimalMode) {
      setFullscreen(true);
    } else {
      setFullscreen(false);
    }
  };

  // const downloadEverything = () => {
  // 	lazyLoading ? setLazyLoading(false) : setLazyLoading(true);
  // };

  const knowCode = () => {
    forDev ? setForDev(false) : setForDev(true);
  };

  const setAwardsBanner = () => {
    showAwardsBanner ? setShowAwardsBanner(false) : setShowAwardsBanner(true);
  };

  //   const failure = () => {
  //     setSides(false);
  //     setTimeout(() => {
  //       setSides(true);
  //     }, 10000);
  //   };

  return (
    <Fragment>
      <ContentShow less>
        <LessContent header={header}>You can change certain aspects of this web app to your liking.</LessContent>
        <div className="less__container">
          {/* <Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
						risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta
						gravida at eget metus. Sed posuere consectetur est at lobortis.
						Maecenas sed diam eget risus varius blandit sit amet non magna.
					</Paragraph> */}
        </div>
      </ContentShow>
      <ContentShow containerLarge more>
        <ZigZag>
          <Header>{header}</Header>
          <Paragraph>
            I want to make sure you have the best experience using my web app, so I created settings that enable you to
            change certain aspects of it.
          </Paragraph>
          <div className="marginBottomMed">
            <Small className="marginTopMed">Refreshing web app resets all settings.</Small>
          </div>
        </ZigZag>
        <ZigZag>
          <HeadingTwo beta>Slider UI</HeadingTwo>
          <ShowIf noAnimation thisValue={minimalMode} thatValue={true}>
            <ShowIf noAnimation thisValue={isContentPortrait} thatValue={true}>
              <Gif className="paddingLRMed" desc="A video of the Slider UI on mobile" url={SliderUIMobile}></Gif>
              <Paragraph>Slider UI was supposed to be the default experience.</Paragraph>
              <Paragraph>It was made for a comfortable one-handed experience on mobile.</Paragraph>
            </ShowIf>

            <ShowIf noAnimation thisValue={isContentPortrait} thatValue={false}>
              <Gif className="paddingLRSm" desc="A video of the Slider UI on desktop" url={SliderUIDesktop}></Gif>
              <Paragraph>Slider UI was supposed to be the default experience.</Paragraph>
              <Paragraph>
                The left and right layout was created because each side is supposed to represent a complete thought. The
                slider was created to bring the thoughts together.
              </Paragraph>
            </ShowIf>
          </ShowIf>
          <ShowIf noAnimation thisValue={minimalMode} thatValue={false}>
            <Paragraph>Slider UI not doing it for you?</Paragraph>
          </ShowIf>
          <ShowIf noAnimation thisValue={minimalMode} thatValue={true}>
            <Button onClick={basicMode}>try it out</Button>
          </ShowIf>
          <ShowIf noAnimation thisValue={minimalMode} thatValue={false}>
            <Button onClick={basicMode}>change it back</Button>
            <Small className="marginTopSm">Thank you for trying it out though, it means a lot.</Small>
          </ShowIf>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>Accessibility</HeadingTwo>
          <Image
            className="paddingLRSm"
            alt="A mockup of an example of the Accessibility Setting on mobile and desktop"
            src={AccessibilitySetting}
          />
          <Paragraph>These settings provide a better experience for the web app.</Paragraph>
          <HeadingThree beta>Accessibility Mode</HeadingThree>
          <ShowIf noAnimation thisValue={accessible} thatValue={false}>
            <Paragraph>Accessibility Mode changes these settings:</Paragraph>
            <UL className="marginBottomMed">
              <LI>Adds Background color to Navigation Bar.</LI>
              <LI>Turns off Slider UI.</LI>
              <LI>Adds controls to video players.</LI>
              <LI>Adds a scrollbar.</LI>
            </UL>
            {/* <Instructions>
						Find more details about these settings below.
					</Instructions> */}
          </ShowIf>
          <ShowIf noAnimation thisValue={accessible} thatValue={true}>
            <Paragraph>You've activated Accessibility Mode</Paragraph>
            <Paragraph>
              If you or someone you know are not able to navigate through my web app, please send any suggestions you
              have to myemail to <Link href="mailto:herbduah@gmail.com">herbduah@gmail.com</Link>
            </Paragraph>
            <Paragraph>Accessibility Mode changes these settings:</Paragraph>
            <UL>
              <LI>Adds Background color to navigation bar.</LI>
              <LI>Turns off the different look and feel.</LI>
              <LI>Adds controls to video players.</LI>
            </UL>
            <Paragraph>It also adds a scrollbar to browsers that allow scrollbars.</Paragraph>
            <Instructions>Find more details about these settings below.</Instructions>
          </ShowIf>
          <ShowIf noAnimation thisValue={accessible} thatValue={true}>
            <Button onClick={activateAccessibilityMode}>De-activate Accessibility Mode</Button>
          </ShowIf>
          <ShowIf noAnimation thisValue={accessible} thatValue={false}>
            <Button onClick={activateAccessibilityMode}>Activate Accessibility Mode</Button>
          </ShowIf>

          <DisableSetting thisValue={minimalMode} thatValue={true} message="This setting only works with Slider UI.">
            <HeadingThree>Move navigation bar {navBarRight ? "right" : "left"}.</HeadingThree>
            <Paragraph>
              This setting moves navigations bar to the {navBarRight ? "right" : "left"}. (It's useful on mobile if
              you're left handed).
            </Paragraph>
            <ShowIf noAnimation thisValue={navBarRight} thatValue={false}>
              <Button onClick={moveNavBar}>Move Navigation Bar right</Button>
            </ShowIf>
            <ShowIf noAnimation thisValue={navBarRight} thatValue={true}>
              <Button onClick={moveNavBar}>Move Navigation Bar left</Button>
            </ShowIf>
          </DisableSetting>

          <HeadingThree> {showAwardsBanner ? "Remove" : "Add"} Awards Banner</HeadingThree>
          <Paragraph>This setting {showAwardsBanner ? "removes" : "adds"} Awwwards banner.</Paragraph>
          <ShowIf noAnimation thisValue={showAwardsBanner} thatValue={true}>
            <Button onClick={setAwardsBanner}>Remove Awwwards Banner</Button>
          </ShowIf>
          <ShowIf noAnimation thisValue={showAwardsBanner} thatValue={false}>
            <Button onClick={setAwardsBanner}>Add Awwwards Banner</Button>
          </ShowIf>

          <HeadingThree>{videoControls ? "Remove" : "Add"} controls to videos/gifs</HeadingThree>
          <Paragraph>This setting lets you {videoControls ? "remove" : "add"} controls for the videos/gifs.</Paragraph>
          <ShowIf noAnimation thisValue={videoControls} thatValue={true}>
            <Button onClick={controlVideoMode}>Remove controls</Button>
          </ShowIf>
          <ShowIf noAnimation thisValue={videoControls} thatValue={false}>
            <Button onClick={controlVideoMode}>Add controls</Button>
          </ShowIf>

          <DisableSetting
            thisValue={minimalMode}
            thatValue={false}
            message="This setting only works when Slider UI is turned off.">
            <HeadingThree>Navigation Bar background color</HeadingThree>
            <Paragraph>
              {" "}
              This setting adds a background color to the navigation bar. (Only useful for mobile and tablet devices)
            </Paragraph>
            <ShowIf noAnimation thisValue={navBarComplement} thatValue={false}>
              <Button onClick={complementNavBar}>Add background color</Button>
              {/* <Small>
							Complementary
						</Small> */}
            </ShowIf>
            <ShowIf noAnimation thisValue={navBarComplement} thatValue={true}>
              <Button onClick={complementNavBar}>Remove background color</Button>
            </ShowIf>
          </DisableSetting>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>Tone</HeadingTwo>
          <Image
            className="paddingLRSm"
            alt="A mockup of an example of the Technical theme difference"
            src={TechnicalTheme}
          />
          <Paragraph>Tones pertain to specific wordings on different areas of the web app.</Paragraph>
          <HeadingThree>Technical Tone</HeadingThree>
          <ShowIf noAnimation thisValue={forDev} thatValue={false}>
            <Paragraph>
              Activate this if you recognize keywords such as: HTML5, ReactJS, UX Design, Prototyping, Javascript, CSS,
              User Interface, User Experience etc... (Or If you want to learn about those keywords).
            </Paragraph>
          </ShowIf>
          <ShowIf noAnimation thisValue={forDev} thatValue={true}>
            <Paragraph>
              Some parts of the site have a technical tone, if you don’t like it you can switch to a more normal
              non-technical tone.
            </Paragraph>
          </ShowIf>
          <ShowIf noAnimation thisValue={forDev} thatValue={true}>
            <Button onClick={knowCode}>change to non-technical tone</Button>
          </ShowIf>
          <ShowIf noAnimation thisValue={forDev} thatValue={false}>
            <Button onClick={knowCode}>change to technical tone</Button>
          </ShowIf>
        </ZigZag>
        <ContentCategory category="customize" />
      </ContentShow>
    </Fragment>
  );
};

export default SettingsPage;
