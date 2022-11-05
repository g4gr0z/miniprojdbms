const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "proj",
});

app.post("/create/faculty", (req, res) => {
  const faculty_id = req.body.faculty_id;
  const faculty_name = req.body.faculty_name;
  const department = req.body.department;
  const date_of_birth = req.body.date_of_birth;
  const city = req.body.city;

  db.query(
    "INSERT INTO faculty (faculty_id, faculty_name, department, date_of_birth, city) VALUES (?,?,?,?,?)",
    [faculty_id, faculty_name, department, date_of_birth, city],
    (err, result) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY"){
          res.send("This Faculty id already exists")
        }
        console.log(err)
        
      } else {
        res.send("Faculty profile created successfully");
      }
    }
  );
});



app.post("/create/student", (req, res) => {
  const student_id = req.body.student_id;
  const student_name = req.body.student_name;
  const stud_department = req.body.stud_department;
  const stud_date_of_birth = req.body.stud_date_of_birth;
  const stud_city = req.body.stud_city;

  db.query(
    "INSERT INTO student (student_id, student_name, department, date_of_birth, city) VALUES (?,?,?,?,?)",
    [student_id, student_name, stud_department, stud_date_of_birth, stud_city],
    (err, result) => {
      if (err) {
        if (err.code == "ER_DUP_ENTRY"){
          res.send("This Student id already exists")
        }
        console.log(err)
        
      } else {
        res.send("Student profile created successfully");
      }
    }
  );
});




app.get("/faculty", (req, res) => {
  db.query("SELECT * FROM faculty", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/student", (req, res) => {
  db.query("SELECT * FROM student", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE faculty SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});