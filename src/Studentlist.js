import { useState, useEffect } from "react";

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
    <div>
      <h1>{name}</h1>
      <p>{mentor}</p>
      <p>{batch}</p>
      <p>{deletebutton}</p>
    </div>
  );
}
