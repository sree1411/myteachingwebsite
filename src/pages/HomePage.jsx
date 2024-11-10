import interviewImg from '../assests/interviewImage.jpg';
import BelowHomePage from './BelowHomePage';
import ListOfCourseItems from './ListOfCourseItems';
import whatsapp from '../assests/whatsapp.webp'
import '../App.css';  
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className='container abc mt-5'>
         <h1 className='d-block d-lg-none d-md-none'> If you want to Contact me, Click here <br/>
           <NavLink to="/contactus" className="btn btn-primary">Click here</NavLink>
           <hr></hr>
           <a aria-label="Chat on WhatsApp" href="https://wa.me/9014701189"> <img alt="Chat on WhatsApp" src={whatsapp}  width="50px" height="50px"  />
            Click here to chat on WhatsApp
           </a>
         </h1>
        <div className='row mt-5'>
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
