import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {

  const [faculty_id, setfaculty_id] = useState("");
  const [faculty_name, setfaculty_name] = useState("");
  const [department, setdepartment] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [city, setcity] = useState("");

  const [student_id, setstudent_id] = useState("");
  const [student_name, setstudent_name] = useState("");
  const [stud_department, setstud_department] = useState("");
  const [stud_date_of_birth, setstud_date_of_birth] = useState("");
  const [stud_city, setstud_city] = useState("");
  // const [newWage, setNewWage] = useState(0);
  const [studentList, setStudentList] = useState([]);
  const [facultyList, setfacultyList] = useState([]);

  const addFaculty = () => {
    Axios.post("http://localhost:3001/create/faculty", {
      faculty_id: faculty_id,
      faculty_name: faculty_name,
      department: department,
      date_of_birth: date_of_birth,
      city: city,
    }).then((res) => {
      alert(res.data)
      setfacultyList([
        ...facultyList,
        {
          faculty_id: faculty_id,
          faculty_name: faculty_name,
          department: department,
      date_of_birth: date_of_birth,
      city: city,
        },
      ]);
    });
  };

  const addStudent = () => {
    Axios.post("http://localhost:3001/create/student", {
      student_id: student_id,
      student_name: student_name,
      stud_department: stud_department,
          stud_date_of_birth: stud_date_of_birth,
          stud_city: stud_city,
    }).then((res) => {
      alert(res.data)
      setStudentList([
        ...studentList,
        {
          student_id: student_id,
      student_name: student_name,
      stud_department: stud_department,
          stud_date_of_birth: stud_date_of_birth,
          stud_city: stud_city,
        },
      ]);
    });
  };

  const getStudent = () => {
    
    Axios.get("http://localhost:3001/student").then((response) => {
      
    setStudentList(response.data);
    });
  };
  const getFaculty = () => {
    
    Axios.get("http://localhost:3001/faculty").then((response) => {
      
    setfacultyList(response.data);
    });
  };

  // const updateEmployeeWage = (id) => {
  //   Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
  //     (response) => {
  //       setEmployeeList(
  //         employeeList.map((val) => {
  //           return val.id == id
  //             ? {
  //                 id: val.id,
  //                 name: val.name,
  //                 country: val.country,
  //                 age: val.age,
  //                 position: val.position,
  //                 wage: newWage,
  //               }
  //             : val;
  //         })
  //       );
  //     }
  //   );
  // };

  // const deleteEmployee = (id) => {
  //   Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
  //     setEmployeeList(
  //       employeeList.filter((val) => {
  //         return val.id != id;
  //       })
  //     );
  //   });
  // };

  return (
    <div className="App">
      <h1>FACULTY</h1>
      <div className="faculty-form">
      <div className="information">
        <label>id:</label>
        <input
          type="text"
          onChange={(event) => {
            setfaculty_id(event.target.value);
          }}
        />
        <label>name:</label>
        <input
          type="text"
          onChange={(event) => {
            setfaculty_name(event.target.value);
          }}
        />
        <label>department:</label>
        <input
          type="text"
          onChange={(event) => {
            setdepartment(event.target.value);
          }}
        />
        <label>D.O.B:</label>
        <input
          type="date"
          onChange={(event) => {
            setdate_of_birth(event.target.value);
          }}
        />
        <label>City:</label>
        <input
          type="text"
          onChange={(event) => {
            setcity(event.target.value);
          }}
        />
        <button onClick={addFaculty}>Add Faculty</button>
      </div>
      <div className="faculties">
        <button onClick={getFaculty}>Show Faculty</button>
      </div>
      {facultyList.map((val, key) => {
          console.log(JSON.stringify(val.date_of_birth))
          return (
            <div className="faculty">
              <div>
                <h3>Id: {val.faculty_id}</h3>
                <h3>Name: {val.faculty_name}</h3>
                <h3>Department: {val.department}</h3>
                <h3>D.O.B: {val.date_of_birth.slice(0,10)}</h3>
                <h3>City: {val.city}</h3>
              </div>
            </div>
          );
        })}
      </div>
      
      <h1>Student</h1>
      <div className="student-form">
      <div className="information">
        <label>id:</label>
        <input
          type="text"
          onChange={(event) => {
            setstudent_id(event.target.value);
          }}
        />
        <label>name:</label>
        <input
          type="text"
          onChange={(event) => {
            setstudent_name(event.target.value);
          }}
        />
        <label>department:</label>
        <input
          type="text"
          onChange={(event) => {
            setstud_department(event.target.value);
          }}
        />
        <label>D.O.B:</label>
        <input
          type="date"
          onChange={(event) => {
            setstud_date_of_birth(event.target.value);
          }}
        />
        <label>City:</label>
        <input
          type="text"
          onChange={(event) => {
            setstud_city(event.target.value);
          }}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div className="faculties">
        <button onClick={getStudent}>Show Student</button>
      </div>
      {studentList.map((val, key) => {
          console.log(JSON.stringify(val.stud_date_of_birth))
          return (
            <div className="faculty">
              <div>
                <h3>Id: {val.student_id}</h3>
                <h3>Name: {val.student_name}</h3>
                <h3>Department: {val.stud_department}</h3>
                <h3>D.O.B: {val.stud_date_of_birth.slice(0,10)}</h3>
                <h3>City: {val.stud_city}</h3>
              </div>
            </div>
          );
        })}
      </div>
        
    </div>
  );
}

export default App;