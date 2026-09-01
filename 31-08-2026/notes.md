### Type Annotations

Type	Example
Number	  let age   : number = 25;
String	  let name  : string = "John";
Boolean	  let active: boolean = true;
Array	    let nums  : number[] = [1, 2, 3];
Tuple	    let user  : [string, number] = ["John", 25];
Object	  let person: {name: string; age: number}
Any	      let data  : any = 10;
Unknown	  let data  : unknown = 10;
Function	function  add(a: number): number
No return	function  show(): void

Normal function
────────────────────────
function multiply(a, b) {
    return a * b;
}


Arrow function
────────────────────────
const multiply = (a, b) => {
    return a * b;
}

Example:

const name: string = "Gowthami";
const age: number = 23;
const isStudent: boolean = true;

### JSON

JSON stands for JavaScript Object Notation.
It is a lightweight data format used to store and exchange data between applications.
JSON is especially common when a frontend communicates with a backend through APIs.
Easy for humans and machines to read
Language-independent
Commonly used with REST APIs
Supported by JavaScript and TypeScript


Basic syntax:
{
  "key": "value"
}

Example:

{
  "name": "Gowthami",
  "age": 25
  "id": 101,
  "isActive": true

}

### JSON Data Types
JSON supports these main data types:
String
Number
Boolean
Object
Array
Null

{
  "Firstname" :"Gowthami,
   "Lastname" :null,
  "age": 25,
  "salary": 50000,
  "is active" ; true,
  "isStudent": false
}

{
  "names": ["John", "Alice", "David"]
  "numbers" : [10,20,30,40]
}

array containing multiple objects:

{
  "students": [
    {
      "id": 101,
      "name": "John",
      "age": 20
    },
    {
      "id": 102,
      "name": "Alice",
      "age": 21
    },
    {
      "id": 103,
      "name": "David",
      "age": 22
    }
  ]
}

Nested JSON Objects

An object can contain another object.

{
  "id": 101,
  "name": "John",
  "address": {
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "India"
  }
}
