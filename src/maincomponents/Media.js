import React from "react";
import ReactSVG from "react-svg";
import ReactPlayer from "react-player";
// import ImageLoader from "./ImageLoader";
import LazyLoad from "react-lazyload";

export const Media = props => {
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
				<ReactPlayer
					url={props.url}
					width='100%'
					height='100%'
					playing
					loop
					muted
					playsinline
				/>
			);
		case "video":
			return <ReactPlayer url={props.url} />;
		case "image":
			return (
				<LazyLoad height={props.height ? props.height : "auto"} offset={200}>
					<img
						src={props.src}
						// height={props.height}
						// width={props.width}
						// onClick={props.onClick}
						// onLoad={props.onLoad}
						alt={props.alt}
					/>
				</LazyLoad>
			);
		default:
			return null;
	}
};

export default Media;

{
	/* <ReactPlayer
								url={testVideo}
								width='100%'
								height='100%'
								playing
								loop
								muted
								playsinline
							/> */
}
