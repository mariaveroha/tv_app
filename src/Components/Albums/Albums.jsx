import React from "react";
import { useState } from "react";
import Album from "../Album/Album";
import MenuMusic from "../Menu/MenuMusic";
import "./Albums.scss"
const Albums = () => {
    const [album, setAlbum] = useState ([
        {id:1, cover: 'https://avatars.yandex.net/get-music-content/5496390/127898d5.a.22814244-1/200x200', titleAlbum:'Это тебе', author:'Thomas Mraz, Joseph'},
        {id:2, cover: 'https://avatars.yandex.net/get-music-content/6447985/e9f45937.a.22750671-1/200x200', titleAlbum:'Конечная станция', author:'Markul'},
        {id:3, cover: 'https://avatars.yandex.net/get-music-content/6296749/9f6afbf2.a.22878680-1/200x200', titleAlbum:'First Day Out', author:'Kizaru'},
        {id:4, cover: 'https://avatars.yandex.net/get-music-content/6021799/1f0cf478.a.22835087-1/200x200', titleAlbum:'Морти', author:'CAPTOWN'},
        {id:5, cover: 'https://avatars.yandex.net/get-music-content/5966316/de3b7fdb.a.22811795-1/200x200', titleAlbum:'WAKE UP!', author:'Zivert'},
        {id:6, cover: 'https://avatars.yandex.net/get-music-content/6214856/d7ff4f25.a.22824655-1/200x200', titleAlbum:'Невеста', author:'Mary Gu'},
        {id:7, cover: 'https://avatars.yandex.net/get-music-content/6202531/3e5d1fe1.a.22803692-3/200x200', titleAlbum:'PHUCKED UP', author:'АДЛИН'},
        {id:8, cover: 'https://avatars.yandex.net/get-music-content/5966316/49a32305.a.22857468-1/200x200', titleAlbum:'vodila', author:'BUSHIDO ZHO'},
        {id:9, cover: 'https://avatars.yandex.net/get-music-content/6214856/f6aee222.a.22823205-1/200x200', titleAlbum:'QUEEN OF RAP', author:'INSTASAMKA'},
        {id:10, cover: 'https://avatars.yandex.net/get-music-content/6447985/bfcc41ef.a.22792457-1/200x200', titleAlbum:'РКН', author:'Слава КПСС, Pyrokinesis'},
        {id:11, cover: 'https://avatars.yandex.net/get-music-content/5234929/f10aa739.a.22862473-1/200x200', titleAlbum:'10 выходных', author:' Luxor'},
        {id:12, cover: 'https://avatars.yandex.net/get-music-content/6296749/d43b70b1.a.22794384-1/200x200', titleAlbum:'Известным', author:'The Limba, MORGENSHTERN'},
        {id:13, cover: 'https://avatars.yandex.net/get-music-content/6202531/6c94b386.a.22811615-1/200x200', titleAlbum:'нож', author:'вышел покурить'},
        {id:14, cover: 'https://avatars.yandex.net/get-music-content/5966316/110a4b65.a.22867344-1/200x200', titleAlbum:'<3', author:'Lida, Sqwore'},
        {id:15, cover: 'https://avatars.yandex.net/get-music-content/5966316/109beb4a.a.22858267-1/200x200', titleAlbum:'18', author:'NЮ'},
    ])
    return (
        <div className="container">
            <MenuMusic/>
           <div className="title_albums">Подборки</div>
           <div className="album_list">
            {album.map ((album, key) =>
                <Album album = {album} key = {album.id} />
                )}
           </div>
        </div>
    )
}
export default Albums