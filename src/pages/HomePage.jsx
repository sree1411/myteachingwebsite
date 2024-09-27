import React from 'react';
import interviewImg from '../assests/interviewImage.jpg';
import BelowHomePage from './BelowHomePage';
import ListOfCourseItems from './ListOfCourseItems';
import '../App.css'; // Ensure to import your CSS file

const HomePage = () => {
  return (
    <>
      <div className='container abc mt-5'>
        <div className='row'>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <h1 className='heading'>Hi, I am Here to Help You Crack the Interview Process</h1>
            <h6 className='subheading'>Check Out the Courses Below If You Are Familiar With the Topics</h6>
            <ol className='course-list'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Bootstrap</li>
            </ol>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <img src={interviewImg} alt='Interview Illustration' className='img-fluid rounded' />
          </div>
        </div>
      </div>

      <BelowHomePage />
      <ListOfCourseItems />
    </>
  );
}

export default HomePage;
