import React from 'react'
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <div className="h-[100vh] w-[100vw] flex mb-10  items-center  justify-center">
            <div className="h-[90%] bg-gray-50 rounded-lg shadow-lg xl:w-[40%] lg:w-[50%] md:w-[60%] w-[90%] ">
                <div className=" flex h-full w-full">
                    <div className=" w-full p-3 mt-6">
                        <div className="font-bold text-3xl">
                            <p>Hey,</p>
                            <p>SignUp Now</p>
                        </div>


                        <div className="flex mt-5 text-sm space-x-2">
                            <p className="text-gray-500">Already have one ? / </p>
                            <a className="text-pink-500" href="/login"> Login</a>
                        </div>

                        <form action="">
                            <div className="w-full flex flex-col space-y-2 mt-5">
                                <div className="w-full">
                                    <p className="font-bold">Name</p>
                                    <input  className=" w-full h-[40px] text-gray-500 bg-gray-50 border-b-[2px] focus:outline-none" type="text" placeholder />
                                </div>
                                <div className="w-full">
                                    <p className="font-bold">Email</p>
                                    <input className=" w-full h-[40px] text-gray-500 bg-gray-50 border-b-[2px] focus:outline-none" type="email" placeholder />
                                </div>
                                <div className="w-full">
                                    <p className="font-bold">Password</p>
                                    <input className=" w-full h-[40px] text-gray-500 bg-gray-50 border-b-[2px] focus:outline-none" type="password" placeholder />
                                </div>
                                <div className="w-full">
                                    <p className="font-bold">Mobile Number</p>
                                    <input className=" w-full h-[40px] text-gray-500 bg-gray-50 border-b-[2px] focus:outline-none" type="number" placeholder />
                                </div>
                                <div className="w-full p-4">
                                    <button className="bg-pink-500 text-white font-bold hover:shadow-md mt-4 transtion duration-200 ease-out hover:shadow-pink-700 rounded-xl p-3  w-full">SignUp</button>

                                </div>
                            </div>
                        </form>

                        <p className="text-sm w-full text-center font-bold">Or Signup with</p>
                        <div className="w-full flex justify-center">
                            <div className="w-[50%] mt-4 flex justify-between" >

                                <img className="h-8 hover:scale-105 transtion transform duration-300 ease-out cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" />
                                <img className="h-8 hover:scale-105 transtion transform duration-300 ease-out cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/640px-Facebook_icon.svg.png" alt="" />
                                <img className="h-8 hover:scale-105 transtion transform duration-300 ease-out cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" alt="" />
                            </div>
                        </div>



                    </div>
                </div>


            </div>



        </div>
    )
}

export default SignUp;
