import React, { useState } from "react";
import MenuSerials from "../Menu/MenuSerials";
import SerialKind from "../SerialKind/SerialKind";
import './SerialKindList.scss'
const SerialKindList = () => {
    const [serialKind, setSerialKind] = useState([
        { id: 1, image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/905ad5d9-6429-4b2e-9ab9-3d2761a37f0b/192x192', serial_title: 'Приключения' },
        { id: 2, image: 'https://avatars.mds.yandex.net/get-bunker/118781/978442eab5efbae3978771d335a13a5f0289b85e/192x192', serial_title: 'Фэнтези' },
        { id: 3, image: 'https://avatars.mds.yandex.net/get-bunker/56833/3f2342b15393fb66d99757e9e0384ffb68fbfe02/192x192', serial_title: 'Военные' },
        { id: 4, image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/9b4e6c40-30a4-4117-88e3-1aa8974376af/192x192', serial_title: 'Семейные' },
        { id: 5, image: 'https://avatars.mds.yandex.net/get-bunker/998550/02b1907eef5123b57eea76be2aab126ab5888717/192x192', serial_title: 'Аниме' },
        { id: 6, image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/8f16ba26-5193-48e5-8f61-4c8a59b97f85/192x192', serial_title: 'Исторические' },

    ])
    return (

        <div className="container">
            <MenuSerials/>
            <p className="SerialKindList_title"> Жанры</p>
            {serialKind.map((kind, key) => 
          <SerialKind  serialKind={kind} key = {kind.id}/>
            )}
                
        </div>
    )
}

export default SerialKindList