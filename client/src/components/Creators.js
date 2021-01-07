import React from "react";
import Swiper from "swiper";
import "./styles/Creators.css";

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
           <p style={{color: "white"}}>LOREM SHIT I AM WRITING RANDOM STUFF HERE SO BARE WITH ME IF THIS SEEMS TO BE OUT OF THE ORDINARY FOR YOU</p>
           <div className="img-Bx">
            <img alt="Creator-Selfie" height="100px" width="100px" src="https://i.imgur.com/hCVt35Q.jpg"/>
           </div>
           <div className="stats">
            <h2 style={{color: "white"}}>Someone Famous<br/><span>Website Designer</span></h2>
           </div>
         </div>
        </div>
       </div>
       {/* SECOND SLIDE JESSE FRAUSTO */}
       <div className="swiper-slide">
        <div className="page">
         <div className="overlay"></div>
          <div className="mainContent">
           <p style={{color: "white"}}>LOREM SHIT I AM WRITING RANDOM STUFF HERE SO BARE WITH ME IF THIS SEEMS TO BE OUT OF THE ORDINARY FOR YOU</p>
           <div className="img-Bx">
            <img alt="Creator-Selfie" height="100px" width="100px" src="https://i.imgur.com/C3Rj2Ti.png"/>
           </div>
           <div className="stats">
            <h2 style={{color: "white"}}>Someone Famous<br/><span>Website Designer</span></h2>
           </div>
         </div>
        </div>
       </div>
       {/* THIRD SLIDE MICHAEL MORENO */}
       <div className="swiper-slide">
        <div className="page">
         <div className="overlay"></div>
          <div className="mainContent">
           <p style={{color: "#ffffff"}}>LOREM SHIT I AM WRITING RANDOM STUFF HERE SO BARE WITH ME IF THIS SEEMS TO BE OUT OF THE ORDINARY FOR YOU</p>
           <div className="img-Bx">
            <img alt="Creator-Selfie" height="100px" width="100px" src="https://i.imgur.com/7a6lEgS.png"/>
           </div>
           <div className="stats">
            <h2 style={{color: "#ffffff"}}>Someone Famous<br/><span>Website Designer</span></h2>
           </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    
   </>
 );
 }

}

export default Creators;