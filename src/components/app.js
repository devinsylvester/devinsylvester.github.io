import React, { Component } from 'react';

import RenderIcon from './RenderIcon';
import ProjectModal from './ProjectModal';

console.log("👋 Hey there!");
console.log("Looking for the source code? Find it on Github: https://github.com/0132143/0132143.github.io");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGotcha: false,
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="vh-100 w-100 white bg-brand-primary flex items-center pa4">
            <div className="flex vh-100 mw8 center flex-column-m flex-row-l flex-column">
              <div className="flex flex-1 flex-column justify-center-l justify-end-m justify-end-ns white flex-wrap">
                <div className="f2">Hi, I'm Andrew</div>
                <div className="mt3">I'm a software developer living in beautiful Charleston, SC.</div>
                <div className="mt3">Currently, I work at Launchpeer, building awesome web and mobile applications with Javascript.</div>
                <div className="mt3">In my free time, I enjoy woodworking, bike building, and spending time with my wife and newborn daughter.</div>
              </div>
              <div className="flex-1 flex items-end justify-end"><img className=" mw5-m mw0-l w-80 headshot" src="/images/headshotfinal.png" alt="headshot" /></div>
            </div>
          </div>
          <div className="mw8 center pl3 pr3">
            <div className="flex flex-column mt6 center">
              <div className="f2 mb5 center">Tools I Use</div>
              <div className="flex mb3 justify-between flex-wrap">
                <RenderIcon iconName="reacticon" toolName="Reac" />
                <RenderIcon iconName="es6icon" toolName="ECMA Script " />
                <RenderIcon iconName="rnicon" toolName="React Nativ" />
                <RenderIcon iconName="angularicon" toolName="Angular 1." />
                <RenderIcon iconName="nodeicon" toolName="Node" />
              </div>
              <div className="flex mb3 justify-between flex-wrap">
                <RenderIcon iconName="giticon" toolName="Git" />
                <RenderIcon iconName="webpackicon" toolName="webpack" />
                <RenderIcon iconName="gulpicon" toolName="Gulp" />
                <RenderIcon iconName="androidicon" toolName="Android Studio" />
                <RenderIcon iconName="xcodeicon" toolName="Xcode" />
              </div>
              <div className="flex mb3 justify-between flex-wrap">
                <RenderIcon iconName="css3icon" toolName="CSS 3" />
                <RenderIcon iconName="tachyonsicon" toolName="Tachyons" />
                <RenderIcon iconName="sassicon" toolName="Sass" />
                <RenderIcon iconName="lessicon" toolName="less" />
                <RenderIcon iconName="bootstrapicon" toolName="Bootstrap" />
              </div>
            </div>
            <div className="flex flex-column mt6 center">
              <div className="f2 mb5 center">Projects I've Worked On</div>
              <div className="flex">
                <div className="mw6 pointer" role="button" onClick={() => this.setState({ showGotcha: true })}><img src="/images/gotcha-login-1.png" alt="gotcha" /></div>
                {this.state.showGotcha &&
                  <ProjectModal onClick={() => this.setState({ showGotcha: false })}>
                    <div className="">
                      <div className="f2 mb4 center">Gotcha Rides</div>
                      <div className="flex w-100">
                        <div className=" pr3">
                          <div className="flex mb3">
                            <div className="mr2">Employer:</div>
                            <div>Launchpeer</div>
                          </div>
                          <div className="flex mb3">
                            <div className="mr2">Scope:</div>
                            <div>On demand ride sharing app for low speed electric vehicles</div>
                          </div>
                          <div className="flex mb3">
                            <div className="mr2">Title:</div>
                            <div>Front End Developer</div>
                          </div>
                          <div className="flex mb3">
                            <div className="mr2">Duration:</div>
                            <div>9 months</div>
                          </div>
                          <div className="flex mb5">
                            <div className="mr2">Stack:</div>
                            <div>React, React Native</div>
                          </div>
                        </div>
                        <div className="flex-1 pl3 ml4">
                          Gotcha Rides was the first app where I really cut my teeth on React Native development. The scope of the project ended up being pretty big, with a public facing passenger app, an internal driver app, and a web based admin portal. I was responsible for leading the front end team in planning, developing, and deploying the applications throughout the project lifecycle. I had the opportunity to tackle some really interesting problems, like updating branding for each vehicle based on their sponsor, and handling driver location accuracy across different devices.
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="center mb5">
                          <div className="ma3">Driver App</div>
                          <img src="/images/gotcha-d-full.png" alt="gotcha" />
                        </div>
                        <div className="center mb5">
                          <div className="ma3">Passenger App</div>
                          <img src="/images/gotcha-full.png" alt="gotcha" />
                        </div>
                        <div className="center mb5">
                          <div className="ma3">Admin Portal</div>
                          <div className="flex justify-between">
                            <div className="mr3"><img src="/images/gotcha-a-rides.png" alt="gotcha" /></div>
                            <div className="ml3"> <img src="/images/gotcha-a-rides-edit.png" alt="gotcha" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
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
