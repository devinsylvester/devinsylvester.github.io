import React from 'react';

const MylaiModal = () => (
  <div className="pa4 p0-m p0-l">
    <div className="f2 mb4 center">Mylai</div>
    <div className="flex flex-row-l flex-column-m flex-column w-100">
      <div className="pr3">
        <div className="flex mb3">
          <div className="mr2">Employer:</div>
          <div>Launchpeer</div>
        </div>
        <div className="flex mb3">
          <div className="mr2">Scope:</div>
          <div>Location based, on demand personal training service</div>
        </div>
        <div className="flex mb3">
          <div className="mr2">Title:</div>
          <div>Full Stack Developer</div>
        </div>
        <div className="flex mb3">
          <div className="mr2">Duration:</div>
          <div>5 months</div>
        </div>
        <div className="flex mb5">
          <div className="mr2">Stack:</div>
          <div>React, React Native, Parse Server</div>
        </div>
      </div>
      <div className="flex-1 ml4-l ml pb4-m pb4-l">
        Mylai offered some really exciting opportunites for me as a developer. At the time it was the largest project that I had developed entirely on my own, and was the first mobile application I wrote with multiple user roles that allowed for entirely separate functionalities within the same app.
        The project consisted of a client app, trainer app, and admin portal, and utilized sockets, geolocation, and push notifications for a rich user experience.
      </div>
    </div>
    <div className="flex-1">
      <div className="center mb5">
        <div className="ma3">Client App</div>
        <img src="/images/mylai-c-full.png" alt="gotcha" />
      </div>
      <div className="center mb5">
        <div className="ma3">Trainer App</div>
        <img src="/images/mylai-t-full.png" alt="gotcha" />
      </div>
      <div className="center mb5">
        <div className="ma3">Admin Portal</div>
        <div className="flex justify-between">
          <div className="mr3"><img src="/images/mylai-a-overview.png" alt="mylai" /></div>
          <div className="ml3"> <img src="/images/mylai-a-trainer.png" alt="mylai" /></div>
        </div>
      </div>
    </div>
  </div>
);

export default MylaiModal;
