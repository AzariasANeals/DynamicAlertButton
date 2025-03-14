import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
  const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Copying!', children: 'Copy File'},
    { message: 'Deleting!', children: 'Delete File' },
    { message: 'Sharing!', children: 'Share Document' },

  ];

  return (
    <div>
      {buttons.map((btn, index) => (
        <AlertButton key={index} message={btn.message}>
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
};

export default Toolbar;
