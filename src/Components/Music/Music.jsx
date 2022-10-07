import React from "react";
import { useState } from "react";
import MenuMusic from "../Menu/MenuMusic";
import Song from "../Song/Song";
import "./Music.scss"


const Music = () => {

    const [songs, setSongs] = useState([
        { number: 1, image: 'https://avatars.yandex.net/get-music-content/6447985/458c45a5.a.22820453-1/50x50', title: ' По барам', body: 'ANNA ASTI', time: '3:57' },
        { number: 2, image: 'https://avatars.yandex.net/get-music-content/5559490/970071c8.a.18809983-1/50x50', title: ' Малиновая лада', body: 'GAYAZOV$ BROTHER$', time: '3:33' },
        { number: 3, image: 'https://avatars.yandex.net/get-music-content/6296749/d43b70b1.a.22794384-1/50x50', title: ' Известным', body: 'The Limba, MORGENSHTERN', time: '2:24' },
        { number: 4, image: 'https://avatars.yandex.net/get-music-content/5457712/825ee90c.a.18729695-1/50x50', title: ' Солнце Монако', body: 'Люся Чеботина', time: '2:40' },
        { number: 5, image: 'https://avatars.yandex.net/get-music-content/5966316/de3b7fdb.a.22811795-1/50x50', title: ' WAKE UP!', body: 'ZIVERT', time: '3:57' },
        { number: 6, image: 'https://avatars.yandex.net/get-music-content/5314916/a57cedc4.a.20559909-1/50x50', title: ' I got love', body: 'Miyagi & Эндшпиль', time: '3:33' },
        { number: 7, image: 'https://avatars.yandex.net/get-music-content/5631481/603b0c8d.a.20907667-1/50x50', title: ' Как ты там', body: 'Kamazz', time: '3:57' },
        { number: 8, image: 'https://avatars.yandex.net/get-music-content/5579153/1fbbc814.a.20708705-1/50x50', title: ' Гармония', body: 'Artik & Asti', time: '2:54' },
        { number: 9, image: 'https://avatars.yandex.net/get-music-content/4446014/3b69a4a6.a.19358877-1/50x50', title: ' Marmalade', body: 'Miyagi & Andy Panda, Mav-d', time: '3:40' },
        { number: 10, image: 'https://avatars.yandex.net/get-music-content/6447985/458c45a5.a.22820453-1/50x50', title: ' По барам', body: 'ANNA ASTI', time: '3:57' },
        { number: 11, image: 'https://avatars.yandex.net/get-music-content/5559490/970071c8.a.18809983-1/50x50', title: ' Малиновая лада', body: 'GAYAZOV$ BROTHER$', time: '3:33' },
        { number: 12, image: 'https://avatars.yandex.net/get-music-content/6296749/d43b70b1.a.22794384-1/50x50', title: ' Известным', body: 'The Limba, MORGENSHTERN', time: '2:24' },
        { number: 13, image: 'https://avatars.yandex.net/get-music-content/5457712/825ee90c.a.18729695-1/50x50', title: ' Солнце Монако', body: 'Люся Чеботина', time: '2:40' },
        { number: 14, image: 'https://avatars.yandex.net/get-music-content/5966316/de3b7fdb.a.22811795-1/50x50', title: ' WAKE UP!', body: 'ZIVERT', time: '3:57' },
        { number: 15, image: 'https://avatars.yandex.net/get-music-content/5314916/a57cedc4.a.20559909-1/50x50', title: ' I got love', body: 'Miyagi & Эндшпиль', time: '3:33' },
        { number: 16, image: 'https://avatars.yandex.net/get-music-content/5631481/603b0c8d.a.20907667-1/50x50', title: ' Как ты там', body: 'Kamazz', time: '3:57' },
        { number: 17, image: 'https://avatars.yandex.net/get-music-content/5579153/1fbbc814.a.20708705-1/50x50', title: ' Гармония', body: 'Artik & Asti', time: '2:54' },
        { number: 18, image: 'https://avatars.yandex.net/get-music-content/4446014/3b69a4a6.a.19358877-1/50x50', title: ' Marmalade', body: 'Miyagi & Andy Panda, Mav-d', time: '3:40' }
    ])


    return (
        <div className="container">
            <div className=" song_list">
                <MenuMusic />
                {songs.map((song, key) =>
                    <Song song={song} key={song.number} />
                )}
            </div>
        </div>

    )
}

export default Music