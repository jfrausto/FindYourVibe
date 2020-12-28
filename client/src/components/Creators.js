import React from "react";
import "./styles/Creators.css";
 

class Creators extends React.Component {
 componentDidMount () {
  this.swiper = new Swiper('.swiper-container', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   pagination: {
     el: '.swiper-pagination',
   },
 });
 }
 render () {
   return (
    <>
  
    <div className="testimonials">
     <div className="swiper-container">
      <div className="swiper-wrapper">
       <div className="swiper-slide">
        <div className="page">
         <div className="layer"></div>
          <div className="content">
           <p style={{color: "black"}}>LOREM SHIT I AM WRITING RANDOM STUFF HERE SO BARE WITH ME IF THIS SEEMS TO BE OUT OF THE ORDINARY FOR YOU</p>
           <div className="img-Bx">
            <img height="100px" width="100px" src="https://i.imgur.com/hCVt35Q.jpg"/>
           </div>
           <div className="details">
            <h2 style={{color: "black"}}>Someone Famous<br/><span>Website Designer</span></h2>
           </div>
         </div>
        </div>
       </div>
       {/* SECOND SLIDE HERE */}
       <div className="swiper-slide">
        <div className="page">
         <div className="layer"></div>
          <div className="content">
           <p style={{color: "black"}}>LOREM SHIT I AM WRITING RANDOM STUFF HERE SO BARE WITH ME IF THIS SEEMS TO BE OUT OF THE ORDINARY FOR YOU</p>
           <div className="img-Bx">
            <img height="100px" width="100px" src="https://i.imgur.com/hCVt35Q.jpg"/>
           </div>
           <div className="details">
            <h2 style={{color: "black"}}>Someone Famous<br/><span>Website Designer</span></h2>
           </div>
         </div>
        </div>
       </div>
       {/* THIRD SLIDE HERE */}
       <div className="swiper-slide">
        <div className="page">
         <div className="layer"></div>
          <div className="content">
           <p style={{color: "black"}}>LOREM SHIT I AM WRITING RANDOM STUFF HERE SO BARE WITH ME IF THIS SEEMS TO BE OUT OF THE ORDINARY FOR YOU</p>
           <div className="img-Bx">
            <img height="100px" width="100px" src="https://i.imgur.com/hCVt35Q.jpg"/>
           </div>
           <div className="details">
            <h2 style={{color: "black"}}>Someone Famous<br/><span>Website Designer</span></h2>
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