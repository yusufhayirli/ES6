const a = [2,3,4,5];

// gets a's odd elements
console.log(a.filter(x => x % 2 === 1 ));

// gets a's even elements
console.log(a.filter(x => x % 2 === 0 ));

// gets a's map and multiply each one them 2*
console.log(a.map(x => x *= 2));
console.log(a);

// gets a's all elements and returns their 2*
a.forEach(x=> console.log(x*2));

// gets a's map and multiply each one them according to conditions
const result = a.map(x => {
    if (x % 2 ===0){
        return x*5;
    } else{
        return x*3;
    }
});

console.log(result);