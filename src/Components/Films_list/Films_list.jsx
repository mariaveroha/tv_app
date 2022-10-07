import React from "react";
import "./Films_list.scss"
import { useState } from "react";
import Film_list from "../Film_list/Film_list";
import MenuFilms from "../Menu/MenuFilms";
const Films_list = ()=> {
    const [filmList, setFilmList] = useState([
        {id:1, image: 'https://avatars.mds.yandex.net/get-bunker/50064/c965e7ae1145db8f4a5d636d8a8682ad07b486d3/192x192', film_title: 'Комедии'},
        {id:2, image: 'https://avatars.mds.yandex.net/get-bunker/56833/ed83c13d1ddbd91dbb34d35b3936c32f1ceef2b2/192x192', film_title: 'Мультфильмы'},
        {id:3, image: 'https://avatars.mds.yandex.net/get-bunker/50064/a88a3adacd414135e7f67d6459f462302844882b/192x192', film_title: 'Ужасы'},
        {id:4, image: 'https://avatars.mds.yandex.net/get-bunker/118781/2d1173df7d33adb29c73cfaaa3d014e48103223a/192x192', film_title: 'Фантастика'},
        {id:5, image: 'https://avatars.mds.yandex.net/get-bunker/128809/bc0da196556282793b39f4bd77143d9d7a7a353b/192x192', film_title: 'Триллеры'},
        {id:6, image: 'https://avatars.mds.yandex.net/get-bunker/61205/07b81fddd36a916e3c1dad941de8e47ecf896c7e/192x192', film_title: 'Боевики'},
        {id:7, image: 'https://avatars.mds.yandex.net/get-bunker/128809/58e8f588c62ec66988c914314f32e38ab12f3fb2/192x192', film_title: 'Мелодрамы'},
        {id:8, image: 'https://avatars.mds.yandex.net/get-bunker/50064/546ba464afc21764e58be3987df5063a0a2f9da9/192x192', film_title: 'Детективы'}
    ])
     
    return (
        <div className="container">
            <MenuFilms/>
        <p className="title_filmList"> Жанры</p>
        {filmList.map ((filmlist, key)=>
        <Film_list film_list = {filmlist} key = {filmlist.id} />)}
        </div>
    )
}

export default Films_list