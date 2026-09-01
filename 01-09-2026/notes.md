### Interfaces

An interface describes the structure of an object.

Think LIKE -"What properties should this object have"

### type Alias

A type alias allows you to give a custom name to a type.
syntax:
type TypeName = type;
type Id = number;
Now EmployeeId is another name for number

let EmployeeId:id = 123;
console.log(EmployeeId);

create a union:

type EmployeeId = number | string;

let id1: EmployeeId = 123;
let id2: EmployeeId = "EMP124";
let id3: EmployeeId = true; //it gives error

type Department = "IT" | "HR" | "Finance" | "QA";

let dept1: Department = "IT";
let dept2: Department = "QA";
let dept3: Department = "Marketing"; //invalid

type TestStatus = "Pass" | "Fail" | "Blocked" | "Not Executed";

let test1Status: TestStatus = "Pass";
let test2Status: TestStatus = "Failed";

