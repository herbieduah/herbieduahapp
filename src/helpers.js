import { useState, useEffect } from "react";
import { themes } from "./stylecomponents/Theme";
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

const mobileSize = 500;
export const gutterSize = 30;
export const sliderMinSize = 0.4;
export const sliderMinSizeMobile = 0.35;
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

export function isMobile(width) {
	if (width < mobileSize) {
		return true;
	} else {
		return false;
	}
}

export function count(counter) {
	return (counter += 1);
}

export function splitDir(width) {
	let value;
	isMobile(width) ? (value = "vertical") : (value = "horizontal");
	return value;
}

export function flexDir(width) {
	let value;
	if (width < mobileSize) {
		value = "column";
	} else {
		value = "row";
	}
	return value;
}

export function widthPercentage(width, height) {
	let finalMinSize;
	isMobile(width)
		? (finalMinSize = height * sliderMinSizeMobile)
		: (finalMinSize = width * sliderMinSize);
	return finalMinSize;
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
	if (isMobile(browserWidth)) {
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
	let menuWidth = isMobile(browserWidth)
		? contentWidth
		: browserWidth - contentWidth - gutterSize;
	let menuHeight = isMobile(browserWidth)
		? browserHeight - contentHeight - gutterSize
		: contentHeight;
	let contentWidthPercentage = (contentWidth / browserWidth) * 100;
	let contentHeightPercentage = (contentHeight / browserHeight) * 100;
	let menuWidthPercentage = (menuWidth / browserWidth) * 100;
	let menuHeightPercentage = (menuHeight / browserHeight) * 100;
	let showingMoreDesktop = contentWidthPercentage > 55 ? true : false;
	let showingMoreMobile = contentHeightPercentage > 55 ? true : false;
	let isShowingMore = isMobile(browserWidth)
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
	var found = themes.find(function(element) {
		return element.name === theTheme;
	});
	let merged = Object.assign(theDefaultTheme, found.properties);
	return merged;
}
