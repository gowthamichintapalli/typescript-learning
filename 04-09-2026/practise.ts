//Assertions

let value: unknown="Gowthami";
let name1 =value as string;
console.log(name1.toLocaleUpperCase());

let data: unknown={
    id:101,
    name:"Gowthami"
};

interface Empdata{
    id:number;
    name: string;
}

let employee=data as Empdata;

console.log(employee.id);
console.log(employee.name);

let value2: unknown = "Gowthami";
console.log((value2 as string).length);

interface Product {
    id: number;
    name: string;
    price: number;
}

let data2: unknown = {
    id: 1,
    name: "Laptop",
    price: 50000
};

let product = data2 as Product;

console.log(product.price);

//classes

class student{
    stname:string="";
    stid:number=0;
    stbranch:string="";

}

let st1 = new student();
let st2=new student();

st1.stname="surya";
st1.stid=1001;
st1.stbranch="mech";

st2.stname="jay";
st2.stid=1002;
st2.stbranch="CSE";

console.log(st1);
console.log(st2);

class Car {
    brand: string = "";
    model: string = "";
    price: number = 0;
}

let car1 = new Car();

car1.brand = "Toyota";
car1.model = "Camry";
car1.price = 3000000;

console.log(car1);

class BankAccount {
    accountNumber: number=0;
    balance: number=0;
}

let account = new BankAccount();

account.accountNumber = 12345;
account.balance = 50000;

class ScopedEmployee {
    name: string = "";
    salary: number = 0;

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

let emp = new ScopedEmployee();

emp.name = "Gowthami";
emp.salary = 40000;

emp.displayDetails();

//ACCESS SPECIFIERS ScOPE
class Employee {

    public name = "Gowthami";
    protected dpt = "IT";
    private salary = 40000;
}

class Company {

    showEmployeeDetails() {

        let emp = new Employee();

        console.log(emp.name);        
        // dpt and salary are protected/private and cannot be accessed here.
    }
}

class Employee3 {

    private salary = 40000;
}

function displayEmployee() {

    let emp = new Employee3();

    console.log("Cannot access");
    //console.log(emp.salary); // cannot access outside the class
}

displayEmployee();

class Employee4 {
    name: string = "Gowthami";
    employee_id: number = 101;
}

let emp2 = new Employee();

emp2.name = "Sneha";       
//emp2.employee_id = 102;     //it will throws error
console.log(emp2.name);


// class Employee5 {

//     readonly employeeId: number;

//     constructor(id: number) {
//         this.employeeId = id;
//     }
// }
// let emp4 = new Employee5(101);