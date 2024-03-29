import React from 'react'
import jwt from 'jwt-decode'
import {GoogleLogin} from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import {client} from '../client'

const Login = () => {
    const navigate = useNavigate();
    const responseGoogle=(response)=>{
      console.log(response);
      var profile=jwt(response.credential);
console.log(profile);


       localStorage.setItem('user',JSON.stringify(profile));
       const name=profile.name;
       const googleId= profile.sub;
       const imageUrl= profile.picture;
       const doc={
      _id:googleId,
      _type:'user',
      userName:name,
      image:imageUrl,
    }
    client.createIfNotExists(doc).then(
      ()=>{navigate('/',{replace:true})}
    )
    }
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
            <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className='w-full h-full object-cover'
            />        
         
         <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
         <div className='p-5'>
            <img src={logo} width="130px" alt="logo"/>
         </div>
         <div className='shadow-2xl'>
            <GoogleLogin
            clientId="551413078357-sqtd7usj2d7mi4kj2vu8esp8h20mdjm2.apps.googleusercontent.com"
            render={(renderProps)=>(
              <button
              type='button'
              className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}>
                 <FcGoogle className='mr-4'/>  Sign in with Google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"/>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Login