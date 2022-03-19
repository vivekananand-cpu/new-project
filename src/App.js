
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

import UserProflie from "./components/UserProflie";
import People from './components/People';
import EditProfile from './components/EditProfile';

function App() {
  const [showModal,setShowModal]=useState(false);
  const post1="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Samantha_at_10_Enradhukulla_Teaser_Launch.jpg/1200px-Samantha_at_10_Enradhukulla_Teaser_Launch.jpg"

  const profile1="https://c.ndtvimg.com/2021-12/ebpsij18_samantha-ruth-prahu-naga-chaitanya_295x200_08_December_21.jpg"
  const openModal=()=>{
    setShowModal(!showModal);
  }


  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/friend" element={<FriendProfile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/people" element={<People />} />
        <Route path="/editprofle" element={<EditProfile />} />




        <Route path="/user" element={<UserProflie name="Samantha Akhineni" profile={profile1} post={post1} posts="43" phone="8788677472" work="Civil Engineer" likes="433" comments="34" following="234" followers="439"  />
} />




          {/* <FriendProfile /> */}

   
   </Routes>
   
</BrowserRouter>
      );
}
      export default App;

