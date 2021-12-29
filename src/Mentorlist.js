import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function Mentorlist() {
  const [mentor, setMentor] = useState([]);
  const getMentors = () => {
    fetch("https://deepastudentmentor.herokuapp.com/mentor")
      .then((data) => data.json())
      .then((mt) => setMentor(mt));
  };
  useEffect(getMentors, []);
  console.log(mentor);
  return (
    <div className="mentorlist">
      {mentor.map((mentor, index) => <Display1
        name={mentor.mentor_name}
        student={mentor.students} />)}

    </div>

  );
}
function Display1({ name, student }) {
  return (
    <div>
      <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Mentor Name:{name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h3>Students:</h3>{student.map((arr) => <p>{arr}</p>)}
        </Typography>
      </CardContent>
      </Card>
    </div>
  );
}
