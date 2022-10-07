import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Folder.scss'
import picture from './../../images/folderIfNull.jpg'
import { Link } from "react-router-dom";
import MenuMusic from "../Menu/MenuMusic";
const Folders = () => {

    const [folderState, setFolderState] = useState([]);


    useEffect(() => {
        axios.get('https://wladyslaw.ru/api/folder/')
            .then((response) => {
                const allFolders = response.data;
                setFolderState(allFolders);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className="container">
            <MenuMusic/>
            <div className="folder_list">
                {folderState.map((folder) => {
                    let link = '/folder/' + folder.id;
                    return (
                        <Link key={folder.id} to={link}>
                            <div className="folder" >
                                <p>{folder.title} </p>
                             <img className="cover_folder" src={folder.folderImage === " " ? {picture} : folder.folderImage}  /> 
                            </div>
                        </Link>

                    )
                })}
            </div>

        </div>
    )
}
export default Folders