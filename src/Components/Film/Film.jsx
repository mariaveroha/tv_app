import React from "react";
import "./Film.scss"
const Film = (props) => {
    return (
        <div className="film">
            <div><img className="film_cover" src={props.film.image} /></div>
            <div className="body_film">
            <div className="film_title">{props.film.film_title}</div> 
            <div className="film_description">{props.film.film_description}</div>
            </div>
            
        </div>
    )
}

export default Film