import {
	useState,
	useEffect,
	useCallback,
	useLayoutEffect,
	useContext
} from "react";
import { themes } from "./stylecomponents/Theme";
import { globalState } from "./State";
export function useWindowResize() {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	const listener = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener("resize", listener);
		return () => {
			window.removeEventListener("resize", listener);
		};
	}, []);

	return {
		width,
		height
	};
}

export const mobileSize = 500;
export const gutterSize = 30;
export const sliderMinSize = 0.4;
export const sliderMinSizeMobile = 0.35;
export const sliderDesktopWidth = "60";
export const sliderMobileWidth = "60";

let browserWidth = window.innerWidth;
let browserHeight = window.innerHeight;
window.addEventListener("resize", function() {
	browserWidth = window.innerWidth;
	browserHeight = window.innerHeight;
});

let defaultRevealValues = {
	browserWidth,
	browserHeight,
	contentWidth: browserWidth * 0.5,
	contentHeight: browserHeight * 0.5
};

export function isMobile(width, height) {
	if (height > width) {
		return true;
	} else {
		return false;
	}
}

export function count(counter) {
	return (counter += 1);
}

export function splitDir(width, height) {
	let value;
	isMobile(width, height) ? (value = "horizontal") : (value = "vertical");
	return value;
}

export function minSliderSize(width, height) {
	let minSize, maxSize;
	isMobile(width, height)
		? (minSize = height * sliderMinSizeMobile)
		: (minSize = width * sliderMinSize);
	isMobile(width, height)
		? (maxSize = height - minSize)
		: (maxSize = width - minSize);
	return {
		minSize,
		maxSize
	};
}

export function doneResizing(direction, localStorageDirection) {
	if (direction !== localStorageDirection) {
		window.location.reload();
	}
}

export function showMore(dimensions) {
	let showingMore = false;
	let leftTopWidth = dimensions.leftTopWidth;
	let leftTopHeight = dimensions.leftTopHeight;
	let browserWidth = dimensions.browserWidth;
	let browserHeight = dimensions.browserHeight;
	if (isMobile(browserWidth, browserHeight)) {
		if (leftTopHeight > browserHeight * 0.55) {
			showingMore = true;
		} else {
			showingMore = false;
		}
	} else {
		if (leftTopWidth > browserWidth * 0.56) {
			showingMore = true;
		} else {
			showingMore = false;
		}
	}
	return showingMore;
}

export function revealValues(revealValuesState = defaultRevealValues) {
	let {
		browserWidth,
		browserHeight,
		contentWidth,
		contentHeight
	} = revealValuesState;
	let menuWidth = isMobile(browserWidth, browserHeight)
		? contentWidth
		: browserWidth - contentWidth - gutterSize;
	let menuHeight = isMobile(browserWidth, browserHeight)
		? browserHeight - contentHeight - gutterSize
		: contentHeight;
	let contentWidthPercentage = (contentWidth / browserWidth) * 100;
	let contentHeightPercentage = (contentHeight / browserHeight) * 100;
	let menuWidthPercentage = (menuWidth / browserWidth) * 100;
	let menuHeightPercentage = (menuHeight / browserHeight) * 100;
	let showingMoreDesktop = contentWidthPercentage > 55 ? true : false;
	let showingMoreMobile = contentHeightPercentage > 55 ? true : false;
	let isShowingMore = isMobile(browserWidth, browserHeight)
		? showingMoreMobile
		: showingMoreDesktop;
	let revealValuesObj = {
		browserWidth,
		browserHeight,
		contentWidth,
		menuWidth,
		menuHeight,
		contentWidthPercentage,
		contentHeightPercentage,
		menuWidthPercentage,
		menuHeightPercentage,
		isShowingMore,
		sliderMinSize,
		sliderMinSizeMobile
	};
	return revealValuesObj;
}

export function menu(menu, current) {
	let currentMenu = menu === current ? "" : menu;
	return currentMenu;
}

export function getCurrentTheme(theDefaultTheme, theTheme) {
	const found = themes.find(function(element) {
		return element.name === theTheme;
	});
	const merged = Object.assign(theDefaultTheme, found.properties);
	localStorage.setItem("currentThemeObject", JSON.stringify(merged));
	const currentThemeObject = JSON.parse(
		localStorage.getItem("currentThemeObject")
	);
	return currentThemeObject;
}

export function getDimensionObject(node) {
	const rect = node.getBoundingClientRect();

	if (rect.toJSON) {
		return rect.toJSON();
	} else {
		return {
			width: rect.width,
			height: rect.height,
			top: rect.top || rect.y,
			left: rect.left || rect.x,
			x: rect.x || rect.left,
			y: rect.y || rect.top,
			right: rect.right,
			bottom: rect.bottom
		};
	}
}

export function useDimensions() {
	// const [dimensions, setDimensions] = useState({});
	const { dimensions, setDimensions } = useContext(globalState);
	const [node, setNode] = useState(null);

	const ref = useCallback(node => {
		setNode(node);
	}, []);

	useLayoutEffect(() => {
		if (node) {
			const measure = () =>
				window.requestAnimationFrame(() =>
					setDimensions(getDimensionObject(node))
				);
			measure();

			window.addEventListener("resize", measure);
			window.addEventListener("scroll", measure);

			return () => {
				window.removeEventListener("resize", measure);
				window.removeEventListener("scroll", measure);
			};
		}
	}, [node, setDimensions]);

	return [ref, dimensions, node];
}
