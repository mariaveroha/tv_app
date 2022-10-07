import axios from "axios";
import React, { useEffect, useState } from "react";
import './Serials.scss'
import { Link } from "react-router-dom";
import MenuSerials from "../Menu/MenuSerials";

const Serials = () => {


    const [serialsList, setSerialsList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(1)
    const [totalCount, setTotalCount] = useState(0)

    const pagesNumber = [];
    for (let i = 1; i <= Math.ceil(totalCount / limit); i++) {
        pagesNumber.push(i)
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://wladyslaw.ru/api/serials')
            console.log(res.data)
            const localData = JSON.parse(localStorage.getItem('like')) ?? [];
            const serialsList = res.data.data.map((item) => {
                if (localData.includes(item.id)) {
                    item.like = true;
                }
                return item;
            })
            setSerialsList(serialsList);
            setTotalCount(res.data.fullCount)
            setLimit(res.data.perPage)

        }
        fetchPosts()

    }, [])

    async function page(number) {
        setCurrentPage(number)
        const res = await axios.get('https://wladyslaw.ru/api/serials/?page=' + number)
        setSerialsList(res.data.data)
    }



    function addLike(e, serialsId) {
        const like = e.currentTarget.checked;
        console.log(like)
        const newSerialsList = serialsList.map((item) => {
            if (item.id === serialsId) {
                item.like = like;
            }
            return item;
        });
        setSerialsList(newSerialsList);
        let localData = JSON.parse(localStorage.getItem('like')) ?? [];
        if (like === true) {
            if (!localData.includes(serialsId)) {
                localData.push(serialsId);

            }
        }
        else if (like === false) {
            localData = localData.filter((item) => {
                return item !== serialsId
            })
        }
        localStorage.setItem('like', JSON.stringify(localData))

    }
    
    return (
        <div className="container">
            <MenuSerials/>
            <p className="page_title"> Сериалы</p>
            <div className="serial_list">
                {serialsList.map((serials) =>
                    <div className="serial" key={serials.id}>
                        <img className="wallpaper_serial" src={serials.wallpaperImg}></img>
                        <div className="title_serial">
                            <p> {serials.title}</p>
                            <input type="checkbox" checked={serials.like} onChange={(e) => addLike(e, serials.id)} />
                        </div>
                    </div>

                )}
            </div>


            <div className="pagination">
                <div className="pagination_item" >{"<"}</div>
                {pagesNumber.map((number) => {
                    return (
                        <div key={number} onClick={() => page(number)} className="pagination_item" >
                            <span >{number}</span>
                        </div>

                    )
                })}
                <div className="pagination_item" >{">"}</div>

            </div>

        </div>
    )
}
export default Serials