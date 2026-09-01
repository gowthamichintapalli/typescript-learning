let message: string = "Hello TypeScript";
//console.log(message);

message ="Gowthami";
console.log(message);

//variables
let cost: number=20;
cost=25;   //van reassign the value
console.log(cost);

const pi:number = 3.141;
console.log("value of pi:" , pi); //pi=3.15; --cannot reassign a value to constant variable

var city:string="Rajahmundry";
city="Hyderabad";
console.log("City:" , city);

//scope of var and let

//example 1
function testScope()
{
    if(true)
    {
        var varStatus="can access outside the funcion too";
        let letstatus="cannot access outside the function";
        console.log("Let_Status" , letstatus);
    }
    console.log("Var_Status:" , varStatus);
    //console.log("Let_Status" , letstatus);  it will throw error  
}
testScope();

//example:2
var b:number = 30;
function display()
{

    let a: number =20;
    
    if(a<b)
    {
           console.log("a is less than b");
    }
    else 
        console.log("a is greater than b");

}
//console.log("value of b:" , b); -it is outside the function so will throw error
display();



//Basic data types

let username: string = "Gowthami";
let age: number = 25;
let isEmployee: boolean = true;
let salary: number = 45000;
let isActive: boolean = true;

console.log("Name:" , username);
console.log("age:" , age);
console.log("Employee status:" , isEmployee);
console.log(salary);
console.log(isActive);


let productName:string="Laptop"
let price:number=52000;
const edition :string="Windows 11";
const processor:string="intel i5";
let isWorking:boolean=true;
let updatesVersions:number[]=[10,10.1,10.2,10.5,11];
const users:string[]=["Gowthami","Bhuvana","Chinni"];
const accounts:string[]=["Personal","college","Professional"];
let apps:string[]=["Microsoft","Chrome","Github","Slack","Paint"];

console.log("productName:",productName);
console.log("Laptop price:",price);
console.log("Laptop edition:" , edition);
console.log("Laptop processor:", processor);
console.log("Laptop working status: " , isWorking);
console.log("Laptop version:" , updatesVersions);
console.log("Account users list: " ,users);
console.log("Account types: " , accounts);
console.log("Apps installed:" , apps);




