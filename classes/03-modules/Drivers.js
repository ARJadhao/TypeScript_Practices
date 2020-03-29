"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customers_1 = require("./Customers");
var myCustomers = new Customers_1.Customers('Ashish', 'Jadhao');
console.log(myCustomers.getFName() + " " + myCustomers.getLName());
//console.log(myCustomers.city);
console.log("now using get/set accessors");
console.log(myCustomers.Fname + " " + myCustomers.Lname);
