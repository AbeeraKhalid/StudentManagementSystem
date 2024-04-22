#! /usr/bin/env node
// STUDENT MANAGEMENT SYSTEM:

import chalk from "chalk";
console.log(
  chalk.italic.bgCyanBright.magentaBright(
    "<<||**STUDENT MANAGEMENT SYSTEM**||>>"
  )
);
class School {
  name: string;

  students: Student[] = [];
  teacher: Teacher[] = [];

  addStudent(studentobj: Student) {
    this.students.push(studentobj);
  }
  addTeacher(teacherobj: Teacher) {
    this.teacher.push(teacherobj);
  }
  constructor(name: string) {
    this.name = name;
  }
}

class Student {
  name: string;
  age: number;
  schoolName: string;
  subject: string;

  constructor(name: string, age: number, schoolName: string, subject: string) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
    this.subject = subject;
  }
}

//   class Teacher extends Student {} (this line is also used instead by using of teacher class)
class Teacher {
  name: string;
  age: number;
  schoolName: string;
  subjectteacher: string;

  constructor(
    name: string,
    age: number,
    schoolName: string,
    subjectteacher: string
  ) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
    this.subjectteacher = subjectteacher;
  }
}

//school names
let school1 = new School("St.Joseiph");
let school2 = new School("BAMM PECHS");
let school3 = new School("Adamjee College");
let school4 = new School("SirSyed College");

//students
let std1 = new Student("Umair", 18, school1.name, "ComputerScience");
let std2 = new Student("Muskan", 20, school2.name, "Mathematics");
let std3 = new Student("Saniya", 22, school3.name, "Biology");
let std4 = new Student("Rukhsar", 28, school4.name, "ComputerScience");
let std5 = new Student("Sara", 16, school1.name, "Mathematics");

//teachers
let t1 = new Teacher("Urooj", 26, school1.name, "Mathematics");
let t2 = new Teacher("Sana", 30, school2.name, "ComputerScience");
let t3 = new Teacher("Arifa", 25, school3.name, "Biology");
let t4 = new Teacher("Tehmina", 33, school4.name, "physics");
let t5 = new Teacher("Aliya", 39, school4.name, "physics");
//student data
school1.addStudent(std1);
school2.addStudent(std2);
school3.addStudent(std3);
school3.addStudent(std4);
school4.addStudent(std5);

//  teacher data
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
school4.addTeacher(t4);
school4.addTeacher(t5);

console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
console.log(t5);
//school
console.log(school1);
console.log(school2);
console.log(school3);
console.log(school4);
