"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customers = /** @class */ (function () {
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
    function Customers(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    // getter and setter similar to java
    Customers.prototype.getFName = function () {
        return this.fname;
    };
    Customers.prototype.setFName = function (fname) {
        this.fname = fname;
    };
    Customers.prototype.getLName = function () {
        return this.lname;
    };
    Customers.prototype.setLName = function () {
        this.lname = this.lname;
    };
    Object.defineProperty(Customers.prototype, "Fname", {
        // Get & Set Accessors, alternative to above implementation, notice method declation
        get: function () {
            return this.fname;
        },
        set: function (fname) {
            this.fname = fname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "Lname", {
        get: function () {
            return this.lname;
        },
        set: function (lname) {
            this.lname = lname;
        },
        enumerable: true,
        configurable: true
    });
    return Customers;
}());
exports.Customers = Customers;
