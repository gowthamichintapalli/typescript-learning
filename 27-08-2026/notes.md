Topics Covered:
1. Introduction to TypeScript
2. TypeScript vs JavaScript
3. Basic data types



### 1. Introduction to TypeScript

TypeScript is a strongly typed programming language developed by Microsoft.
It is a superset of JavaScript and is compiled into JavaScript.
The main advantage of TypeScript is that it supports static typing and it Supports modern JavaScript features

### 2. TypeScript vs JavaScript

TypeScript provides static typing and helps identify errors during development.

let age = 25;
age = "twenty five"; // JavaScript allows this

let age: number = 25;
age = "twenty five"; // Error-ts doesnt support this as it strictly follows type checking 

TypeScript detects many errors before the program runs.

### 2.Variables in TypeScript

TypeScript supports three ways to declare variables:

let     - Use let when the value of a variable may change.
const   - Use const when the value should not be reassigned.
var     - var is the older way of declaring variables.It can be    reassigned

### scope of var and let 
var(Function Scope): The scope is function-level.
if it is written inside a loop or it can accessed from within or outside that entire function 

let(Block Scope): let The scope of { }is block-level. 
That is, it can only be used within the curly brackets within which { }it is declared. Using it outside will result in an error. 

### 3. Basic Data Types

number
string
boolean
array  - stores multiple values of same type
tuple   -  A tuple is an array where the number and types of elements are fixed   E.G:- let person: [string, number] = ["John", 25]; First value must be a string and Second value must be a number
object  -  
any
unknown
null
undefined

