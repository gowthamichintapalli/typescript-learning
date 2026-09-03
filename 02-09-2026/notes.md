### Optional Properties
--cmeans this property may or maynot exist in the object
syntax: 
   type user={
    name:string;  //this is required
    age?:number;  //this is optional
   }

   we use this when some data may not always be available or not required 

   ### enum -
   ---enum stands for enumeration.
   ---Enum lets us create a group of related named values
syntax:
    enum status{    //enum(keyword) , status(enum name)
        Active,     //members
        Inactive,
        Pending
    }

this is similar to array indexing so ts will create values like
    status.Active=0
    status.Inactive=1
    status.Pending=2

we can also specify the values as
     Active="active stauts"
     Inactive="Inactive"
     

    we can access these memebrs like EnumName.MemberName
    let currentstatus = Department.Active;

    

    