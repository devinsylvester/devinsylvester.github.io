import React from 'react';

console.log("👋 Hey there!");
console.log("Looking for the source code? Find it on Github: https://github.com/0132143/portfolio");

const renderIcon = (iconName, toolName) => (
  <div className="flex-1 flex justify-center">
    <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
      <div className="skill-icon" style={{ backgroundImage: `url('/images/${iconName}.png')` }} />
      <div className={`w-100 icon-text justify-center ${iconName} f3 flex tc items-center justify-center`}>{toolName}</div>
    </div>
  </div>
);

const App = () => (
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
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/reacticon.png')" }} />
                <div className="w-100 icon-text justify-center reacticon f3 flex tc items-center ">React</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/es6icon.png')" }} />
                <div className="w-100 icon-text justify-center es6icon f3 flex tc items-center ">ECMA Script 6</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/rnicon.png')" }} />
                <div className="w-100 icon-text justify-center reacticon f3 flex tc items-center ">React Native</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/angularicon.png')" }} />
                <div className="w-100 icon-text justify-center angularicon f3 flex tc items-center ">Angular 1.x</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/nodeicon.png')" }} />
                <div className="w-100 icon-text justify-center nodeicon f3 flex tc items-center justify-center">Node</div>
              </div>
            </div>
          </div>
          <div className="flex mb3 justify-between flex-wrap">
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/giticon.png')" }} />
                <div className="w-100 icon-text justify-center giticon f3 flex tc items-center ">Git</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/webpackicon.png')" }} />
                <div className="w-100 icon-text justify-center webpackicon f3 flex tc items-center ">webpack</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/gulpicon.png')" }} />
                <div className="w-100 icon-text justify-center gulpicon f3 flex tc items-center ">Gulp</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/androidicon.png')" }} />
                <div className="w-100 icon-text justify-center androidicon f3 flex tc items-center justify-center">Android Studio</div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="ml3 mr3 flex relative flex-wrap icon-wrapper mb3">
                <div className="skill-icon" style={{ backgroundImage: "url('/images/xcodeicon.png')" }} />
                <div className="w-100 icon-text justify-center xcodeicon f3 flex tc items-center ">Xcode</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
