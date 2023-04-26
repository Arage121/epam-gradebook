import React, {useState, useEffect} from 'react'
import '../styles/contact.css'
import { Link } from 'react-scroll'
import { TbArrowRightCircle } from 'react-icons/tb'

const Contact = () => {
  const[date,setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});

  return <div name='contact' className="contact-section">
  <div className="container">
    <div className='top'>
    <h1>Contact</h1>
    <h2 className='firsth2'>{date.toLocaleDateString()}</h2>
    <h2 className='sech2'>{date.toLocaleTimeString()}</h2>
    </div>
    <p id='p'>Submit the form below to get in touch with me</p>
    

    <div className="flex justify-center items-center">
      <form action="https://getform.io/f/15bb99bf-66f1-467f-8251-0e2faaaadbe7" method="POST">
        <input id='inp1' className='inp2' required type="text" name="name" placeholder="Enter your name" />
        <input className='inp2' required type="text" name="email" placeholder="Enter your email" />
        <textarea name="message" required id='txt' rows="10" placeholder="Enter your message"></textarea>
        <div className='btdiv'>
        <button>Let's talk</button>
        <Link id='link' to='home' smooth duration={500}>Go to Home 
        <span className='sp'>
          <TbArrowRightCircle size={22} className='ml'/>
        </span>
        </Link>
        </div>
      </form>
    </div>
  </div>
</div>
}

export default Contact