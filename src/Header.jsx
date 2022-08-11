import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { MdQuestionAnswer } from "react-icons/md";



const Header = () => {
  return (
    <h1 className='header'>
        <MdAccountCircle  className='icon'/>
        <img src="https://play-lh.googleusercontent.com/TcHgSH30vCBCtQfyFLWvvPJdpOAJrSp1OtqopwMue3yRiXa7wT5Fs8gUbA3oJylGW991" className='tinder' />
         <MdQuestionAnswer className='icon'/>
         
        </h1>
  )
}

export default Header