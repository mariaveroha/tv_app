import React from "react";
import "./Song.scss"
const Song = (props) => {

    return (
        <div className="song">
            <div className="song_left">
                <div className="song_number"> {props.song.number}</div>
                <div className="song_image"> <img src={props.song.image} /> </div>
                <div className="circle"></div>
                <div className="song_body">
                    <div className="song_title">{props.song.title}</div>
                    <div className="song_author"> {props.song.body}</div>
                </div>
            </div>
            <div className="song_time"> {props.song.time}</div>

        </div>

    )
}
export default Song