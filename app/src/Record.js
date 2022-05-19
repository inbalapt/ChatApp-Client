import { useState } from 'react';
import './Record.css';

//condition=props
function Record(props, setRecMessage) {
   
    return (props.trigger) ? (
        <div className="record-message">
            <div className="inner-rec-mess">
                {props.children}
            </div>
        </div>
    ) : "";
}
export default Record;