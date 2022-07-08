import React, { Component } from 'react';

import RenderIcon from './RenderIcon';
import ProjectModal from './ProjectModal';
import GotchaModal from './GotchaModal';
import MylaiModal from './MylaiModal';

console.log("👋 Hey there!");
console.log("Looking for the source code? It's not the most up to date but you can find it on Github: https://github.com/devinsylvester/devinsylvester.github.io");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGotcha: false,
      showMylai: false,
      loaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2000);
  }

  handleLink(button) {
    if (button === 'phone') {
      document.location.href = "tel:3108838321";
    } else if (button === 'email') {
      document.location.href = "mailto:dajs64@gmail.com";
    } else {
      window.open('www.linkedin.com/in/devin-sylvester');
    }
  }

  render() {
    return (
      <div>
        <div className={`loading-wrapper ${this.state.loaded ? "loaded" : ""}`}>
          <div className="loading"><div /><div /><div /><div /></div>
        </div>
        <div>
          <div className="absolute right-0 flex">
            <a className="pa3" rel="noopener noreferrer" target="_blank" href="https://github.com/devinsylvester">Github</a>
            <a className="pa3" rel="noopener noreferrer" target="_blank" href="/images/Devin Sylvester Resume 7_1_2022.pdf">Resume</a>
          </div>
          <div className="vh-100 w-100 white bg-brand-primary flex items-center pa4">
            <div className="flex vh-100 mw8 center flex-column-m flex-row-l flex-column">
              <div className="flex flex-1 flex-column justify-center-l justify-end-m justify-end white flex-wrap">
                <div className="f2">Hi, I'm Devin</div>
                <div className="mt3">I'm a software engineer living in beautiful Los Angeles, CA.</div>
                <div className="mt3">Currently, looking for a junior develper position, a recent <a rel="noopener noreferrer" target="_blank" href="https://generalassemb.ly/education/software-engineering-immersive/atlanta">General Assembly</a>, graduate I'm seeking remote work and willing to relocate.</div>
                <div className="mt3">In my free time, I enjoy <a rel="noopener noreferrer" target="_blank" href="www.instagram.com/dev24/">family time</a>, <a rel="noopener noreferrer" target="_blank" href="https://www.othisitraining.com/">weightlifting</a>, and playing video games <a rel="noopener noreferrer" target="_blank" href="https://store.world-8.com/">World-8</a>.</div>
              </div>
              <div className="flex-1 flex items-end justify-end mt5"><img className=" mw5-m mw0-l w-80 headshot" src="/images/headshotfinal.png" alt="headshot" /></div>
            </div>
          </div>
          <div className="mw8 center pl3 pr3">
            <div className="flex flex-column mt6 center">
              <div className="f2 mb5 center">What I know best</div>
              <div className="flex justify-between flex-wrap">
                <RenderIcon iconName="reacticon" toolName="React" />
                {/* <RenderIcon iconName="rnicon" toolName="React Native" /> */}
                <RenderIcon iconName="sqlicon" toolName="SQL" />
                {/* <RenderIcon iconName="cypressIcon" toolName="Cypress" /> */}
              </div>
              <div className="flex justify-between flex-wrap">
                <RenderIcon iconName="htmlicon" toolName="HTML 5" />
                {/* <RenderIcon iconName="es6icon" toolName="ECMA Script 6" /> */}
                <RenderIcon iconName="css3icon" toolName="CSS 3" />
                <RenderIcon iconName="nodeicon" toolName="Node" />
              </div>
            </div>
            <div className="flex flex-column mt6 center">
              <div className="f2 mb5 center tc"><div className="strike-through-wrapper"><div className="strike-through-first" /><div className="strike-through-second" /><span>Recent</span><div /></div> Projects</div>
              <div className="flex z-1">
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
              <div className="mw8 center pl3 pr3 w-100">
                <div className="flex flex-column mt6 center items-center">
                  <div className="f2 mb5 center">Contact</div>
                  <div className="flex mb3 justify-between flex-wrap pointer">
                    <RenderIcon handleClick={() => this.handleLink('phone')} wide iconName="phoneicon" toolName="310.883.8321" />
                    <RenderIcon handleClick={() => this.handleLink('email')} wide iconName="emailicon" toolName="dajs64@gmail.com" />
                    <RenderIcon handleClick={() => this.handleLink('linkedin')} wide iconName="linkedinicon" toolName="@devin-sylvester" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
