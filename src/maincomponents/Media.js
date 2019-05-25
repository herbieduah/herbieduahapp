import React, { useContext } from "react";
import ReactSVG from "react-svg";
import ReactPlayer from "react-player";
import ImageLoader from "./ImageLoader";
import LazyLoad from "react-lazy-load";

export const Media = props => {
	const type = this.props.type;
	switch (type) {
		case "icon":
			return (
				<i>
					<ReactSVG src={this.props.src} className={this.props.className} />
				</i>
			);
		case "video":
			return <ReactPlayer url={this.props.url} />;
		case "image":
			return (
				<LazyLoad>
					<ImageLoader
						src={this.props.src}
						height={this.props.height}
						width={this.props.width}
						onClick={this.props.onClick}
						onLoad={this.onLoad}
					/>
				</LazyLoad>
			);
		default:
			return null;
	}
};

export default Media;
