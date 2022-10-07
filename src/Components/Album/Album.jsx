import React from "react";
import "./Album.scss"
const Album = (props) => {
    return (
        <div className="album">
            <div className="circle_big"></div>
            <div > <img className="cover" src={props.album.cover} /></div>
            <div className="titleAlbum"> {props.album.titleAlbum}</div>
            <div className="author_album"> {props.album.author}</div>
        </div>
    )
    }

export default Album