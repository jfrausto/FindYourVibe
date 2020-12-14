import React from 'react';
import "./styles/Steps.css";

export default function Steps() {
  var slides = document.getElementsByClassName("steps");
  // const next = document.querySelector("#next");
  // const prev = document.querySelector("#prev");
  // const auto = false;
  // const intervalTime = 5000;
  // let slideInterval;

  const nextSlide = () => {

    var current = document.querySelector(".step1");
    current.classList.remove("step1");

    if(current.nextElementSibling) {
      current.nextElementSibling.classList.add("step1");
    } else {
      slides[0].classList.add("step1");
    }
    setTimeout(() => current.classList.remove("step1"));
  }
  
  const prevSlide = () => {
    var current = document.querySelector(".step1");
    current.classList.remove("step1");

    if(current.previousElementSibling) {
      current.previousElementSibling.classList.add("step1");
    } else {
      slides[slides.length - 1].classList.add("step1");
    }
    setTimeout(() => current.classList.remove("step1"));
  }

//  if(auto) {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }
 return (
   <div className="stepsContainer"> 
    <div className="imgCarousel">
      <div className="steps step6">
       <div className="textContent">
         <h1>
           Step 6
         </h1>
         <p>The first thing that you have to do is read this!</p>
       </div>
       </div>
      <div className="steps step1">
       <div className="textContent">
         <h1>
           Step 1
         </h1>
         <p>The first thing that you have to do is read this!</p>
       </div>
       </div>
      <div className="steps step2">
       <div className="textContent">
         <h1>
           Step 2
         </h1>
         <p>The first thing that you have to do is read this!</p>
       </div>
       </div>
      <div className="steps step3">
       <div className="textContent">
         <h1>
           Step 3
         </h1>
         <p>The first thing that you have to do is read this!</p>
       </div>
       </div>
      <div className="steps step4">
       <div className="textContent">
         <h1>
           Step 4
         </h1>
         <p>The first thing that you have to do is read this!</p>
       </div>
       </div>
      <div className="steps step5">
       <div className="textContent">
         <h1>
           Step 5
         </h1>
         <p>The first thing that you have to do is read this!</p>
       </div>
       </div>
    </div>
    <div className="buttons">
      <div id="prev" onClick={prevSlide} ><svg width="50px" height="50px" viewBox="0 0 16 16" className="bi bi-chevron-double-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></div>
      <div id="next" onClick={nextSlide} ><svg width="50px" height="50px" viewBox="0 0 16 16" className="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
    </div>
  </div>
 )
}
