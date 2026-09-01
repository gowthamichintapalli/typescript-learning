let person: {
     name: string; age: number;
     } = { name: "John", age: 25 }; 
     console.log(person);

     const car:{
          Brand:string;
          Model:string;
          year:number;
          colour:string;

     }={Brand:"Toyoto",
          Model:"Corolla",
          year:2020,
          colour:"Blue",
     }

     console.log("Car Details:", car);
     
     //Functions
//example-1 Named Function
function displaywish()
{
     console.log("HELLO THIS IS TYPESCRIPT");
}
displaywish();

//   function with parameter type and return type
function add (num1:number,num2:number):number{
          let sum: number = num1 + num2;
          return sum;
     }
     console.log("Sum:", add(5,10));  

     //Anonymous Function
    let greet= function()
     {
          console.log("HELLO THIS IS ANONYMOUS FUNCTION");
     }
     greet();

     function display(message:string):void
     {

           console.log(message);
     }
       display("Hello");

       //Arrow Functions 
const multiply = (a:number, b:number): number => {   //we dont use function keyword Because => is itself the syntax that tells JavaScript/TypeScript "this is a function."
     return a * b;
};

console.log("Product of a,b:", multiply(4, 5));

let Student:{
   name:string,
   age:number,
   course:string,
   isGraduated:boolean
}={
     name:"Udaybala",
     age:22,
     course:"MCA",
     isGraduated:true
}

console.log("Student Details:" , Student);

let employee:{
     id:number,
     name:string,
     department:string,
     salary:number,
     isWorking:boolean,
     deptID:any,
     address:unknown
}={
     id:1001,
     name:"Priya",
     department:"IT",
     salary:50000,
     isWorking:false,
     deptID: "SD-1001",
     address:"15-5802-56"
}
console.log("Employee Details:", employee);
employee.name="Priya Sharma";
console.log(employee.name);
console.log("Updated details:", employee);
//employee.location="Hyderabad"; -cannot add new field to existed object which can disturb the object structure thats why TS will not accept this and will throw error


//Object + function

const emp : {
     empName: string,
     empsalary:number
}={
     empName:"Sneha",
     empsalary:30000
}
       
function calculateAnnualSalary (employee: { empName: string; empsalary: number }):number{
     return employee.empsalary * 12;
}

console.log("Employee Annual Salary:", calculateAnnualSalary(emp));

const student={
     name:"Ravi",
     marks:85
}

function grtResult(student: { name: string; marks: number }): string {
     if (student.marks >= 45) {
          return "Pass";
     } else {
          return "Fail";
     }
}
console.log("Student Result: ", grtResult(student));