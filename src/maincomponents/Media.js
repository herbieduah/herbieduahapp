import React, { Fragment, useContext } from "react";
import ReactSVG from "react-svg";
import ReactPlayer from "react-player";
import { globalState } from "../State";
// import ImageLoader from "./ImageLoader";
// import {
// 	LazyLoadImage,
// 	LazyLoadComponent
// } from "react-lazy-load-image-component";
import Img from "react-image";
import VisibilitySensor from "react-visibility-sensor";
// import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadWrapper = props => {
	const { lazyLoading } = useContext(globalState);
	return (
		<Fragment>
			{lazyLoading ? (
				<VisibilitySensor offset={{ top: 400 }}>
					{props.children}
				</VisibilitySensor>
			) : (
				<Fragment>{props.children}</Fragment>
			)}
		</Fragment>
	);
};
const Media = props => {
	const type = props.type;
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
						url={props.url}
						width={props.width || "100%"}
						height={props.height || "100%"}
						controls={false}
						playing
						loop
						muted
						playsinline
						aria-describedby={props.desc}
						className={props.className}
					/>
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
					<Img
						alt={props.alt}
						width={props.width || "100%"}
						height={props.height || "100%"}
						src={props.src}
						className={props.className || ""}
					/>
				</LazyLoadWrapper>
			);
		default:
			return null;
	}
};

export default Media;

/* <ReactPlayer
								url={testVideo}
								width='100%'
								height='100%'
								playing
								loop
								muted
								playsinline
							/> */

// {
/* <Fragment>
{props.nolazyload ? (
<img
alt={props.alt}
width={props.width || "100%"}
height={props.height || "100%"}
src={props.src}
className={props.className || ""}
threshold={250}
/>
) : (
<LazyLoadImage
alt={props.alt}
effect='blur'
width={props.width || "100%"}
height={props.height || "100%"}
src={props.src}
className={props.className}
threshold={250}
/>
)}
</Fragment> */
// }
