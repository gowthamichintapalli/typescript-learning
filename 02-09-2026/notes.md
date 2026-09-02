### Optional Properties
--cmeans this property may or maynot exist in the object
syntax: 
   type user={
    name:string;  //this is required
    age?:number;  //this is optional
   }

   we use this when some data may not always be available or not required 

   ### enum
   ---Enum means: “a set of named constants.”
syntax:
    enum status{
        Active,
        Inactive,
        Pending
    }
This creates values like: 
    status.Active=0
    status.Inactive=1
    status.Pending=2

    