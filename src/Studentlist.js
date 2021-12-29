import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function Studentlist() {
  const [student, setStudent] = useState([]);
  const getStudents = () => {
    fetch("https://deepastudentmentor.herokuapp.com/student")
      .then((data) => data.json())
      .then((st) => setStudent(st));
  };
  useEffect(getStudents, []);
  console.log(student);
  const deleteStudent = (id) => {
    console.log(id);
    fetch(`https://deepastudentmentor.herokuapp.com/student/${id}`,
      {
        method: "DELETE",
      })
      .then(() => getStudents());


  };
  return (
    <div className="studentlist">
      {student.map(({ student_name, mentor_name, batch, id }, index) => <Display
        name={student_name}
        mentor={mentor_name}
        batch={batch}
        deletebutton={<button onClick={() => deleteStudent(id)}>Delete</button>} />)}

    </div>

  );
}
function Display({ name, mentor, batch, deletebutton }) {
  return (
    <div className="displaystudent">
      <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Student Name:{name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h4>Mentor Name:<span className="sty">{mentor}</span></h4>
          <h4>Batch:<span className="sty">{batch}</span></h4>
        </Typography>
      </CardContent>
      <CardActions>
        {deletebutton}
      </CardActions>
      </Card>
    </div>
  );
}
