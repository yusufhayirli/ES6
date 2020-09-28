// callback functions

const sum = (a,b,callback) => {
    callback(a+b);
}

sum(2,3,(result) => {
    console.log("result: " + result);
})

// 'a,b' => ['a','b'] split

const splitFunc = (str,callback) => {
    const result = str.split(',');

    callback(result);
}

splitFunc('a,3,2,d,1,f', (result) => {
    console.log(result);
});