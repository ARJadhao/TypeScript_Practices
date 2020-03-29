let rolls: number[] = [1,2,3,4,5];
console.log(rolls[2]);

// growable array
rolls.push(55);

for(let i=0 ;i< rolls.length; i++){
    console.log(rolls[i]);
}

let names: string[] = ['Ashish','John','Bond','Rick'];
// simplified for loop

for(let counter of names){
    if(counter == 'Bond'){
        console.log('Yes '+counter+' is the one');
    }else{
        console.log('not '+ counter);
    }
    
}
