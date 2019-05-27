import React, { Component, Fragment } from "react";
import { Image } from "../stylecomponents/Base";
// import Text from "./stylecomponents/Text";
const _loaded = {};

class ImageLoader extends Component {
	//initial state: image loaded stage
	state = {
		loaded: _loaded[this.props.src]
	};

	//define our loading and loaded image classes
	//   static defaultProps = {
	//     className: "",
	//     loadingClassName: "img-loading",
	//     loadedClassName: "img-loaded"
	//   };

	//image onLoad handler to update state to loaded
	onLoad = () => {
		_loaded[this.props.src] = true;
		this.setState(() => ({ loaded: true }));
	};

	render() {
		let { className, loadedClassName, loadingClassName, ...props } = this.props;

		className = `${className} ${
			this.state.loaded ? loadedClassName : loadingClassName
		}`;
		return (
			<Fragment>
				<Image
					src={this.props.src}
					height={this.props.height}
					width={this.props.width}
					alt={this.props.alt}
					onClick={this.props.onClick}
					loaded={this.state.loaded}
					onLoad={this.onLoad}
				/>

				{/* {this.state.loaded ? <Image
          src={this.props.src}
          height={this.props.height}
          width={this.props.width}
          alt={this.props.alt}
          onClick={this.props.onClick}
          loaded={this.state.loaded}
          onLoad={this.onLoad}
        /> : (
          <ImageLoading
            imgHeight={this.props.height}
            imgWidth={this.props.width}
          >
          <Image
          src={this.props.src}
          height={this.props.height}
          width={this.props.width}
          alt={this.props.alt}
          onClick={this.props.onClick}
          loaded={this.state.loaded}
          onLoad={this.onLoad}
          className="imgHide"
        />
            <Text className="altText">{this.props.alt}Testing 1 2 3</Text>
          </ImageLoading>
        )} */}
			</Fragment>
		);
		//   <Image
		//     src={this.props.src}
		//     height={this.props.height}
		//     width={this.props.width}
		//     onClick={this.props.onClick}
		//     loaded={this.state.loaded}
		//     onLoad={this.onLoad}
		//   />
		// ) : (
		//   <ImageLoading />
		// );
	}
}

export default ImageLoader;
