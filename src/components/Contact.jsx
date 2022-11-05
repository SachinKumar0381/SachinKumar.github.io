import { React } from 'react';

const Contact = ({darkMode}) => {


    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <h1 className={`${darkMode?"whead":"chead"}`}>- Get in touch -</h1>
        <h1 className='namee'>Sachin Kumar</h1>
        
        <div className='connect'>
          <div className={`${darkMode?"white":"black"}`}>
          <a href='https://www.linkedin.com/in/sachin-kumar-523a20233/' className='anch' target="_blank"><i class="fa-brands fa-linkedin"></i>
          <p className='cp'>linkedIn</p></a>
          </div>
          <div className={`${darkMode?"white":"black"}`}>
          <a href='https://github.com/SachinKumar0381' className='anch' target="_blank"><i class="fa-brands fa-square-github"></i>
          <p className='cp'>gitHub</p></a>
          </div>
          <div className={`${darkMode?"white":"black"}`}>
          <a href='mailto:sachinkuom0591998@gmail.com' className='anch'><i class="fa-solid fa-square-envelope"></i>
          <p className='cp'>Email</p></a>
          </div>
          <div className={`${darkMode?"white":"black"}`}>
          <a href='https://medium.com/@sachinkuom0591998' className='anch' target="_blank"><i class="fa-brands fa-medium"></i>
          <p className='cp'>Medium</p></a>
          </div>
          <div className={`${darkMode?"white":"black"}`}>
          <a href='tel:7277305644' className='anch'><i class="fa-solid fa-phone"></i>
          <p className='cp'>7277305644</p></a>
          </div>
        </div>
        </div>
    )
}

export default Contact
