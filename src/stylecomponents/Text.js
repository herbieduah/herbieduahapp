//Text Styled Components file for my web app.
import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile, mainTransition, tablet, crossOut, stripButtonStyle } from "./StyleHelpers";

import {
  CTAColor,
  fontColor,
  appfontFamily,
  appfontFamilyTertiary,
  appfontFamilySecondary,
  navBarButtonColor,
  buttonColor,
  buttonColorHoverFocus,
  navBarButtonActive,
  navBarHoverFocus,
  CTAUnderline,
  colorSlightOpacity,
  buttonBorder,
  buttonBackground,
  buttonBackgroundHoverFocus,
  buttonBorderFocus,
  buttonBorderActive,
  colorLight,
} from "./Themes/ThemeVariables";

const baseStyle = css`
  font-family: ${(props) => {
    if (props.tertiary) return appfontFamilyTertiary;
    if (props.secondary) return appfontFamilySecondary;
    return appfontFamily;
  }};
  line-height: ${(props) => {
    if (props.nolineheight) return "1";
    return "1.3";
  }};
  color: ${(props) => {
    if (props.ctacolor) return CTAColor;
    if (props.light) return colorLight;
    return fontColor;
  }};
  text-align: ${(props) => {
    if (props.center) return "center";
    if (props.right) return "right";
    return "left";
  }};

  font-size: ${(props) => {
    if (props.xs) return "0.7rem";
    if (props.s) return ".8rem";
    if (props.m) return "1rem";
    if (props.l) return "1.5rem";
    if (props.large) return "1.5rem";
    if (props.xl) return "1.9rem";
    if (props.xxl) return "2.4rem";
    return "1.1rem";
  }};
  ${mobile} {
    font-size: ${(props) => {
      if (props.xs) return "0.75rem";
      if (props.s) return ".8rem";
      if (props.m) return "1.05rem";
      if (props.l) return "1.35rem";
      if (props.large) return "1.35rem";
      if (props.xl) return "1.55rem";
      if (props.xxl) return "2rem";
      return "1rem";
    }};
  }

  letter-spacing: ${(props) => {
    if (props.xxl) return "1px";
    if (props.xl) return "1px";
    return "0px";
  }};

  word-spacing: ${(props) => {
    if (props.xxl) return "1px";
    if (props.xl) return ".001em";
    return "0px";
  }};

  font-weight: ${(props) => {
    if (props.thin) return "300";
    if (props.semibold) return "500";
    if (props.bold) return "700";
    if (props.extrabold) return "800";
    return "400";
  }};

  font-style: ${(props) => {
    if (props.italic) return "italic";
    return "normal";
  }};

  max-width: 100%;
  margin: 0;
`;

const HeadingOne = styled.h1`
  ${baseStyle};
  font-family: ${appfontFamilySecondary};
  letter-spacing: 3px;
`;

const HeadingTwo = styled.h2`
  ${baseStyle};
  font-family: ${appfontFamilySecondary};
  font-weight: 500;
`;

const HeadingThree = styled.h3`
  ${baseStyle};
  font-family: ${appfontFamilySecondary};
  font-weight: 300;
`;

const HeadingFour = styled.h4`
  ${baseStyle};
`;

const HeadingFive = styled.h5`
  ${baseStyle};
`;

const Paragraph = styled.p`
  ${baseStyle};
`;

const Figcaption = styled.figcaption`
  ${baseStyle};
`;

const TextFormatter = styled.span`
  ${baseStyle};
  letter-spacing: 0.3px;
  display: flex;
`;
const Button = styled.button`
  ${baseStyle};
  letter-spacing: 0.5px;
  ${stripButtonStyle}
  ${mainTransition}
	font-family: ${appfontFamilyTertiary};
  text-transform: uppercase;
  border: ${buttonBorder};
  hyphens: manual;
  background: ${buttonBackground};
  color: ${buttonColor};
  padding: 0.55rem 1rem;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    color: ${buttonColorHoverFocus};
    text-decoration: ${CTAUnderline};
    background: ${buttonBackgroundHoverFocus};
    border: ${buttonBorderFocus};
  }
  &:focus {
    transform: scale(0.94);
  }
  &.active,
  &.current {
    color: ${buttonColorHoverFocus};
    background: ${buttonBackgroundHoverFocus};
    border: ${buttonBorderActive};
    text-decoration: ${CTAUnderline};
  }
`;
const ButtonText = styled.button`
  ${baseStyle};
  ${stripButtonStyle}
  ${mainTransition}
	color: ${buttonColor};
  text-transform: uppercase;
  font-family: ${appfontFamilySecondary};
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  letter-spacing: 1px;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  &:focus,
  &:hover {
    border-bottom: 2px solid ${colorSlightOpacity};
  }
  &.active,
  &.current {
    color: ${fontColor};
    border-bottom: 2px solid ${fontColor};
  }
`;
const HyperLink = styled.a`
  ${mainTransition}
  cursor: pointer;
  color: ${fontColor};
  /* white-space: nowrap; */
  &:hover,
  &:focus {
    text-decoration: underline;
    font-weight: bold;
    color: ${fontColor};
  }
  text-decoration: underline;
`;

const MenuLink = styled(NavLink)`
  ${baseStyle};
  font-weight: 900;
  ${mainTransition}
  position:relative;
  border: 0;
  hyphens: manual;
  background: none;
  color: ${navBarButtonColor};
  font-family: ${appfontFamilySecondary};
  letter-spacing: 1px;
  border-bottom: 0;
  display: inline-block;
  transform: scale(1);
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  /* &::before{
		content: '';
		border-bottom: 2px solid rgba(0,0,0,0);
		${mainTransition}
		${crossOut};
	} */
  ${tablet} {
    hyphens: none;
  }
  &:focus {
    ${mobile} {
      transform: scale(0.94);
    }
  }
  &:hover {
    color: ${navBarHoverFocus};
    /* &::before{
		content: '';
			border-bottom: 2px solid ${colorSlightOpacity};
		} */
    /* text-decoration: ${CTAUnderline}; */
    /* border-bottom: 2px solid ${fontColor}; */
  }
  &.active,
  &.active:hover,
  &.current,
  &.current:hover {
    color: ${navBarButtonActive};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${navBarButtonActive};
    -webkit-text-fill-color: transparent;
    /* &::before {
		content: '';
			border-bottom: 2px solid ${fontColor};
		} */
    /* text-decoration: ${CTAUnderline}; */
    /* border-bottom: 2px solid ${colorSlightOpacity}; */
  }
`;

const Text = ({ h1, h2, h3, h4, h5, paragraph, button, buttontext, link, menuLink, figcaption, format, ...props }) => {
  if (h1) return <HeadingOne {...props} />;
  if (h2) return <HeadingTwo {...props} />;
  if (h3) return <HeadingThree {...props} />;
  if (h4) return <HeadingFour {...props} />;
  if (h5) return <HeadingFive {...props} />;
  if (button) return <Button tabIndex="0" {...props} />;
  if (buttontext) return <ButtonText {...props} />;
  if (link) return <HyperLink tabIndex="0" {...props} />;
  if (menuLink) return <MenuLink {...props} />;
  if (figcaption) return <Figcaption {...props} />;
  if (format) return <TextFormatter {...props} />;
  return <Paragraph {...props} />;
};

export default Text;
