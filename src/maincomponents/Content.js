import React, { useContext, Fragment } from "react";
import ReactResizeDetector from "react-resize-detector";
import { Route, Switch, withRouter } from "react-router-dom";
import { globalState } from "../State";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  AboutMe,
  BedzinExhibit,
  Gradients,
  CulturalSuicide,
  DiscountTire,
  Home,
  Inspiration,
  People,
  IPhone,
  StartNow,
  Modeling,
  Resume,
  SpecialThanks,
  Theme,
  Puns,
  Places,
  Ugg,
  Settings,
  Backgrounds,
  Transitions,
  Contacts,
  HerbieDuahApp,
  FourOhFour,
  AmericanExpress,
  GGPortfolio,
  Typecraft,
  EightMinsFortySixSecs,
} from "../Pages";
import { revealSecs, getCurrentTransition } from "../helpers";
import "animate.css";
export const Content = ({ location }) => {
  const { onContentResizeWidth, onContentResizeHeight, fullScreen, currentTransition } = useContext(globalState);
  const onResize = (width, height) => {
    onContentResizeWidth(width);
    onContentResizeHeight(height);
  };
  const transitionClasses = getCurrentTransition(currentTransition);
  return (
    <Fragment>
      {!fullScreen ? (
        <ReactResizeDetector handleWidth handleHeight refreshMode={"debounce"} refreshRate={100} onResize={onResize} />
      ) : null}

      <TransitionGroup className="animatecss-tamer">
        <CSSTransition key={location.key} timeout={revealSecs} classNames={transitionClasses}>
          <div className="animatecss-container">
            <Switch location={location}>
              <Route path="/AboutMe" component={AboutMe} />
              <Route path="/BedzinExhibit" component={BedzinExhibit} />
              <Route path="/Gradients" component={Gradients} />
              <Route path="/Backgrounds" component={Backgrounds} />
              <Route path="/Animations" component={Transitions} />
              <Route path="/Settings" component={Settings} />
              <Route path="/DiscountTire" component={DiscountTire} />
              <Route path="/CulturalSuicide" component={CulturalSuicide} />
              <Route exact path="/" component={Home} />
              <Route path="/PeoplePhotography" component={People} />
              <Route path="/IphonePhotography" component={IPhone} />
              <Route path="/StartNow" component={StartNow} />
              <Route path="/Resume" component={Resume} />
              <Route path="/Themes" component={Theme} />
              <Route path="/SpecialThanks" component={SpecialThanks} />
              <Route path="/Settings" component={Settings} />
              <Route path="/PlacesPhotography" component={Places} />
              <Route path="/Ugg" component={Ugg} />
              <Route path="/Inspiration" component={Inspiration} />
              <Route path="/CaseStudy" component={HerbieDuahApp} />
              <Route path="/Puns" component={Puns} />
              <Route path="/Contacts" component={Contacts} />
              <Route path="/AmericanExpress" component={AmericanExpress} />
              <Route path="/GGPortfolio" component={GGPortfolio} />
              <Route path="/Typecraft" component={Typecraft} />
              <Route path="/0846" component={EightMinsFortySixSecs} />
              <Route path="/Modeling" component={Modeling} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default withRouter(Content);
