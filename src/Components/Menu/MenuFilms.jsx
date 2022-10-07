import React from "react";
import { Link } from "react-router-dom";
const MenuFilms = () => {
    let linkFilms =  '/films'
    let linkFilms_2 = '/filmList/'
    // let linkFilms_3 =  '/favouriteFolder/'
    return (
        <div>
            <Link className= {(window.location.pathname === linkFilms)? 'link link_active' : 'link'} to={linkFilms}>
                Фильмы
            </Link>

            <Link className= {(window.location.pathname === linkFilms_2)? 'link link_active' : 'link'} to={linkFilms_2}>
                Жанры
            </Link>
        </div>
    )
}
export default MenuFilms