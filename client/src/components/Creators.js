import React from "react";
import Swiper from "swiper";
import "./styles/Creators.css";
import Jose from "./Images/JoseProfile.png";
import Jesse from "./Images/JesseProfile.jpg";
import Michael from "./Images/MichaelProfile.png";

// USING OLD WAY T0 BRING IN SWIPER EFFECTS
// FROM GIVEN EXAMPLES
class Creators extends React.Component {
 componentDidMount () {
  this.swiper = new Swiper('.swiper-container', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth: 0,
     modifier: 1,
     slideShadows: true,
   },
   loop: true,
 });
 }
 render () {
   return (
    <>

  {/* FIRST SLIDE JOSE ULICES PEREZ JR. */}
    <div className="cardPicsLayout">
     <div className="swiper-container">
      <div className="swiper-wrapper">
       <div className="swiper-slide">
        <div className="page">
         <div className="overlay"></div>
          <div className="mainContent">
           <p className="quoteStyle">"Solving Tomorrow's Problem Today!"</p>
           <div className="img-Bx">
            <img id="Jose" alt="Creator-Selfie" height="100px" width="100px" src={Jose}/>
           </div>
           <div className="stats">
            <h2 style={{color: "#ebebeb"}}>Jose Ulices Perez Jr.<br/><span>Full Stack Web Developer</span></h2>
           </div>
         </div>
        </div>
       </div>

       {/* SECOND SLIDE JESSE FRAUSTO */}
       <div className="swiper-slide">
        <div className="page">
         <div className="overlay"></div>
          <div className="mainContent">
           <p className="quoteStyle">"I strive to be better everyday!"</p>
           <div className="img-Bx">
            <img id="Jesse" alt="Creator-Selfie" height="100px" width="100px" src={Jesse}/>
           </div>
           <div className="stats">
            <h2 style={{color: "#ebebeb"}}>Jesse Frausto<br/><span>Full Stack Web Developer</span></h2>
           </div>
         </div>
        </div>
       </div>
       {/* THIRD SLIDE MICHAEL MORENO */}
       <div className="swiper-slide">
        <div className="page">
         <div className="overlay"></div>
          <div className="mainContent">
           <p className="quoteStyle">"Change the World for the Better"</p>
           <div className="img-Bx">
            <img id="Michael" alt="Creator-Selfie" height="100px" width="100px" src={Michael}/>
           </div>
           <div className="stats">
            <h2 style={{color: "#ebebeb"}}>Michael Moreno<br/><span>Full Stack Web Developer</span></h2>
           </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    
    {/* JUST TO SEE REFLECTION ANIMATION 
        ON THE BOTTOM CAN DELETE AFTER */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


   </>
 );
 }

}

export default Creators;