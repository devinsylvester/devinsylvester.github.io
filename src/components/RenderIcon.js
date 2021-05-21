import React from 'react';

const RenderIcon = ({
  iconName, toolName, wide, handleClick
}) => (
  <div role="button" onClick={() => { if (handleClick) handleClick(); }} className="flex-1 flex justify-center">
    <div className={`pl3 pr3 flex relative flex-wrap ${wide ? "icon-wide" : "icon-wrapper"} mb5`}>
      <div className="skill-icon" style={{ backgroundImage: `url('/images/${iconName}.png')` }} />
      <div className={`w-100 icon-text justify-center ${iconName} f3 flex tc items-center justify-center`}>{toolName}</div>
    </div>
  </div>
);

export default RenderIcon;
