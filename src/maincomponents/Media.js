import React from "react";
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
						width='100%'
						height='100%'
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
						<ReactPlayer url={props.url} className={props.className} />
					</div>
				</LazyLoadComponent>
			);
		case "image":
			return (
				<LazyLoadImage
					alt={props.alt}
					effect='blur'
					src={props.src}
					className={props.className}
					threshold={250}
				/>
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
