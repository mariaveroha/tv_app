import React, { useEffect } from "react";
import './MainPage.scss'
import { useNavigate } from "react-router-dom";
const MainPage = () => {

    const KeyDownFunction = (e) => {
        const container =  document.querySelector ('.main_page_container');
        container.setAttribute('data-event', '1');
        if (e.key === 'ArrowRight') {
            let currentIndex;
            container.childNodes.forEach((el, index)=>{ // ['a', 'b', 'c'] 0, 1, 2
                if (el.classList.contains('main_page_title_1')) {
    
                    currentIndex = index;
                    console.log(currentIndex);
                    if (currentIndex+1 >= container.childNodes.length) {
                        return false;
                    }
                    el.classList.remove('main_page_title_1');
                    el.classList.add('main_page_title');
                } else {
                  
                    if (currentIndex+1 === index) {
                        el.classList.add("main_page_title_1");
                    }
                    
                }
            })
        }
        if (e.key === 'ArrowLeft') {
            let currentIndex;
            let newContainer =  container.childNodes;
            newContainer = Array.from (newContainer)
            newContainer.reverse ();
            newContainer.forEach ((el,index)=> {
                if (el.classList.contains ('main_page_title_1')) {
                    currentIndex = index;
                    if (currentIndex+1 >=  newContainer.length) {
                        return false
                    }
                    el.classList.remove ('main_page_title_1')
                    el.classList.add ('main_page_title')
                }
                else {
                  if (currentIndex+1 === index) {
                    el.classList.add ('main_page_title_1') 
                  }
                }
            })
        }
        if (e.key === "Enter") {
            let clickEvent = new MouseEvent ('click', { 
            "view": window,
            "bubbles": true,
            "cancelable": false})
            container.childNodes.forEach ((el)=> {
               if (el.classList.contains('main_page_title_1')) {
                el.dispatchEvent (clickEvent)
            return false}  
            })     
        }
    };
    useEffect(() => {
        const container =  document.querySelector ('.main_page_container');
        if (container && container.getAttribute('data-event') !== '1') {
            document.body.addEventListener('keydown', KeyDownFunction)
        }
    }, []);

    let navigate = useNavigate()
    const goMusic = () => {
        navigate('music')
    }

    const goFilms = () => {
        navigate('films')
    }

    const goSerials = () => {
        navigate('serials')
    }


    return (
        <div className="main_page_container">
            <p className="main_page_title_1" onClick={goMusic}>Музыка</p>
            <p className="main_page_title" onClick={goFilms}>Фильмы</p>
            <p className="main_page_title" onClick={goSerials}>Сериалы</p>
        </div>
    )
}
export default MainPage