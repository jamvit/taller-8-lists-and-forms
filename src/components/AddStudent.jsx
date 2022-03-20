import { useState } from "react";

function AddStudent(addNewStudent) {
  const initialState = {
    name: "",
    age: 0,
    grade: "?",
  };
  const [student, setStudent] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewStudent(student);
  };

  return (
    <div>
      <h3>add new student</h3>
      <form onSubmit={handleSubmit}>
        <lable>
          Name:
          <input
            type="text"
            name="name"
            value={student.name}
            onchange={handleChange}
          />
        </lable>
        <br />
        <lable>
          Age:
          <input
            type="number"
            name="age"
            value={student.age}
            onchange={handleChange}
          />
        </lable>
        <br />
        <lable>
          Grade:
          <input
            type="text"
            name="grade"
            value={student.grade}
            onchange={handleChange}
          />
        </lable>
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default AddStudent;
