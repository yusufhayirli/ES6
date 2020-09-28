// defined a json obj
let obj = {
    name:'Yusuf',
    age:27,
    isStudent: true
};

console.log({...obj, name:'Osman'});
console.log({...obj, surname:'HAYIRLI'});
console.log(obj);

console.log('--------------')

// if obj defined with "const" we cannot change it
// have to use "let"
obj = {...obj, age:28};

console.log(obj);

const updateObj = (obj,key,value,callback) => {
    const result = {...obj, [key]: value};
    callback(result);
};
// updates obj's name as Erol and callbacks result
// as new name (used key,value to do it)
updateObj(obj,'name','Erol',(result) => {
    console.log(result);
})