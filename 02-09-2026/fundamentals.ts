type user={
    name:string,
    age?:number
};

const user1:user={
    name:"Gowthami"
};

const user2:user={
    name:"Bhuvana",
    age:27
};

const user3:user={    //here name field also required but can use age alone
    age:28
};

console.log("User1Details:" , user1);
console.log("User2Details:" , user2);
console.log("User3Details:", user3);


enum Department {
    IT=10,
    HR,
    Finance,
    Marketing
}
let employeeDepartment = Department.IT;
let employeeDepartment2 = Department.HR;
console.log("Employee Department:", employeeDepartment);
let employeeDepartment3 = Department.IT;
console.log("Employee Department:", employeeDepartment);
console.log("Employee Department:", employeeDepartment2);
console.log("Employee Department:", employeeDepartment3);

// tsx fundamentals.ts

enum EmployeeStatus {
    Active = "Active Employee",
    Inactive = "Inactive",
    OnLeave = "On Leave"
}

let empstatus = EmployeeStatus.Active;
console.log("Employee Status:", empstatus);

enum requestStatus{
    OK="200",
    BAD_REQUEST="400",
    UNAUTHORIZED="401",
    FORBIDDEN="403",
    NOT_FOUND="404",
    INTERNAL_SERVER_ERROR="500"
}
 let response_requeststatus = requestStatus.OK;
 let response_requeststatus2 = requestStatus.BAD_REQUEST;
 let response_requeststatus3 = requestStatus.UNAUTHORIZED;
 let response_requeststatus4 = requestStatus.FORBIDDEN;
 let response_requeststatus5 = requestStatus.NOT_FOUND;
 let response_requeststatus6 = requestStatus.INTERNAL_SERVER_ERROR;
    
console.log("Response Request Status:", response_requeststatus);
console.log("Response Request Status:", response_requeststatus2);
console.log("Response Request Status:", response_requeststatus3);
console.log("Response Request Status:", response_requeststatus4);
console.log("Response Request Status:", response_requeststatus5);
console.log("Response Request Status:", response_requeststatus6);   

enum Student{
    pass="PASS",
    fail="FAIL"
};

let studentresult=Student.pass;

if(studentresult===Student.pass)
{
    console.log("Student Result:", studentresult);

}
else{
    console.log("Student Result:" , studentresult);

}

//enum as functions parameters
enum UserRole {
    Admin = "ADMIN",
    Manager = "MANAGER",
    Employee = "EMPLOYEE"
}

function checkAccess(role: UserRole) {

    if (role === UserRole.Admin) {
        console.log("Full access");
    }
}

checkAccess(UserRole.Admin);

//enum in objects
enum UserRole {
    Admindep = "ADMIN",
    Employeedep = "EMPLOYEE"
}

let employee = {
    name: "James",
    role: UserRole.Employee
};

console.log(employee);


enum UserRole {
ADMIN = "ADMIN",
USER = "USER"
}
// Create a User interface containing: id, name, email, role, and an optional phone.
// Create the function:
// function getUserDetails(user: User): string
// The function should return the user's details.

interface User{
    id:number,
    name:string,
    email:string,
    role:string,
    phone?:number 
}

const user1details:User={
    id:1001,
    name:"Gowthami",
    email:"gowthami2026",
    role:"Admin",
    phone:1200210210
}

function getUserDetails(user:User):string{

    return "ID: " +user.id +
    "Name: "+user.name +
    "Email: "+user.email +
    "Role: "+user.role +
    "Phone: "+user.phone;           
}

console.log(getUserDetails(user1details));
