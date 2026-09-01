interface Person{ //created an interface called person which describes how the person object should look like
    name:string,
    age:number,
    address:string,
    houseno:number,
    city:unknown
}

let person:Person={ //assigning values to the person object based on the Person interface
    name:"Gowthami",
    age:22,
    address:"KPHB",
    houseno:12,
    city:"Hyderabad"
}
console.log("Person Deyails:", person);

interface Employee{
    name: string;
    id:number;
    salary:number;
    dept_name:string;
} //employee doesnt create the employee but it describes how emo object shuld look like

let employee1: Employee={
    name:"James",
    id:123,
    salary:40000,
    dept_name:"IT"
}

let employee2:Employee={
    name:"Gowthami",
    id:124,
    salary:45000,
    dept_name:"HR"
}

console.log("Employee1 Details:", employee1);
console.log("Employee2 Details:", employee2);

interface Manager extends Employee{   //extending the employee interface to manager interface which means manager will have all the properties of employee and also additional properties
    team_size:number;

}

let manager1: Manager={
    name:"Ramesh",
    id:125,
    salary:60000,
    dept_name:"Manager",
  team_size:10
}

console.log("Manager Details:", manager1);



interface User{
    name:string,
    user_id:number,
    email:string,
    password:string
}

let user:User={
name:"Gowthami",
user_id:1001,
email:"gowthami@2026",
password:"gowthami2026"
}

interface Admin extends User{
    is_admin:boolean,
    admin_id:number
}

let admin1:Admin={
    name:"John",
    user_id:1002,
    email:"john@2026",
    password:"john2026",
    is_admin:true,
    admin_id:2001
}
console.log("User Details:", user);
console.log("Admin Details:",admin1);

interface OffManager extends Admin{
    Manager_id:number,
    team_size:number,
    branch :string
}

let managerDetails:OffManager={
    name:"Alice",
    user_id:1003,
    email:"alice@2026",
    password:"alice2026",
    is_admin:false,
    admin_id:2002,
    Manager_id:3001,
    team_size:15,
    branch:"New York"
}
console.log("Manager Details:",managerDetails); 


type id=number;
let employee_id:id=123;
console.log("EMPLOYEE ID:," , employee_id);

type Vehicle ={
    name:string,
    model:string,
    year:number
}

let car1:Vehicle={
    name:"Toyota",
    model:"Camry",
    year:2022
}
console.log("Car Details:",car1);

let car2:Vehicle={
    name:"Honda",
    model:"Civic",
    year:2023
}
console.log("Car Details:",car2);
