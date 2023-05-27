import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Users from './components/Users';
import NewPost from './components/NewPost';



function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/createPost" element={<NewPost />} />

      </Routes>
    </div>
  );
}

export default App;
