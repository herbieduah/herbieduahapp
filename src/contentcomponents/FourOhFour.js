/* eslint-disable no-unused-expressions */
import React from "react";
import { Paragraph, Header, Gif, Emphasis, HeadingOne } from "../ContentHelpers";
import Emoji from "a11y-react-emoji";
import { videosofme404 } from "../VideoVariables";
// import fourohfour from "../media/videos/videosOfme/404.mp4";
// import { videosofme404 } from "../media/appVideos/videosofme404.mp4";
// import { from } from "rxjs";
const header = "404";

const FourOhFourPage = () => (
  <div className="container">
    <HeadingOne className="text-center">{header}</HeadingOne>
    <Emphasis className="text-center">
      Oh man <Emoji className="emoji text-center" symbol="🙁" label="sad face" />
    </Emphasis>
    <Gif url={videosofme404} />
    <Emphasis className="text-center">You stumbled on the wrong page.</Emphasis>
  </div>
);

export default FourOhFourPage;
