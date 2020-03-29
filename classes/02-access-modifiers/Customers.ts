class Customers{

    //city: string = 'Pune';
/*
    private fname : string;
    private lname: string;

    // constructor
    constructor(fname: string, lname: string){
        this.fname = fname;
        this.lname = lname;
    }
*/


    // Parameter properties -- used to minimize boilerplate code, equivalent of above commented code
    constructor(private fname: string, private lname: string){

    }

    // getter and setter similar to java
    public getFName(): string{
        return this.fname
    }

    public setFName(fname: string): void{
        this.fname = fname;
    } 

    public getLName(): string{
        return this.lname;
    }

    public setLName(): void{
        this.lname = this.lname;
    }

    // Get & Set Accessors, alternative to above implementation, notice method declation

    public get Fname(): string{
        return this.fname;
    }
    public set Fname(fname: string){
        this.fname = fname;
    }
    public get Lname(): string{
        return this.lname;
    }
    public set Lname(lname: string){
        this.lname = lname;
    }
                                                
}

let myCustomers = new Customers('Ashish','Jadhao');
console.log(myCustomers.getFName() + " "+ myCustomers.getLName())
//console.log(myCustomers.city);



console.log("now using get/set accessors")
console.log(myCustomers.Fname+ " "+ myCustomers.Lname);
