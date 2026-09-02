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
    IT,
    HR,
    Finance,
    Marketing
}
let employeeDepartment = Department.IT;
console.log("Employee Department:", employeeDepartment);

// tsx fundamentals.ts

enum EmployeeStatus {
    Active = "Active",
    Inactive = "Inactive",
    OnLeave = "On Leave"
}

let empstatus = EmployeeStatus.Active;
console.log("Employee Status:", empstatus);

