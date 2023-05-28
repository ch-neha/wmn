import './App.css';
import { Routes, Route} from 'react-router-dom';  
import Navbar from './components/Navbar';
import Post from './components/Post';
import Profile from './components/Profile';
import Home from './components/Home';
import Users from './components/Users';
import Login from './components/Login';
import NewPost from './components/NewPost';
import Register from './components/Register';
import ChatApp from './components/ChatApp';
import Stats from './components/Stats';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Users' element={<Users />}></Route>
        <Route path='/Post' element={<Post />}></Route>
        <Route path='/addPost' element={<NewPost />}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Chat' element={<ChatApp></ChatApp>}></Route>
        <Route path='/stats/turingCup' element={<Stats />}></Route>
      </Routes>
    </div>
  );
}

export default App;