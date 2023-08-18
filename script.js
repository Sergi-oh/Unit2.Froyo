const flavor = window.prompt("Please enter the flavors of froyo you would like separated by a comma", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
const arr = flavor.split(',')
const stats = {

};

for (let i = 0; i <arr.length; i++){
    const flavor = arr[i];
    if(stats[flavor] === undefined){
        stats [flavor] = 0;
    }
    stats[flavor] = stats[flavor] + 1;
}

console.log(stats);