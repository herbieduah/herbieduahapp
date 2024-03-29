import React, { Fragment, useContext } from "react";
import ReactSVG from "react-svg";
import ReactPlayer from "react-player";
import { globalState } from "../State";
import { Image as CloudImage, Video, Transformation } from "cloudinary-react";
import { isMobileOnly } from "react-device-detect";
// import ImageLoader from "./ImageLoader";
// import {
// 	LazyLoadImage,
// 	LazyLoadComponent
// } from "react-lazy-load-image-component";
// import Img from "react-image";
import VisibilitySensor from "react-visibility-sensor";
const mediaWidth = isMobileOnly ? "400" : "720";
// const mediaWidth = "720";
const lazyLoadOffset = isMobileOnly ? 400 : 1000;
// const mediaSize = isMobileOnly ? 1 : 0;
const LazyLoadWrapper = (props) => {
  // const { lazyLoading } = useContext(globalState);
  return (
    // <Fragment>
    // 	{lazyLoading ? (
    // 		<VisibilitySensor offset={{ top: 400 }}>
    // 			{props.children}
    // 		</VisibilitySensor>
    // 	) : (
    // 		<Fragment>{props.children}</Fragment>
    // 	)}
    // </Fragment>
    <VisibilitySensor offset={{ top: lazyLoadOffset }}>{props.children}</VisibilitySensor>
  );
};

const Media = (props) => {
  const type = props.type;
  const { videoControls } = useContext(globalState);
  switch (type) {
    case "icon":
      return (
        <i>
          <ReactSVG src={props.src} className={props.className} />
        </i>
      );
    case "gif":
      return (
        <LazyLoadWrapper>
          <ReactPlayer
            url={props.url[1]}
            width={props.width || "100%"}
            height={props.height || "100%"}
            controls={videoControls}
            playing
            loop
            muted
            playsinline
            aria-describedby={props.desc}
            className={props.className}
          />
        </LazyLoadWrapper>
      );
    case "cloud-gif":
      return (
        <LazyLoadWrapper>
          <Video
            cloudName="dwccyjn5e"
            publicId={`herbieduahapp/${props.url[0]}`}
            controls={videoControls}
            preload="auto"
            autoPlay
            muted
            playsInline
            loop
            aria-describedby={props.desc}
            className={props.className || ""}
            inline="true">
            <Transformation width="740" crop="scale" />
          </Video>
        </LazyLoadWrapper>
      );
    case "video":
      return (
        <LazyLoadWrapper>
          <div aria-describedby={props.desc}>
            <ReactPlayer
              url={props.url}
              className={props.className}
              width={props.width || "100%"}
              height={props.height || "100%"}
            />
          </div>
        </LazyLoadWrapper>
      );
    case "image":
      return (
        <LazyLoadWrapper>
          <img alt={props.alt} src={props.src[1]} srcSet={`${props.src[0]} 750w`} className={props.className || ""} />
        </LazyLoadWrapper>
      );
    case "cloud-image":
      return (
        <LazyLoadWrapper>
          <CloudImage
            cloudName="dwccyjn5e"
            publicId={`images/${props.src[2]}`}
            crop="scale"
            dpr="2.0"
            alt={props.alt}
            className={props.className || ""}>
            <Transformation width="630" crop="scale" />
          </CloudImage>
        </LazyLoadWrapper>
      );
    default:
      return null;
  }
};

export default Media;
