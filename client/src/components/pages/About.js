import React from 'react';
import Navbar from "../Navbar";
import Creators from "../Creators";
import HeroImage from "../HeroImage";
import Instructions from "../Instructions";


export default function About() {
 return (
  <>
    <Navbar />
    <HeroImage/>
    <Instructions/>
    {/* THERES NEEDS TO BE A WAY TO DIVIDE 
        THESE SECTIONS TO LOOK NICE */}
    <Creators />
  </>
 )
}
