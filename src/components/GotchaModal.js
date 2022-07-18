import React from 'react';

const GotchaModal = () => (
  <div className="pa4 p0-m p0-l">
    <div className="f2 mb4 center">Popcorn Time</div>
    <div className="flex flex-row-l flex-column-m flex-column w-100">
      <div className="pr3">
        <div className="flex mb3">
          <div className="mr2">Date Lunched</div>
          <div>May 15th 2022</div>
        </div>
        <div className="flex mb3">
          <div className="mr2">Scope:</div>
          <div>IMBD Clone</div>
        </div>
        <div className="flex mb3">
          <div className="mr2">Title:</div>
          <div>Front End Developer</div>
        </div>
        <div className="flex mb3">
          <div className="mr2">Duration:</div>
          <div>1 week</div>
        </div>
        <div className="flex mb5">
          <div className="mr2">Stack:</div>
          <div>React</div>
        </div>
      </div>
      <div className="flex-1 ml4-l ml pb4-m pb4-l"> Popcorn time was the first web application utilizing paired programming. Our team of myself and two others wanted to create and IMBD clone. Our goal was to reverse engineer the current IMBD web application and launch our own with simple user AUTH and full CRUD functionality</div>
    </div>
    <div className="flex-1">
      <div className="center mb5">
        <div className="ma3">Logo</div>
        <img src="/images/popcorntime1.png" alt="gotcha" />
      </div>
      <div className="center mb5">
        <div className="ma3">Movies page</div>
        <img src="/images/popcorntime2.png" alt="gotcha" />
      </div>
      <div className="center mb5">
        <div className="ma3">Full CRUD funcionality</div>
        <div className="flex justify-between">
          <div className="mr3"><img src="/images/popcorntime3.png" alt="gotcha" /></div>
          <div className="ml4"> <img src="/images/popcorntime4.png" alt="gotcha" /></div>
        </div>
      </div>
    </div>
  </div>
);

export default GotchaModal;
