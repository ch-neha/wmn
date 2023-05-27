import './App.css';
import { Routes, Route} from 'react-router-dom';  
import Navbar from './components/Navbar';
import Post from './components/Post';
import Profile from './components/Profile';
import Home from './components/Home';
import Users from './components/Users';
import Login from './components/Login';
import NewPost from './components/NewPost';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='' element={<Home></Home>}/>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Users' element={<Users />}></Route>
        <Route path='/Post' element={<Post />}></Route>
        <Route path='/CreatePost' element={<NewPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;