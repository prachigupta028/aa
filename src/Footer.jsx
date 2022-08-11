import React from 'react'
import { MdReplay10 } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { MdOutlineGrade } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { MdFlashOn } from "react-icons/md";


const Footer = () => {
  return (
    <div className='footer'>
        <h1>
            <MdReplay10 className="icons" id="load"/>
            <MdClear className="icons" id='cut'/>
            <MdOutlineGrade className="icons" id='star'/>
            <MdOutlineFavorite className="icons" id='heart'/>
            <MdFlashOn className="icons" id='crack'/>
        </h1>
    </div>
  )
}

export default Footer