const stdname: String = "Yaw";
const age: Number = 11;

interface IStudent {
  name: String;
  age: Number;
}

type TLecturer = {
  name: String;
  age: Number;
};

enum StudentType {
  Undergraduate = "Undergraduate",
  Postgraduate = "Postgraduate",
}

const colors: Array<string> = ["red", "green", "blue"];

function printStdDetails(iStudent: IStudent): IStudent {
  return {
    name: iStudent.name,
    age: iStudent.age,
  };
}

function printLecturerDetails(tLecturer: TLecturer) {
  colors.push("yellow");
  console.log(colors);
  let newStudent = printStdDetails({ name: stdname, age: age });
  if (newStudent.age < 18) {
    return `${newStudent.name}, you are an ${StudentType.Undergraduate} student`;
  } else {
    return `${newStudent.name} you are a ${StudentType.Postgraduate} student`;
  }
}

const countRuns = setInterval(() => {
  console.log(printLecturerDetails({ name: stdname, age: age }));
}, 5000);
