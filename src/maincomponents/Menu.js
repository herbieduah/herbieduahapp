import React, { useContext } from "react";
import MenuContainer from "../stylecomponents/MenuContainer";
import { isPortrait, useWindowResize, revealValues, revealSecs, getCurrentTransition } from "../helpers";
import SubMenu from "./SubMenu";
import { globalState } from "../State";
import { MenuTabs, SliderUIMode, ShowIf } from "../ComponentHelpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ElementReveal } from "../ContentHelpers";
export const ContentMenu = () => {
  const { contentWidth: cw, contentHeight: ch, currentTransition, navBarRight, switchSides } = useContext(globalState);
  const { width: ww, height: wh } = useWindowResize();
  const values = { ww, wh, cw, ch };
  const isShowingMore = revealValues(values).isShowingMore;
  const transitionClasses = getCurrentTransition(currentTransition);

  return (
    <MenuContainer
      isPortrait={isPortrait(ww, wh)}
      isShowingMore={isShowingMore}
      navBarRight={navBarRight}
      switchSides={switchSides}>
      <ElementReveal>
        <div className="menu__nav">
          <div className="menu__nav-container">
            <MenuTabs defaultIndex={0} />
          </div>
          {/* <div className='menu__sliderui'> */}

          {/* </div> */}
        </div>
      </ElementReveal>
      <SliderUIMode />
      {/* <div className='menu__sliderui'> */}
      {/* <TransitionGroup>
					{!isShowingMore ? (
						<CSSTransition timeout={revealSecs} classNames={transitionClasses}> */}
      {/* <ShowIf noAnimation thisValue={isShowingMore} thatValue={false}> */}
      {/* <SliderUIMode /> */}
      {/* </ShowIf> */}
      {/* </CSSTransition>
					) : null}
				</TransitionGroup> */}
      {/* </div> */}

      {/* <div className='animatecss-tamer'>
				<TransitionGroup>
					{!isShowingMore ? (
						<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
							<div className='animatecss-container'>
								<div className='menu__content'>
									<div className='menu__less-container'>
										<MenuTabs showCategory={isShowingMore} defaultIndex={-1} />
									</div>
								</div>
								<SliderUIMode />
							</div>
						</CSSTransition>
					) : null}
					{isShowingMore ? (
						<CSSTransition timeout={revealSecs} classNames={transitionClasses}>
							<div className='animatecss-container'>
								<nav className='menu__more'>
									<TransitionGroup>
										<CSSTransition
											timeout={revealSecs}
											classNames={transitionClasses}>
											<SubMenu
												showCategory={isShowingMore}
												category='customize'
											/>
										</CSSTransition>
									</TransitionGroup>
									<SubMenu showCategory={isShowingMore} category='work' />
									<SubMenu
										showCategory={isShowingMore}
										category='photography'
									/>
									<SubMenu showCategory={isShowingMore} category='about' />

									<div className='offset' />
								</nav>
							</div>
						</CSSTransition>
					) : null}
				</TransitionGroup>
			</div> */}
      {/* <div className='offset' /> */}
    </MenuContainer>
  );
};

export default ContentMenu;
