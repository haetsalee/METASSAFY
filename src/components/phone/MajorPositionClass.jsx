import React from "react";
import TextGroup from "./TextGroup";
import classes from './MajorPositionClass.module.css';


function MajorPositionClass() {
    // return <div style={{display: 'flex', justifyContent: 'space-around' }}>
    return <div className={classes.box}>
        <TextGroup name='Java' class='전공' />
        <TextGroup name='FE' class='포지션' />
        <TextGroup name='D211ER' class='공통' />
    </div>
}

export default MajorPositionClass;