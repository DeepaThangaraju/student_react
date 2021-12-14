import {useState,useEffect} from "react";
import './App.css';

function App() {
  return (
    <div className="App">
       <Studentlist />
    </div>
  );
}

function Studentlist(){
  const [student,setStudent]=useState([]);
  useEffect((fetch("https://deepastudentmentor.herokuapp.com/student")
  .then((data)=>data.json())
  .then((st)=>setStudent(st))),[])
  console.log(student);
  return (
    <div>
     

    </div>

  )
}




export default App;
