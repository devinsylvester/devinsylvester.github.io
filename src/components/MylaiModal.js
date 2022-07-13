import React from 'react';

const MylaiModal = () => (
  <div className="pa4 p0-m p0-l">
    <div className="f2 mb4 center">Fitness Programmer</div>
    <div className="flex flex-row-l flex-column-m flex-column w-100">
      <div className="pr3">
        <div className="flex mb3">
          <div className="mr2">Date Created:</div>
          <div>June 12th 2022</div>
        </div>
        <div className="flex mb3">
          <div className="mr2">Scope:</div>
          <div>Simplified fitness tracker</div>
        </div>
        <div className="flex mb3">
          <div className="mr2">Available Platforms:</div>
          <div>Web/Mobile</div>
        </div>
        <div className="flex mb3">
          <div className="mr2">Duration:</div>
          <div>2 weeks</div>
        </div>
        <div className="flex mb5">
          <div className="mr2">Stack:</div>
          <div>React, MongoDB</div>
        </div>
      </div>
      <div className="flex-1 ml4-l ml pb4-m pb4-l">
        End of the bootcamp solo project. We were graded upon a few aspects including full CRUD functionality, new technologies used, and presentation engagement. My personal goal with the project was to create a fitness app where individuals could see what others were doing and get inspired, spark interest or motivate.
      </div>
    </div>
    <div className="flex-1">
      <div className="center mb5">
        <div className="ma3">Logo</div>
        <img src="/images/workoutapp1.png" alt="gotcha" />
      </div>
      <div className="center mb5">
        <div className="ma3">Create Workout</div>
        <img src="/images/workoutapp2.png" alt="gotcha" />
      </div>
      <div className="center mb5">
        <div className="ma3">Workout Sample</div>
        <div className="flex justify-between">
          <div className="mr3"><img src="/images/workoutapp3.png" alt="mylai" /></div>
          <div className="ml4"> <img src="/images/workoutapp4.png" alt="mylai" /></div>
        </div>
      </div>
    </div>
  </div>
);

export default MylaiModal;
