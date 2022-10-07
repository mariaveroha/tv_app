import React from "react";
import { Link } from "react-router-dom";
const MenuSerials = () => {
    let link =  '/serials'
    let link_2 = '/serialList/'
    let link_3 =  '/favouriteFolder/'
    return (
        <div>
            <Link className={ (window.location.pathname === link) ? 'link_active link' : 'link'} to={link}>
                Сериалы
            </Link>

            <Link className= { (window.location.pathname === link_2) ? 'link_active link' : 'link'}  to={link_2}>
                Жанры
            </Link>
            <Link className={ (window.location.pathname === link_3) ? 'link_active link' : 'link'}  to={link_3}>
                Избранное
            </Link>
        </div>
    )
}
export default MenuSerials