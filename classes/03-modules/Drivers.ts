import {Customers} from "./Customers"

let myCustomers = new Customers('Ashish','Jadhao');
console.log(myCustomers.getFName() + " "+ myCustomers.getLName())
//console.log(myCustomers.city);



console.log("now using get/set accessors")
console.log(myCustomers.Fname+ " "+ myCustomers.Lname);