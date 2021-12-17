import './App.css';
import { Mentorlist } from "./Mentorlist";
import { Studentlist } from "./Studentlist";

function App() {
  return (
    <div className="App">
       <Studentlist />
       <Mentorlist/>
    </div>
  );
}

export default App;
