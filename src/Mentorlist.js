import { useState, useEffect } from "react";

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
      <h1>{name}</h1>
      <h4>Students:</h4>{student.map((arr) => <p>{arr}</p>)}
    </div>
  );
}
