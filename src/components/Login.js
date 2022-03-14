import React from 'react'

const Login = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex  items-center justify-center">
        <div>
          <div className="flex items-center justify-center container rounded-[20px] shadow-lg  bg-[#e4d6d6] h-[40vh] w-[40vw]">
            <div className="flex flex-col justify-around h-[80%] w-[80%] ">
              <div className="flex flex-col   items-center gap-8 justify-around ">
                <input className="p-5 text-lg focus:outline-none h-[50px] rounded-lg w-[90%]" type="email" placeholder="Enter your email address" />
                <input className="p-5 text-lg focus:outline-none rounded-lg h-[50px] w-[90%]" type="password" placeholder="Enter your password" />

              </div>
              <div className="flex items-center justify-around">
                <button class="h-[54px] w-[108px] text-lg text-white rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                  Login
                </button>             <a href="/forgot-password" className="">Forgot password ?</a>

              </div>
            </div>
          </div>
        </div>



      </div>

    </>
  )
}

export default Login
