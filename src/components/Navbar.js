import React, { useEffect, useState } from 'react'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    MenuIcon,
    ChatIcon,
    HomeIcon,
    BriefcaseIcon,
    XIcon



} from "@heroicons/react/solid";
import {
    EmojiHappyIcon,
    PencilAltIcon,
    CogIcon,
    SupportIcon,
    LogoutIcon,
    XCircleIcon
} from "@heroicons/react/outline";


import JSONDATA from "./MOCK_DATA.json";



const Navbar = () => {
  


    let [open, setOpen] = useState(false);
    let [openProfile, setOpenProfile] = useState(false);
    const [searchInput, setSearchInput] = useState('');
   

   




    return (
        <>

            <div className="shadow-md z-50 w-full sticky top-0 left-0">
                <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7" >
                    <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                        <span>
                            <PlusCircleIcon className="h-8 top-6" />
                        </span>
                        Designer
                    </div>
                    <div onClick={() => setOpen(!open)} className="absolute top-5 right-8 cursor-pointer md:hidden">
                        {
                            !open ? (<MenuIcon className="h-8" />) : (<XIcon className="h-8" />)

                        }

                    </div>
                    <div className=" relative hidden mt-5 p-3 md:mt-0 md:inline   ">
                        <div className="bg-yellow-300 rounded-lg flex flex-col items-center justify-center  ">
                            <div className="flex items-center space-x-2 bg-white rounded-lg shadow-lg" >
                                <SearchIcon className="h-5 w-5 mx-2" />
                                <input onChange={(e)=>setSearchInput(e.target.value)} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding    rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" type="search" id="search" />

                            </div>
                         

                            <div name="users" className={`${searchInput ?"absolute":"hidden"}   flex flex-col items-center overflow-y-auto scroll-smooth snap-none h-[450px] p-2 bg-[#F6F1F1] w-[316px]  rounded-lg top-10 flex flex-col mt-4`}>
                                 {
                                    JSONDATA.filter((user)=>{
                                        if(searchInput==""){
                                            return user;
                                        }
                                        else if(user.first_name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ){
                                            return user;
                                        }
                                        
                                    })
                                    .map((user) => {
                                        return (

                                          
                                                <div key={user.id} className="shadow-md hover:shadow-xl hover:scale-105  active:scale-95 hover:bg-[#FFCACA] transtion-all duration-500 ease-out p-2 rounded-lg border-gray-600 w-full  space-y-2 mb-2">
                                                <div className="flex flex-col w-full mt-3 border-1 border-gray-700" >
                                                    <h4 className=" text-lg">{user.first_name + " "+user.last_name}</h4>
                                                    <p className="text-gray-500 text-sm">{user.email}</p>
                                                </div>
                                            </div>

                                            

                                            
                                        )
                                    })
                                } 
                               

                            </div>

                        </div>


                    </div>

                    <ul className={`${open ? "inline" : "hidden"} md:flex md:items-center md:space-x-4 space-y-4 pl-3 transition-all duration-500 ease-in`}>


                        <li className="mt-3">


                            <HomeIcon className="h-6  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />


                        </li>
                        <li className="mt-3">

                            <ChatIcon className="h-6    md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />




                        </li>
                        <li className="mt-3">
                            <PlusCircleIcon className="h-6  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />

                        </li>
                        <li className="mt-3">
                            <UserGroupIcon className="h-6  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />

                        </li>
                        <li className="mt-3">
                            <BriefcaseIcon className="h-6  md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />

                        </li>
                        <li onClick={() => setOpenProfile(!openProfile)} className="hidden md:inline mt-3 hover:scale-105 transtion-all duration-500 ease-out">
                            <img src="https://imgk.timesnownews.com/media/15906943c06218cb9d67d1855bc6cc5e.jpg" className="h-10 rounded-full cursor-pointer object-contain" alt="profile-pic" />


                        </li>
                        <div className="wrapper" >
                            <div className={`${openProfile ? "md:inline" : "md:hidden"} inline  bg-pink-700 text-white rounded-lg  absolute top-[80px] right-1 p-3 flex flex-col space-y-3 transition-all duration-500 ease-out hover:scale-105 shadow-lg  `}>
                                <div className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out ">
                                    <EmojiHappyIcon className="h-5 text-yellow-300" />
                                    <a href="">My profile</a>

                                </div>
                                <div className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out">
                                    <PencilAltIcon className="h-5 text-yellow-300" />

                                    <a href="">Edit profile</a>

                                </div>
                                <div className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out">
                                    <CogIcon className="h-5 text-yellow-300" />

                                    <a href="">Settings</a>

                                </div>
                                <div className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out">
                                    <SupportIcon className="h-5 text-yellow-300" />

                                    <a href="">Help</a>

                                </div>
                                <div className="flex items-center align-center space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out">
                                    <LogoutIcon className="h-5 text-yellow-300" />

                                    <a href="">Logout</a>

                                </div>
                                <div className="hidden md:inline-flex w-full cursor-pointer  items-center justify-center">
                                    <XCircleIcon onClick={() => setOpenProfile(!openProfile)} className="h-6 mt-4 hover:text-gray-300 hover:scale-105 transition-all duration-500 ease-in-out" />

                                </div>


                            </div>

                        </div>




                    </ul>

                </div>
            </div>

        </>
    )
}

export default Navbar
