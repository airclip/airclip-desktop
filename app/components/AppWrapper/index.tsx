import React from 'react';
import is from 'electron-is';
import './index.css';
import PopOver from '../PopOver';
import AppLoader from '../AppLoader';

const AppWrapper = () => {
  const contentStyle = {
    borderTopLeftRadius: is.macOS() ? 6 : 0,
    borderTopRightRadius: is.macOS() ? 6 : 0,
    borderBottomLeftRadius: is.macOS() ? 0 : 6,
    borderBottomRightRadius: is.macOS() ? 0 : 6
  };

  return (
    <div className="app-wrapper">
      <div
        className="top-popover"
        style={{ display: is.macOS() ? 'block' : 'none' }}
      >
        <PopOver position="top" height={12} />
      </div>
      <div className="content" style={contentStyle}>
        <AppLoader />
      </div>
      <div
        className="bottom-popover"
        style={{ display: !is.macOS() ? 'block' : 'none' }}
      >
        <PopOver position="bottom" height={12} />
      </div>
    </div>
  );
};

export default AppWrapper;
