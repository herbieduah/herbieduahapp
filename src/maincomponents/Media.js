import React, { Fragment } from "react";
import ReactSVG from "react-svg";
import ReactPlayer from "react-player";
// import ImageLoader from "./ImageLoader";
import {
	LazyLoadImage,
	LazyLoadComponent
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
				<LazyLoadComponent>
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
				</LazyLoadComponent>
			);
		case "video":
			return (
				<LazyLoadComponent>
					<div aria-describedby={props.desc}>
						<ReactPlayer
							url={props.url}
							className={props.className}
							width={props.width || "100%"}
							height={props.height || "100%"}
						/>
					</div>
				</LazyLoadComponent>
			);
		case "image":
			return (
				<Fragment>
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
				</Fragment>
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
