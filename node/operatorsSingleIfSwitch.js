console.log('2'==2); // results true
console.log('2'===2); // results false (recommended)

console.log(2<3 && 2>3); // results false (AND OPERATOR)

// basic if else
if (2>1) {
    console.log('big');
} else {
    console.log('small');
}

// higher level if else
2 > 1 ? console.log('big') : console.log('small');

// switch case
const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log(1);
        break;
    case 'Tuesday':
        console.log(2);
        break;
    case 'Wednesday':
        console.log(3);
        break;
    default:
        console.log('...');
    // ...
}