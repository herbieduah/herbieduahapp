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
	isMobile(width) ? (value = "horizontal") : (value = "vertical");
	return value;
}

export function minSliderSize(width, height) {
	let minSize, maxSize;
	isMobile(width)
		? (minSize = height * sliderMinSizeMobile)
		: (minSize = width * sliderMinSize);
	isMobile(width) ? (maxSize = height - minSize) : (maxSize = width - minSize);
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
