import React from 'react'
import '../styles/header.css'
import img from '../images/res.jpg'
import { FaUniversity } from 'react-icons/fa'
import { FcDepartment } from 'react-icons/fc'
import { GiNotebook, GiTeacher } from 'react-icons/gi'
import { HiUserGroup } from 'react-icons/hi'
import { IoBookSharp } from 'react-icons/io5'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <img src={img} alt='loading...' className='image'/>
        <h1 className='htag'> The Gradebook</h1> 
      </div>
      <div>
        <ul className='ultag'>
            <li><FaUniversity className='icons'/>Lovely Professional University</li>
            <li><FcDepartment className='icons'/>Department: CSE</li>
            <li><GiNotebook className='icons'/>Title: Front End</li>
            <li><GiTeacher className='icons'/>Professor: Mir Junaid Rasool</li>
            <li><HiUserGroup className='icons'/>Section: KE109</li>
            <li><IoBookSharp className='icons'/>Semester: 2</li>
        </ul>
      </div>
    </div>
  )
}

export default Header