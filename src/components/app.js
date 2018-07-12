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
            {renderIcon('reacticon', 'React')}
            {renderIcon('es6icon', 'ECMA Script 6')}
            {renderIcon('rnicon', 'React Native')}
            {renderIcon('angularicon', 'Angular 1.x')}
            {renderIcon('nodeicon', 'Node ')}
          </div>
          <div className="flex mb3 justify-between flex-wrap">
            {renderIcon('giticon', 'Git ')}
            {renderIcon('webpackicon', 'webpack ')}
            {renderIcon('gulpicon', 'Gulp ')}
            {renderIcon('androidicon', 'Android Studio ')}
            {renderIcon('xcodeicon', 'Xcode ')}
          </div>
          <div className="flex mb3 justify-between flex-wrap">
            {renderIcon('css3icon', 'CSS 3 ')}
            {renderIcon('tachyonsicon', 'Tachyons ')}
            {renderIcon('sassicon', 'Sass ')}
            {renderIcon('lessicon', 'less ')}
            {renderIcon('bootstrapicon', 'Bootstrap ')}
          </div>
        </div>
        <div className="flex flex-column mt6 center">
          <div className="f2 mb5 center">Work I've Done</div>
          <div className="flex">
            <div><img src="/images/gotcha-login-1.png" alt="gotcha" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
