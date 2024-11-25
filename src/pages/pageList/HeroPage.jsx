import "./heropage.css";
import interviewImage from '../../assests/interviewImage.jpg'

const HeroPage = () => {
  return (
    <main>
      <div className="container text-center background-blue">
        <div className="row row2 align-items-center">
          <div class="col-md-6">
            <h3> Hi, I am Here to Help You Crack the Interview Process</h3>
            <h6>
              Check Out the Courses Below,If You Are Familiar With the Topics
            </h6>
            <ul className="heropage_ul">
              <li> HTML</li>
              <li> CSS</li>
              <li> Java Script </li>
              <li> React Js</li>
              <li> Redux</li>
              <li> Bootstrap</li>
              <li> Material UI</li>
              <li> Git</li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
          <img src={interviewImage}  alt="interviewImage" className="interview" />
        </div>
        </div>
       
      </div>
    </main>
  );
};

export default HeroPage;
