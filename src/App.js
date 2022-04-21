
import { UserGroupIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BarChart from './components/BarChart';
import FriendProfile from './components/FriendProfile';
import { Jobs } from './components/Jobs';

import MainPage from './components/MainPage';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Chat from "./components/Chat"
import Login from "./components/Login"
import UserProflie from "./components/UserProflie";
import People from './components/People';
import EditProfile from './components/EditProfile';
import SignUp from './components/SignUp';

function App() {
  

  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path="/friend" element={<FriendProfile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/people" element={<People />} />
        <Route path="/editprofle" element={<EditProfile />} />




        <Route path="/user" element={<UserProflie  />
} />




          {/* <FriendProfile /> */}

   
   </Routes>
   
</BrowserRouter>
      );
}
      export default App;

