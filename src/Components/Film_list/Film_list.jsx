import React from "react";
import "./Film_list.scss"
const Film_list = (props) => {
    return (
        <div className="film_list">
            <div><img className="film_list_cover" src={props.film_list.image} /></div>
            <span className="film_list_title">{props.film_list.film_title}</span>
        
        </div>
    )
}

export default Film_list