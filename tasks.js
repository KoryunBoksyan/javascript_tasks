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

console.log(` y = ${y} `):

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