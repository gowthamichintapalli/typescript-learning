### Type Assertions
Sometimes you know the type of a value, but TypeScript doesn't know it.
A type assertion means:
“TypeScript, trust me. I know what type this value is.”

The syntax is:
value as type

### classes
A class is a blueprint for creating objects.

Think about a company.
Every employee has:
name
id
salary
department

Instead of repeatedly creating these structures, create a blueprint:

class Employee {
    name: string;
    id: number;
    salary: number;
    department: string;
}

### Access Modifiers-
Public - the members which are difines as public can access in same class,method,child class and also outside the class 
Private - members which difines as private can access within the same class,function and child class
Protected  - members which are defined as protected can access only within the clas and function

public
Inside class       ✅
Child class        ✅
Outside            ✅
Other classes      ✅

private-Your personal locker:
Inside class       ✅

protected:Your department's internal area:
Inside class       ✅
Child class        ✅

### Readonly
readonly means:
Once a property gets a value, you cannot change that value later.

class Employee {
    readonly employeeId: number = 101;
}

### constructors