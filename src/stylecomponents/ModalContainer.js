import styled from "styled-components";
// import Modal from "../maincomponents/Modal";
import {
	fadeEnter,
	zoomEnter,
	zoomLeave,
	slideDownEnter,
	slideLeftEnter,
	slideDownLeave,
	slideLeftLeave
} from "./Animations";
import {
	absoluteOverlay,
	navBarSize,
	hideScrollbar,
	contentMenuPadding,
	mainTransition,
	mobile
} from "./StyleHelpers";

import {
	modalFullScreenBg,
	modalFullScreenBgColor,
	modalFullScreenBgMobile
} from "./Themes/ThemeVariables";

export const ModalContainer = styled.div`
	${absoluteOverlay};
	z-index: 50;
	.modal,
	.modal-mask {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 50;
	}

	.modal {
		position: fixed;
	}

	/* -- mask -- */
	.modal-mask {
		position: absolute;
		background: rgba(0, 0, 0, 0.3);
	}

	/* -- dialog -- */
	.modal-dialog {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 50;
		width: 100vw;
		height: 100vh;
		
		&::before {
			content:'';
			/* filter: blur(5px); */
			${absoluteOverlay}
			background: ${modalFullScreenBg};
			background-color: ${modalFullScreenBgColor};
			${mobile} {
				background: ${modalFullScreenBgMobile};	
			}
			opacity: .9;
			z-index: -1;
		}
	}
	.modal__container {
		max-width: 740px;
		width: 100%;
		margin: 0 auto;
		padding-top: ${navBarSize};
		${hideScrollbar}
		${contentMenuPadding}
		overflow: auto;
		.react-tabs {
			&__tab-list {
				padding: 0;
			}
		}
		.subMenu {
			padding: 0;
			&__item {
				margin-bottom: 1.5rem;
			}
		}
	}

	.modal-dialog:focus {
		outline: none;
	}

	/* -- close button -- */
	.modal-close {
		position: absolute;
		cursor: pointer;
		top: 16px;
		right: 16px;
		width: 16px;
		height: 16px;
	}

	.modal-close:before,
	.modal-close:after {
		position: absolute;
		content: "";
		height: 2px;
		width: 100%;
		top: 50%;
		left: 0;
		margin-top: -1px;
		background: #999;
		border-radius: 100%;
		${mainTransition};
	}

	.modal-close:before {
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.modal-close:after {
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
	}

	.modal-close:hover:before,
	.modal-close:hover:after {
		background: #333;
	}

	.modal-fade-enter {
		animation: ${fadeEnter} both ease-in;
	}

	.modal-fade-leave {
		animation: ${fadeEnter} both ease-out;
	}

	.modal-zoom-enter {
		animation: ${zoomEnter} both cubic-bezier(0.4, 0, 0, 1.5);
	}

	.modal-zoom-leave {
		animation: ${zoomLeave} both;
	}

	/* -- slideDown -- */

	.modal-slideDown-enter {
		animation: ${slideDownEnter} both cubic-bezier(0.4, 0, 0, 1.5);
	}

	.modal-slideDown-leave {
		animation: ${slideDownLeave} both;
	}

	/* -- slideLeft -- */

	.modal-slideLeft-enter {
		animation: ${slideLeftEnter} both cubic-bezier(0.4, 0, 0, 1.5);
	}

	.modal-slideLeft-leave {
		animation: ${slideLeftLeave} both;
	}

	/* -- slideRight -- */
	@-webkit-keyframes modal-slideRight-enter {
		from {
			-webkit-transform: translate3d(150px, 0, 0);
			transform: translate3d(150px, 0, 0);
		}
	}

	@keyframes modal-slideRight-enter {
		from {
			-webkit-transform: translate3d(150px, 0, 0);
			transform: translate3d(150px, 0, 0);
		}
	}

	.modal-slideRight-enter {
		-webkit-animation: modal-slideRight-enter both cubic-bezier(0.4, 0, 0, 1.5);
		animation: modal-slideRight-enter both cubic-bezier(0.4, 0, 0, 1.5);
	}

	@-webkit-keyframes modal-slideRight-leave {
		to {
			-webkit-transform: translate3d(150px, 0, 0);
			transform: translate3d(150px, 0, 0);
		}
	}

	@keyframes modal-slideRight-leave {
		to {
			-webkit-transform: translate3d(150px, 0, 0);
			transform: translate3d(150px, 0, 0);
		}
	}

	.modal-slideRight-leave {
		-webkit-animation: modal-slideRight-leave both;
		animation: modal-slideRight-leave both;
	}

	/* -- slideUp -- */
	@-webkit-keyframes modal-slideUp-enter {
		from {
			-webkit-transform: translate3d(0, 100px, 0);
			transform: translate3d(0, 100px, 0);
		}
	}

	@keyframes modal-slideUp-enter {
		from {
			-webkit-transform: translate3d(0, 100px, 0);
			transform: translate3d(0, 100px, 0);
		}
	}

	.modal-slideUp-enter {
		-webkit-animation: modal-slideUp-enter both cubic-bezier(0.4, 0, 0, 1.5);
		animation: modal-slideUp-enter both cubic-bezier(0.4, 0, 0, 1.5);
	}

	@-webkit-keyframes modal-slideUp-leave {
		to {
			-webkit-transform: translate3d(0, 100px, 0);
			transform: translate3d(0, 100px, 0);
		}
	}

	@keyframes modal-slideUp-leave {
		to {
			-webkit-transform: translate3d(0, 100px, 0);
			transform: translate3d(0, 100px, 0);
		}
	}

	.modal-slideUp-leave {
		-webkit-animation: modal-slideUp-leave both;
		animation: modal-slideUp-leave both;
	}

	/* -- flip -- */
	@-webkit-keyframes modal-flip-enter {
		from {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
			transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
		}
		70% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
			transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
		}
		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px);
		}
	}

	@keyframes modal-flip-enter {
		from {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
			transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
		}
		70% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
			transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
		}
		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px);
		}
	}

	.modal-flip-enter {
		-webkit-animation: modal-flip-enter both ease-in;
		animation: modal-flip-enter both ease-in;
		-webkit-backface-visibility: visible !important;
		backface-visibility: visible !important;
	}

	@-webkit-keyframes modal-flip-leave {
		from {
			-webkit-transform: perspective(400px);
			transform: perspective(400px);
		}
		30% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
			transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
		}
		to {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
			transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
		}
	}

	@keyframes modal-flip-leave {
		from {
			-webkit-transform: perspective(400px);
			transform: perspective(400px);
		}
		30% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
			transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
		}
		to {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
			transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
		}
	}

	.modal-flip-leave {
		-webkit-animation: modal-flip-leave both;
		animation: modal-flip-leave both;
		-webkit-backface-visibility: visible !important;
		backface-visibility: visible !important;
	}

	/* -- rotate -- */
	@-webkit-keyframes modal-rotate-enter {
		from {
			-webkit-transform: rotate3d(0, 0, 1, -180deg) scale3d(0.3, 0.3, 0.3);
			transform: rotate3d(0, 0, 1, -180deg) scale3d(0.3, 0.3, 0.3);
		}
	}

	@keyframes modal-rotate-enter {
		from {
			-webkit-transform: rotate3d(0, 0, 1, -180deg) scale3d(0.3, 0.3, 0.3);
			transform: rotate3d(0, 0, 1, -180deg) scale3d(0.3, 0.3, 0.3);
		}
	}

	.modal-rotate-enter {
		-webkit-animation: modal-rotate-enter both;
		animation: modal-rotate-enter both;
		-webkit-transform-origin: center;
		transform-origin: center;
	}

	@-webkit-keyframes modal-rotate-leave {
		to {
			-webkit-transform: rotate3d(0, 0, 1, 180deg) scale3d(0.3, 0.3, 0.3);
			transform: rotate3d(0, 0, 1, 180deg) scale3d(0.3, 0.3, 0.3);
		}
	}

	@keyframes modal-rotate-leave {
		to {
			-webkit-transform: rotate3d(0, 0, 1, 180deg) scale3d(0.3, 0.3, 0.3);
			transform: rotate3d(0, 0, 1, 180deg) scale3d(0.3, 0.3, 0.3);
		}
	}

	.modal-rotate-leave {
		-webkit-animation: modal-rotate-leave both;
		animation: modal-rotate-leave both;
		-webkit-transform-origin: center;
		transform-origin: center;
	}

	/* -- door -- */
	@-webkit-keyframes modal-door-enter {
		from {
			-webkit-transform: scale3d(0, 1, 1);
			transform: scale3d(0, 1, 1);
		}
	}

	@keyframes modal-door-enter {
		from {
			-webkit-transform: scale3d(0, 1, 1);
			transform: scale3d(0, 1, 1);
		}
	}

	.modal-door-enter {
		-webkit-animation: modal-door-enter both cubic-bezier(0.4, 0, 0, 1.5);
		animation: modal-door-enter both cubic-bezier(0.4, 0, 0, 1.5);
	}

	@-webkit-keyframes modal-door-leave {
		60% {
			-webkit-transform: scale3d(0.01, 1, 1);
			transform: scale3d(0.01, 1, 1);
		}
		to {
			-webkit-transform: scale3d(0, 1, 0.1);
			transform: scale3d(0, 1, 0.1);
		}
	}

	@keyframes modal-door-leave {
		60% {
			-webkit-transform: scale3d(0.01, 1, 1);
			transform: scale3d(0.01, 1, 1);
		}
		to {
			-webkit-transform: scale3d(0, 1, 0.1);
			transform: scale3d(0, 1, 0.1);
		}
	}

	.modal-door-leave {
		-webkit-animation: modal-door-leave both;
		animation: modal-door-leave both;
	}
`;

export default ModalContainer;
