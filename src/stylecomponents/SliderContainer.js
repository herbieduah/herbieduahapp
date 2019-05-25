import styled from "styled-components";

export const SliderContainer = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	position: absolute;
	outline: none;
	overflow: hidden;
	user-select: text;
	${props =>
		props.direction === "vertical"
			? `flex-direction: row;
				left: 0;
				right: 0;`
			: `bottom: 0;
				flex-direction: column;
				min-height: 100%;
				top: 0;
				width: 100%;`}
`;

export default SliderContainer;
