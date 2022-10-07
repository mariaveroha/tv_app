import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Folders from './Components/Folders/Folders';
import FolderItem from './Components/Folders/FolderItem';
import MainPage from './Components/MainPage/MainPage';
import LikeSerials from './Components/SerialsList/LikeSerials';
import SerialKindList from './Components/SerialKindLIst/SerialKindList';
import Serials from './Components/SerialsList/Serials';
import Films_list from './Components/Films_list/Films_list';
import Films from './Components/Films/Films';
import Music from './Components/Music/Music';
import Albums from './Components/Albums/Albums';



function App() {

  return (
    <BrowserRouter>
    <Routes>
<Route path = '/' element = {<MainPage/>} />
<Route  path = 'music' element = {<Music/>}/>
<Route path = 'folder' element = {<Folders/>}/>
<Route path = 'albums' element = {<Albums/>}/>
<Route path = 'folder/:id' element = {<FolderItem/>}/>

<Route  path = 'films' element = {<Films/>}/>
<Route  path = 'filmList' element = {<Films_list/>}/>

<Route path = 'serials' element = {<Serials/>}/>
<Route path = 'favouriteFolder'  element = {<LikeSerials/>}/>
<Route path = 'serialList'  element = {<SerialKindList/>}/>
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
