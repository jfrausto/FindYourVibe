import React from 'react';
import "./styles/Steps.css";

export default function Steps() {
 return (
   <>
  <div className="stepsContainer">  
    <div className="imgCarousel">
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
      <div className="steps step6">
       <div className="textContent">
         <h1>
           Step 6
         </h1>
         <p>The first thing that you have to do is read this!</p>
       </div>
       </div>
    </div>
    <div class="buttons">
      <div id="prev"><svg width="100px" height="100px" viewBox="0 0 16 16" class="bi bi-chevron-double-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></div>
      <div id="next"><svg width="100px" height="100px" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
    </div>
  </div>
  </>
 )
}
