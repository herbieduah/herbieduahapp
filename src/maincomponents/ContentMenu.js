import React, { useContext } from "react";
import { globalState } from "../State";
import Content from "./Content";
import Menu from "./Menu";
import { ContentMenuContainer } from "../stylecomponents/ContentMenuContainer";
// import { getDimensionObject } from "../helpers";
// import ReactResizeDetector from "react-resize-detector";

export const ContentMenu = props => {
	// const { onContentResizeWidth, onContentResizeHeight } = useContext(
	// 	globalState
	// );
	// const onResize = (width, height) => {
	// 	onContentResizeWidth(width);
	// 	onContentResizeHeight(height);
	// };
	// const [ref] = useDimensions();
	// const ref = useRef();
	const switchSides = props.switchSides;
	// const { setDimensions } = useContext(globalState);

	// useLayoutEffect(() => {
	// 	if (ref.current) {
	// 		const measure = () =>
	// 			window.requestAnimationFrame(() =>
	// 				setDimensions(getDimensionObject(ref.current))
	// 			);
	// 		measure();

	// 		window.addEventListener("resize", measure);
	// 		window.addEventListener("scroll", measure);

	// 		return () => {
	// 			window.removeEventListener("resize", measure);
	// 			window.removeEventListener("scroll", measure);
	// 		};
	// 	}
	// }, [ref, setDimensions]);

	return (
		<ContentMenuContainer
			className={`herbieduah${switchSides ? "__content" : "__menu"}`}
			// ref={switchSides ? ref : null}
		>
			{switchSides ? <Content /> : <Menu />}
		</ContentMenuContainer>
	);
};

export default ContentMenu;
