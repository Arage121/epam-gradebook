import React from 'react'
import { Link } from 'react-scroll'
import '../styles/header.css'
import img from '../extras/res.jpg'
import { FaUniversity } from 'react-icons/fa'
import { FcDepartment } from 'react-icons/fc'
import { GiNotebook, GiTeacher } from 'react-icons/gi'
import { HiUserGroup } from 'react-icons/hi'
import { IoBookSharp } from 'react-icons/io5'

const Header = () => {

    const links = [
        {
            id: 1, 
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'grades'
        },
        {
            id: 4,
            link: 'contact'
        },
    ];


  return (
    <div name='home'>
      <div className='header'>
        <img src={img} alt='loading...' className='image'/>
        <h1 className='htag'> The Gradebook</h1> 
        <ul className='navbar'>
            {links.map(({id, link}) => (
            <li key={id} className='navli'>
                <Link className='link' to={link} smooth duration={500}>
                        {link}
                </Link>
            </li>
            ))}
        </ul>
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

      <div className='about'>
        <h1>About</h1>
        <p>The Gradebook project is a digital grading book designed to help professors and instructors manage student grades and performance.<br/>
          This app features a sortable and filterable table displaying key data for each student, including their exam grade, rating grade, final grade, and status.<br/>
          This app also includes a statistics section that provides valuable insights into student performance, including the number of students who received a certain grade and the average, maximum, and minimum grades.
          Additional features include the ability to toggle the visibility of the statistics section and an optional details section that provides additional information about each student.
          The Gradebook project is built using React and includes CSS styles for all components.</p>
      </div>
    </div>
  )
}

export default Header