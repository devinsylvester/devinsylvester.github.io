import React from 'react';

const GotchaModal = () => (
  <div className="pa4 p0-m p0-l">
    <div className="f2 mb4 center">Gotcha Rides</div>
    <div className="flex flex-row-l flex-column-m flex-column w-100">
      <div className="pr3">
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
      <div className="flex-1 ml4-l ml pb4-m pb4-l"> Popcorn time was the first web application utilizing paired programming. Our team of myself and two others wanted to create and IMBD clone.</div>
    </div>
    <div className="flex-1">
      <div className="center mb5">
        <div className="ma3">Register/Login page</div>
        <img src="/images/gotcha-d-full.png" alt="gotcha" />
      </div>
      <div className="center mb5">
        <div className="ma3">Movies page</div>
        <img src="/images/gotcha-full.png" alt="gotcha" />
      </div>
      <div className="center mb5">
        <div className="ma3">Full CRUD funcionality</div>
        <div className="flex justify-between">
          <div className="mr3"><img src="/images/gotcha-a-rides.png" alt="gotcha" /></div>
          <div className="ml3"> <img src="/images/gotcha-a-rides-edit.png" alt="gotcha" /></div>
        </div>
      </div>
    </div>
  </div>
);

export default GotchaModal;
