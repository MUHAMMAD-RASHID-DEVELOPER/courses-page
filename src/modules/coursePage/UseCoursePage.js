import { useState } from "react";

export default function UseCoursePage(){
  const [capturedSearch,setCapturedSearch] = useState('');
  const[label,setLabel]=useState('');
  const courses = [
    { label: "Web Development", value: "Web" },
    { label: "Mobile Application Development", value: "Mobile" },
    { label: "Software Development", value: "Software" },
    { label: "Certified Computer Operator", value: "CCO" },
    { label: "Graphic Designer", value: "Graphic" },
    { label: "UI/UX Designer", value: "UI/UX" },
    { label: "Mobile Repairing", value: "Mobile" },
    { label: "Computer Hardware Repairing", value: "Computer" }
  ];

  const onChangeHandler =(option)=>{
    setCapturedSearch(option)
    setLabel(option.label)
  }


  return[capturedSearch,courses,onChangeHandler,label]
}



  



 
