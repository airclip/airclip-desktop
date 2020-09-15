import React from 'react';
import './index.css';

type Props = {
  position: string;
  height: number;
};

const PopOver = ({ position, height }: Props) => {
  const popoverStyle = {
    height
  };

  const arrowDim = height * Math.sqrt(2);
  const arrowStyle = {
    width: arrowDim,
    height: arrowDim,
    top: position === 'top' ? height - arrowDim / 2 : -arrowDim / 2,
    backgroundColor: 'rgb(237,237,237)'
  };

  return (
    <div className="popover" style={popoverStyle}>
      <div className="arrow" style={arrowStyle} />
    </div>
  );
};

export default PopOver;
