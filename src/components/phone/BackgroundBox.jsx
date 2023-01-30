import React from 'react';
import classes from './BackgroundBox.module.css';

function BackgroundBox() {
  return (
    <div style={{ display: 'block' }}>
      <div className={classes.background_box}>
        <div className={classes.circle}>
          <div className={classes.circle_img}></div>
        </div>
      </div>
    </div>
    //
  );
}

export default BackgroundBox;
