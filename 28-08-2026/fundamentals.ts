//Array
//Number array
let marks: number[]=[10,20,30,40,50]
console.log(marks);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log();//print empty line

//String array
let names: string[]=["Anu","Deep","Ali"]
console.log(names);

console.log(names[0]);
console.log(names[2]);
console.log();//print empty line

//Assign values one by one 
let costOfProducts:number[]=[]; //array declaration
costOfProducts.push(10); //values assigning 
costOfProducts.push(20);
costOfProducts.push(20);
costOfProducts.push(30);
console.log(costOfProducts);
console.log();//print empty line

//Assign using index
let students:string[]=[];
students[0]="preethi";
students[1]="deepthi";
students[1]="rekha";//updated value
students[2]="prakshi";

console.log(students[0]);
console.log(students[1]); //it will print reassigned value
console.log(students[2]);

console.log();//print empty line

//tuple
let personInfo:[string,number,boolean]=["Anu", 20 , true];
console.log(personInfo);

let coordinates:[number, number]=[17.350 , 45.456];
console.log("Latitude:" + coordinates[0]);
console.log("Longitude:" + coordinates[1]);

let userlogin:[string , string,number]=["Gowthami" , "gowthami@2026" , 669902];
console.log(userlogin);

let response:[number , string]=[200,"success"];
console.log("Response:" , response);

//object

let student:{
    name: string;
    id : number;
    branch:string;
    hallticketNo : number;
    contNo: number;
    pass:boolean;
    backlog: any;
}={
    name:"Hari",
    id:1001,
    branch:"CSE",
    hallticketNo: 220010,
    contNo:9966580214,
    pass:true,
    backlog:0
};
 console.log("Student Details:-" , student);

//example 2 
let employee:{ empName:string ; empId:number; empSalary:number , empDept:string}=
{
    empName:"Bhanu" , empId: 2001 , empSalary:1500000 , empDept:"HR"
};
console.log("Employee Details:-");
console.log(employee);

//any
let data:any = "Hello"; 
data=1001;
data=true;
console.log(data); //it will print the last assigned/updated value

//unknown

// Declares a function named 'processData' that takes one parameter named 'input'.
// The type is set to 'unknown', meaning it can accept absolutely any data type safely.
function processData(input: unknown) {
   
    if (typeof input === "string") {      // It checks if the value we pass is exactly a string.
        console.log(input.toUpperCase());   //if the value passed  is string  convert string to uppercase
    } else if (typeof input === "number") {    // It checks if the value we pass is exactly number or not
        console.log(input.toFixed(2));          //if the value passed is nuumber give 2 decimals after number
    } else {
        console.log("Unknown or invalid data type received!"); 
    }
}
processData("code executed");  //passed string type value as perameter











