import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Folder.scss'
import picture from './../../images/folderIfNull.jpg'
import { Link, useParams } from "react-router-dom";



const Folders = () => {

    const [folderNumber, setFolderNumber] = useState([]);
    const { id } = useParams();




    useEffect(() => {
        axios.get('https://wladyslaw.ru/api/music/?folderId=' + id)
            .then((response) => {
                const folderId = response.data;
                setFolderNumber(folderId);


            })
            .catch(function (error) {
                console.log(error);
            })
        console.log(id)
    }, [])

    return (
        <div className="page">

            <div className="folder_in" >
                {folderNumber.map(folders =>
                    <div key={folders.id} className="songs">
                        <img className="song_cover" src={folders.trackImage} />
                        <div className="circle"></div>
                        <div className="songs_body">
                            <p className="song_title" >{folders.title}</p>
                            <p className="song_artist">{folders.artist}</p>
                        </div>

                    </div>
                )}
            </div>

        </div>
    )
}
export default Folders