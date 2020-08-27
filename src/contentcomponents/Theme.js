/* eslint-disable no-unused-expressions */
import React, { Fragment } from "react";
// import Media from "../maincomponents/Media";
// import Fade from "react-reveal/Fade";
// import Text from "../stylecomponents/Text";
import {
  ContentShow,
  // ComingSoon,
  Paragraph,
  LessContent,
  Small,
  ContentCategory,
  Button,
  Header,
  ZigZag,
  HeadingTwo,
  Instructions,
  Image,
} from "../ContentHelpers";
import { ShowIf } from "../ComponentHelpers";
import { TotallyNinetyTheme, MatrixTheme, StarWarsTheme } from "../MediaVariables";

const header = "Themes";

const ThemePage = ({ contentProps }) => {
  const { currentTheme, setTheme } = contentProps;
  const setMatrixTheme = () => {
    setTheme("matrix");
  };
  const setStarWarsTheme = () => {
    setTheme("starwars");
  };
  const setNinetiesTheme = () => {
    setTheme("nineties");
  };

  // const snapMessage = () => {
  // 	setTimeout(() => {
  // 		return `It's been 10 seconds, hope you are digging it`;
  // 	}, 10000);
  // };
  const isMatrix = currentTheme === "matrix" ? true : false;
  const isStarWars = currentTheme === "starwars" ? true : false;
  const isNineties = currentTheme === "nineties" ? true : false;
  // const setNigerianTheme = () => {
  // 	currentTheme('nigerian');
  // };

  // const starWarsTheme = () => {
  // 	currentTheme('starwars');
  // };

  return (
    <Fragment>
      <ContentShow less>
        <LessContent header={header}>You can change the theme of the whole site.</LessContent>
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
          <Header beta>{header}</Header>
          <Paragraph>Themes give the web app a completely new look.</Paragraph>
          <Small>I save your theme for when you come back.</Small>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>Matrix</HeadingTwo>
          <Image className="paddingLRSm" alt="A mockup of the Matrix theme in Desktop and Mobile" src={MatrixTheme} />
          <Paragraph>This Matrix theme is based on the Matrix Trilogy.</Paragraph>
          <ShowIf noAnimation thisValue={isMatrix} thatValue={false}>
            <Button onClick={setMatrixTheme}>Take the Red Pill</Button>
            {/* <Small>
							You stay in Wonderland, and I show you how deep the rabbit hole
							goes...
						</Small> */}
          </ShowIf>
          <ShowIf noAnimation thisValue={isMatrix} thatValue={true}>
            <Paragraph>You are currently in the Matrix.</Paragraph>

            <Instructions>Select a background to turn off theme</Instructions>
          </ShowIf>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>Star Wars</HeadingTwo>
          <Image
            className="paddingLRSm"
            alt="A mockup of the Star Wars theme in Desktop and Mobile"
            src={StarWarsTheme}
          />
          <Paragraph>A long time ago in a galaxy far, far away...</Paragraph>
          <ShowIf noAnimation thisValue={isStarWars} thatValue={false}>
            <Button onClick={setStarWarsTheme}>Feel the Force</Button>
          </ShowIf>
          <ShowIf noAnimation thisValue={isStarWars} thatValue={true}>
            <Paragraph>
              Why can't Darth Vader find love? Because he keeps looking for love in Alderaan places.
            </Paragraph>
            <Instructions>Select a background to turn off theme</Instructions>
          </ShowIf>
        </ZigZag>
        <ZigZag>
          <HeadingTwo>Totally 90s</HeadingTwo>
          <Image
            className="paddingLRSm"
            alt="A mockup of the Totally 90s theme in Desktop and Mobile"
            src={TotallyNinetyTheme}
          />
          <Paragraph>Here is a theme with some 90s nostalgia.</Paragraph>
          <ShowIf noAnimation thisValue={isNineties} thatValue={false}>
            <Button onClick={setNinetiesTheme}>get jiggy with it</Button>
          </ShowIf>
          <ShowIf noAnimation thisValue={isNineties} thatValue={true}>
            <Paragraph>Duuuude like totally.</Paragraph>
            <Instructions>Select a background to turn off theme</Instructions>
          </ShowIf>
        </ZigZag>
        <ContentCategory category="customize" />
      </ContentShow>
    </Fragment>
  );
};

export default ThemePage;
