import React from 'react'
import Post from './Post'

//this is the users Array

const Users=[
    {name:"Vivek Thorat",caption:"this is my post",work:"Civil Engineer",img:"https://pbs.twimg.com/profile_images/1387822869619478540/lhocXKtV_400x400.jpg"},
    {name:"Aditya Gadge",caption:"How am I looking",work:"Interior Designer",img:"https://wikibio.in/wp-content/uploads/2019/04/Atif-Aslam.jpg"},
    {name:"Gaurav Haral",caption:"Having good times",work:"Gavandi",img:"https://pbs.twimg.com/profile_images/1387822869619478540/lhocXKtV_400x400.jpg"}
]


const Posts = () => {
    return (
        <>
            {
                Users.map((user)=>(
                    <Post username={user.name} caption={user.caption} img={user.img} />
                ))
            }
            
        </>
    )
}

export default Posts
