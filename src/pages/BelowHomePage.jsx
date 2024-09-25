 import html from '../assests/html.png'
 import css3 from '../assests/css3.png'
 import js from '../assests/javascript.png'
 import react from '../assests/reactjs.png'
 import redux from '../assests/redux.png'
 import bootstrap from '../assests/bootstrap.png'



const BelowHomePage = () => {
  return (
    <div class="container text-center">
    <div class="row">
      <div class="col">
         <img src={html} alt='html' />
      </div>
      <div class="col">
      <img src={css3} alt='html'/>
      </div>
      <div class="col">
      <img src={js} alt='html' />
      </div>
    </div>
    <div class="row">
      <div class="col">
      <img src={react} alt='html' />
      </div>
      <div class="col">
      <img src={redux} alt='html' />
      </div>
      <div class="col">
      <img src={bootstrap} alt='html' />
      </div>
    </div>
  </div>
  )
}

export default BelowHomePage