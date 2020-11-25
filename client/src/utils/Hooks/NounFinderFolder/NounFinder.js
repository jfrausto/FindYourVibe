import NounsList from "./NounsList";
import { useState, useEffect } from "react";

// CAN POTENTIALLY USE THIS HOOK FOR REGEX AND ADD ADDITIONAL CHECKS TO IT
//**NUMBERS */
const useNounFinder = (text) => {
  const [foundNouns, setFoundNouns] = useState([]);
  useEffect(
    () => { 
      let newStr = text.replace(/[^a-zA-Z]*$/g, ""); //REGEX THAT REMOVES PUNCTUATIONS
      let lowerCase = newStr.toLowerCase();   //! NEEDS TO BE EDITED TO FOR APPLICATION
      let words = lowerCase.split(" ");
      var filtered = words.filter(
      function(e) {
        return this.indexOf(e) > 0;
      },
      (NounsList)
  );
  setFoundNouns(filtered);
},
  // ONLY CALLS THE EFFECT IF TEXT CHANGE
  [text]
);

  return foundNouns;
    };

export default useNounFinder;