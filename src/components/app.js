import React, { Component } from 'react';

import RenderIcon from './RenderIcon';
import ProjectModal from './ProjectModal';
import GotchaModal from './GotchaModal';
import MylaiModal from './MylaiModal';

console.log("👋 Hey there!");
console.log("Looking for the source code? Find it on Github: https://github.com/0132143/0132143.github.io");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGotcha: false,
      showMylai: false,
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="vh-100 w-100 white bg-brand-primary flex items-center pa4">
            <div className="flex vh-100 mw8 center flex-column-m flex-row-l flex-column">
              <div className="flex flex-1 flex-column justify-center-l justify-end-m justify-end white flex-wrap">
                <div className="f2">Hi, I'm Andrew</div>
                <div className="mt3">I'm a software developer living in beautiful Charleston, SC.</div>
                <div className="mt3">Currently, I work at <a rel="noopener noreferrer" target="_blank" href="https://launchpeer.com">Launchpeer</a>, building awesome web and mobile applications with Javascript.</div>
                <div className="mt3">In my free time, I enjoy woodworking, bike building, and spending time with my wife and newborn daughter.</div>
              </div>
              <div className="flex-1 flex items-end justify-end mt5"><img className=" mw5-m mw0-l w-80 headshot" src="/images/headshotfinal.png" alt="headshot" /></div>
            </div>
          </div>
          <div className="mw8 center pl3 pr3">
            <div className="flex flex-column mt6 center">
              <div className="f2 mb5 center">Tools I Use</div>
              <div className="flex mb3 justify-between flex-wrap">
                <RenderIcon iconName="reacticon" toolName="React" />
                <RenderIcon iconName="es6icon" toolName="ECMA Script 6" />
                <RenderIcon iconName="rnicon" toolName="React Native" />
                <RenderIcon iconName="parseicon" toolName="Parse Server" />
                <RenderIcon iconName="nodeicon" toolName="Node" />
              </div>
              <div className="flex mb3 justify-between flex-wrap">
                <RenderIcon iconName="giticon" toolName="git" />
                <RenderIcon iconName="webpackicon" toolName="webpack" />
                <RenderIcon iconName="gulpicon" toolName="Gulp" />
                <RenderIcon iconName="androidicon" toolName="Android Studio" />
                <RenderIcon iconName="xcodeicon" toolName="Xcode" />
              </div>
              <div className="flex mb3 justify-between flex-wrap">
                <RenderIcon iconName="css3icon" toolName="CSS 3" />
                <RenderIcon iconName="tachyonsicon" toolName="tachyons" />
                <RenderIcon iconName="sassicon" toolName="Sass" />
                <RenderIcon iconName="lessicon" toolName="less" />
                <RenderIcon iconName="bootstrapicon" toolName="Bootstrap" />
              </div>
            </div>
            <div className="flex flex-column mt6 center">
              <div className="f2 mb5 center tc">Recent Projects</div>
              <div className="flex">
                <div className="mw6 pointer" role="button" onClick={() => this.setState({ showGotcha: true })}><img src="/images/gotcha-login-1.png" alt="gotcha" /></div>
                {this.state.showGotcha &&
                  <ProjectModal onClick={() => this.setState({ showGotcha: false })}>
                    <GotchaModal />
                  </ProjectModal>
                }
                <div className="mw6 pointer" role="button" onClick={() => this.setState({ showMylai: true })}><img src="/images/mylai-login-1.png" alt="mylai" /></div>
                {this.state.showMylai &&
                  <ProjectModal onClick={() => this.setState({ showMylai: false })}>
                    <MylaiModal />
                  </ProjectModal>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
