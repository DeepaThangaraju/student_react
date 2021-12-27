
import './App.css';
import { Mentorlist } from "./Mentorlist";
import { Studentlist } from "./Studentlist";
import { Link, Route, Switch } from "react-router-dom"
import { AddForm } from './Addstudent';

function App() {
  return (
    <div className="App">
      <Link to="/mentors">Mentors</Link>
      <Link to="/students">Students</Link>
      <Link to="/editstudent">Add student</Link>
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
