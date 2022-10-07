import React from "react";
import './SerialKind.scss'
const SerialKind = (props) => {
    return (
        <div className="serialKind_item ">
            <div><img className="serialKind_cover" src={props.serialKind.image} /></div>
            <span className="serialKind_title">{props.serialKind.serial_title}</span>
        </div>
    )
}

export default SerialKind