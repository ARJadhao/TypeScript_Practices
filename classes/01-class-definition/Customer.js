var Customer = /** @class */ (function () {
    // constructor
    function Customer(fname, lname) {
        this.city = 'Pune';
        this.fname = fname;
        this.lname = lname;
    }
    // getter and setter similar to java
    Customer.prototype.getFName = function () {
        return this.fname;
    };
    Customer.prototype.setFName = function (fname) {
        this.fname = fname;
    };
    Customer.prototype.getLName = function () {
        return this.lname;
    };
    Customer.prototype.setLName = function () {
        this.lname = this.lname;
    };
    Object.defineProperty(Customer.prototype, "Fname", {
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
    Object.defineProperty(Customer.prototype, "Lname", {
        get: function () {
            return this.lname;
        },
        set: function (lname) {
            this.lname = lname;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer('Ashish', 'Jadhao');
console.log(myCustomer.getFName() + " " + myCustomer.getLName());
console.log(myCustomer.city);
console.log("now using get/set accessors");
console.log(myCustomer.Fname + " " + myCustomer.Lname);
