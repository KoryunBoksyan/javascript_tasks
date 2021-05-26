/*1.start

const x = +prompt("enter your number");
let a = 0;
let b = 0;

if(x % 2 >= 1) {
    b = (x % 2) - 1;
} else {
    b = (x % 2);
};
 
a = x-b;

console.log(a);
console.log(b);

end*/

/*2. start

const x = +prompt("Enter your number");
let y = 0;

if(x >= 0) {
    y = x;
} else {
    y = - x;
};

console.log(x);
console.log(y);

end*/

/*3.start
const x = +prompt("Enter your number");
let y = 0;

if(x >= 0 && x < 5) {
    y = 2 * (Math.pow(x, 2)) + 3 * x -1
} else {
    y = x + 1;
};

console.log(x);
console.log(y);

end */

/*4. start

const x = +prompt("Enter your number");
let y = 0;

if (x > 12 && x <= 20) {
    y = x;
    alert (`func 1! Number ${y}`)
} else if (x >= -5 && x <= 5) {
    y = x;
    alert (`func 2! Number ${y}`)
} else {
    y = x;
    alert (`func 3! Number ${y}`)
};

end*/

/*5.start

const x = +prompt("Enter length for X");
const y = +prompt("Enter length for Y");
const z = +prompt("Enter length for Z");

if(Math.pow(x, 2) < Math.pow(y, 2) + Math.pow(z, 2) && 
    Math.pow(y, 2) < Math.pow(x, 2) + Math.pow(z, 2) &&
    Math.pow(z, 2) < Math.pow(y, 2) + Math.pow(x, 2)){
        
        alert ("Done")
} else {
    alert ("Ups")
};

console.log(x, y , z);
 end*/


/* 6.start
 const a = +prompt("Enter Number A");
const b = +prompt("Enter Number B");
const c = +prompt("Enter Number C");

if(a === b && a === c){
    alert("All numbers are equal")
} else {
    if (a > b && a > c){
        alert("A is Maximum");
    } else if(b > a && b > c) {
        alert("B is maximum");
    } else {
        alert("C is maximum");
    };
};

end*/

/* 7.start
const x = +prompt("Enter coordinates for X-axis");
const y = +prompt("Enter coordinates for Y-axis");

if (x === y) {
    alert("Point is on the line")
} else {
    y > x ? alert("YES") : alert("NO")
};

end*/


// Tasks

/* 1 task

const x = +prompt("Enter Your Number");

if ( x >= -10 && x <= -6) {
    alert(`${x+1}`);
} else if (x >= -3 && x <= 3) {
    alert(`${Math.pow(x, 2)}`);
} else {
    alert(x);
};
*/


/* 2 task
const x = +prompt("Enter Number X");
const a = +prompt("Enter Number A");
const b = +prompt("Enter Number B");


if ( a + b > 10) {
    alert(`${a * x + b}`);
} else if (a + b >= -15 && a + b <= 2) {
    alert(`${b * x - a}`);
} else {
    alert(a + b);
};

*/

/* 3 task
const x = +prompt("Enter Number X");
const a = +prompt("Enter Number A");


if (x > -4 && x < 4) {
    alert(`${x + 3 * a}`);
} else if (x > 5 && x <= 8) {
    alert(`${a * x - 2}`);
} else if (x > -20 && x <= 20) {
    alert(`${Math.pow(x, 2)}`);
}else {
    alert(x * 3);
};
*/


/* 4 task
const x = +prompt("Enter Year Date");

if (Number.isInteger (x/4) && (x % 400) > 0) {
    alert("Year is Leap");
} else {
    alert ("Year is not leap");
};

*/

/* 5

let y = +prompt("Enter Number Y");


if (x > y) {
    x = (x * y) / 2;
    y = (x + y) / 2;
    alert(` x = ${x} and y = ${y}`);

} else if (y > x) {
    y = (x * y) / 2;
    x = (x + y) / 2;
    alert(` x = ${x} and y = ${y}`);
} else {
    alert(` x = y = ${x} `);
}

*/
/*  6 task
const a = +prompt("Enter Number A");
const b = +prompt("Enter Number B");
const C = +prompt("Enter Number C");



if ( a === b === c ) {
    alert("2 Եռանկյունը հավասարակողմ է");
} else if (
    Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2) ||
    Math.pow(b, 2) === Math.pow(a, 2) + Math.pow(c, 2) ||
    Math.pow(c, 2) === Math.pow(b, 2) + Math.pow(a, 2)) {
    alert("3 Եռանկյունը հավասարասրյուն է");
} else {
    alert("1");
};

*/

/* 12 task
const n = +prompt("Enter Number n");

let sum = 0;

for(let i = 1; i <= n; i++){
    sum = sum + Math.pow(i, 2);
    console.log(sum);
}

alert(sum);

*/

/* 13 task

const k = +prompt("Enter Number K");
console.log(` k = ${k} `);

let y = 1;
let pow = 1;

for (let i = 1; i <= k; i++) {
    y = y * 2;
    pow = pow + 1;

    console.log(` y = ${y} `);
    console.log(` pow = ${pow} `);
}

alert(y);
alert(pow);

*/

/*  14 task 

const a = +prompt("Enter Number A");
console.log(` a = ${a} `);

let i = 0;
let sum = 0 ;

while (sum <= a) {
    sum = sum + Math.pow(i , 2);
    i++;
    console.log(` i = ${i} `);
    console.log(` sum = ${sum} `);

}

alert(` sum = ${sum} > A = ${a}`);

*/


/* 15 task

const n = +prompt("Enter Number N");

let sum = 0;

for(let i = 1; i <= n; i++){
    sum = sum + Math.pow(2, i);
    console.log(` i = ${i} `);
    console.log(` sum = ${sum} `);
}

alert(sum);
*/

/* 16 task

const n = +prompt("Enter Number N");
let y = 0;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + Math.sin(i)
    y = y + (i / sum );
}

console.log(` y = ${y} `);

*/

/* 21 task
const n = +prompt("Enter Number N");
const x = +prompt("Enter Number X");
const e = +prompt("Enter Number E");


let y1 = 1;
let y2 = 1;
let sum = x;

for (let i = 0; i <= n; i += 2) {
    y1 = y1 * (x * x);
    y2 = y2 * (x - 1) * x;

    if (y1 / y2 < e) {
        continue;
    }

    sum = sum + y1 / y2
}
*/


/* 28 task
const n = +prompt("Enter Number N");
const p = +prompt("Enter Number P");

let y = 1;
let sum = 0;

for (let m = ; m <= n; m++) {
    for (let k = 0; k <= p; k++) {
        sum = sum + Math.pow(a,(m+k))
        
    }
    y = y * Math.pow(m, 2) * sum;
}

*/


/* 29 task
const n = +prompt("Enter Number N");

f1: for (let i = 2; i <= 0; i++) {
    for (let j = 2; i <= i; j++) {
        if (i % j === 0) {
            continue f1;
        }
    }
    console.log(i);
}

*/



/* 23 task

function checkInputNumber () {
    
    let num = +prompt("Enter number N");
    if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        alert("Wrong input number");
        return checkInputNumber();
    }

    return num;
};

// solution with strings and loop for

const n = checkInputNumber().toString().split("");
let str = "";
for (let i = 0; i < n.length; i++) {
    str = `${str} / ${n[i]} `;
}

// console.log(n);

alert(str);

*/

/* 23 tasks
function checkInputNumber () {
    
    let num = +prompt("Enter number N");
    if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        alert("Wrong input number");
        return checkInputNumber();
    }

    return num;
};

// solution with arrey and loop while

let num = checkInputNumber();

let numArr = [];

while(num) {
    numArr.push(num % 10);
    num = Math.floor(num / 10);
}

// console.log(numArr);

alert(`Numbers / ${numArr.reverse().join(",")}`);

*/


/* 24 tasks

function checkInputNumber () {
    
    let num = +prompt("Enter number N");
    if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        alert("Wrong input number");
        return checkInputNumber();
    }

    return num;
};

const num = checkInputNumber();
// console.log(num);
let strNum = num.toString().split("");
// console.log(strNum);

let numDouble = [];

for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] < 5) {
        numDouble.push(strNum[i] * 2);
    }
}
// console.log(numDouble);

if (strNum.length === numDouble.length) {
    alert(`N1 = 2 * ${num} = ${numDouble.join("")}`)
} else {
    alert(`N1 = N = ${num}`);
}

*/

/* 1 task

function values () {
    for (let x = 1; x <= 8; x += 0.2) {
        y = 0;
        if (x < 5) {
            y = 2 * x + 1;
            console.log(`x = ${x}`)
            console.log(`(x < 5)=> y = ${y}`);
        } 
        if (x > 5) {
            y = Math.pow(x, 2) - 1;
            console.log(`x = ${x}`);
            console.log(`(x > 5)=> y = ${y}`);
        }
    }
    return y;
}

y = values();
*/


/* 2 task

function values () {
    for (let x = 1; x <= 12; x++) {
        y = 0;
        if (x < 3) {
            y = 5 * x + 2;
            console.log(`x = ${x}`)
            console.log(`(x < 3)=> y = ${y}`);
        } 
        if (x >= 3 && x <= 10) {
            y = Math.pow(x, 2) + x - 1;
            console.log(`x = ${x}`);
            console.log(`(3 < x < 10)=> y = ${y}`);
        } 
        if (x > 10) {
            y = 1;
            console.log(`x = ${x}`);
            console.log(`(x > 10)=> y = ${y}`);
        }
    }
    return y;
}

y = values();

*/


/* 3 task

const n = +prompt("Enter Number N");
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + Math.sin(i) / Math.cos(i);
}

console.log(` S = ${sum} `);

*/


// page 73 
/* 4 task

const n = +prompt("Enter Number N");
const x = +prompt("Enter Number X");

let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + Math.sin(i) * x;
}

console.log(` S = ${sum} `);

*/

/* 8 task

const n = +prompt("Enter Number N");
const x = +prompt("Enter Number X");

let factorial = 1;
let y = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
    y = y * ((Math.cos(i) * x) / (Math.pow(2, i) * factorial));
}

console.log(` Y = ${y} `);
*/

/* 9 task

function checkInputNumber () {
    
    let num = +prompt("Enter number N");
    if (isNaN(num)) {
        alert("Wrong input number");
        return checkInputNumber();
    }

    return num;
};

const num = Math.trunc(checkInputNumber());

let y = 1;

if (num % 2) {
    for (let i = 1; i <= num; i += 2) {
        y = y * i;
    }
} else {
    for (let i = 2; i <= num; i += 2) {
        y = y * i;
    }
}

console.log(` Y = ${y} `);
*/

/* 10 task

function checkInputNumber () {
    
    let num = +prompt("Enter number A");
    if (isNaN(num) || !Number.isInteger(num)) {
        alert("Wrong input number");
        return checkInputNumber();
    }

    return num;
};

const num = checkInputNumber();

let fourPow = 0;
let i = 1;
let pow = 0;

while (fourPow < num) {
    fourPow = Math.pow(4, i);
    i++;
}

console.log(` i = ${fourPow} < ${num} `);

*/


/* 12 task

function checkInputNumber () {
    
    let num = +prompt("Enter number N");
    if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        alert("Wrong input number");
        return checkInputNumber();
    }

    return num;
};

const num = checkInputNumber();
let number = num;
let sum = 0;

while (number > 0) {
    sum += (number % 10);
    number = Math.trunc(number/10);
}

alert(` your number = ${num} and the sum of its numbers is ${sum} `);

*/

/* 13 task

function checkInputNumber () {
    
    let num = +prompt("Enter number N");
    if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        alert("Wrong input number");
        return checkInputNumber();
    }

    return num;
};

const num = checkInputNumber();
let number = num;
let sum = "";

while (number > 0) {
    sum += (number % 10);
    number = Math.trunc(number/10);
}

sum = +sum;
// console.log(typeof(sum));

alert(` your number = ${num} and reverse value ${sum} `);

*/


// Start 

/* 28 task page 83

const n = +prompt("Enter Number N");
const p = +prompt("Enter Number P");
const a = +prompt("Enter Number A");


let y = 1;

for (let m = 1; m <= n; m++) {
    let sum = 0;
    for (let k = 0; k < p; k++) {
        sum += Math.pow (a, (m + k));
        // console.log(`sum = ${sum}`);
    }
    y *= Math.pow (m, 2) * sum;
    // console.log(`y = ${y}`);
}

console.log(y);
*/

/* 29 task
function checkInputNumber () {
    
    let n = +prompt("Enter number N");
    if (isNaN(n) || !Number.isInteger(n) || n <= 0) {
        alert("Wrong input number");
        return checkInputNumber();
    }

    return n;
};

const n = checkInputNumber();
startLoop:
for (let i = 1; i <= n; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k === 0) {
            continue startLoop;
        }

        
    }
    console.log (`i = ${i}`);
}
*/

/*  30 task

const n = +prompt("Enter Number N");
const m = +prompt("Enter Number M");

for (let i = n; i <= m; i++) {
    for (let j = 2; j < m / n; j++) {
        if (Math.pow (i, j) <= m) {
            console.log (`power = ${Math.pow (i, j)}`);
        }
    }
}
*/












