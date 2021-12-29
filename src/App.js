
import './App.css';
import { Mentorlist } from "./Mentorlist";
import { Studentlist } from "./Studentlist";
import { Link, Route, Switch } from "react-router-dom"
import { AddForm } from './Addstudent';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function App() {
  return (
    <div className="App">
      <div className="menu">
       <ToggleButtonGroup>
      <ToggleButton value="mentor" aria-label="mentor">
      <Link to="/mentors">Mentors</Link>
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
      <Link to="/students">Students</Link>
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
      <Link to="/editstudent">Add student</Link>
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
     
      
      
      <Switch>
        <Route path="/mentors">
        <Mentorlist/>
        </Route>
        <Route path="/students">
        <Studentlist /> 
        </Route>
        <Route path="/editstudent">
        <AddForm />
        </Route>
      </Switch>
       
      
    </div>
  );
}

export default App;
