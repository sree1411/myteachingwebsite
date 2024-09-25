import React from 'react'
import interviewImg from '../assests/interviewImage.jpg' 
import BelowHomePage from './BelowHomePage'
import ListOfCourseItems from './ListOfCourseItems'

const HomePage = () => {
  return (
     <>
        <div className='container abc'>
         <div className='d-flex'>
         <div className="col-lg-4 col-md-4 col-sm-6">
          <h1> Hi , I am Here to Help You to Crack the Interview Process </h1>
          <h6> Check Out the below Courses,If you are familiar with the Topics</h6>
          <ol>
            <li>HTML</li>
            <li>Css</li>
            <li>Java Script </li>
            <li>React Js</li>
            <li>Redux </li>
            <li>Bootdstrap </li>
          </ol>
        </div>
        <div className="col-lg-8 col-md-5 col-sm-6">
           <img src={interviewImg} alt='imginterview' style={{width:"100%"}} />
        </div>
         </div>
        </div>

        <BelowHomePage/>   
        <ListOfCourseItems/>
    
     </>
  )
}

export default HomePage