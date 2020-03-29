var rolls = [1, 2, 3, 4, 5];
console.log(rolls[2]);
// growable array
rolls.push(55);
for (var i = 0; i < rolls.length; i++) {
    console.log(rolls[i]);
}
var names = ['Ashish', 'John', 'Bond', 'Rick'];
// simplified for loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var counter = names_1[_i];
    if (counter == 'Bond') {
        console.log('Yes ' + counter + ' is the one');
    }
    else {
        console.log('not ' + counter);
    }
}
