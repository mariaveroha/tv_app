import React from "react";
import { Link } from "react-router-dom";
const MenuMusic = () => {
    let linkMusic =  '/music'
    let linkMusic_2 = '/albums/'
    let linkMusic_3 =  '/folder/'
    return (
        <div>
            <Link className= {(window.location.pathname === linkMusic)? 'link link_active' : 'link'} to={linkMusic}>
            Музыка
            </Link>

            <Link className={(window.location.pathname === linkMusic_2)? 'link link_active' : 'link'} to={linkMusic_2}>
                Альбомы
            </Link>
            <Link className= {(window.location.pathname === linkMusic_3)? 'link link_active' : 'link'} to={linkMusic_3}>
                Папки
            </Link>
        </div>
    )
}
export default MenuMusic