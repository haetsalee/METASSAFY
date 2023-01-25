import React from "react";
import classes from './TextGroup.module.css'

function TextGroup(props) {
    return <div style={{display:'flex', flexDirection: 'column', textAlign: 'center'}}>
        <b className={classes.name_text}>{props.name}</b>
        {/* <b style={{margin: 0, padding: 0, fontSize: '1rem'}}>{props.name}</b> */}
        <b style={{margin: 0, padding: 0, fontSize: '0.5rem'}}>{props.class}</b>
    </div>
}

export default TextGroup;