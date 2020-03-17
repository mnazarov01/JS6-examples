function createCalcFunction(n) {
    // return function with its context n = 42 or another arg
    return function() {
        return 1000 * n
    }
}

const calc = createCalcFunction(42);
console.log(calc())


function createIncrementor(n) {
    return function(num) {
        return n + num;
    }
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10)); // 11 
console.log(addTen(41)); // 51

// ====== practice  ========

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com');
console.log(comUrl('google')); // https://google.com
console.log(comUrl('netflix')); // https://netflix.com

//2) Write your function 'bind'

function logPerson(text) {
    console.log(`Person: ${this.name}, ${this.age}, ${text}`);
}

const person1 = { name: 'Mick', age: 22 },
    person2 = { name: 'Vlad', age: 36 };

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args);
    }
}

bind(person1, logPerson)('man of 1000'); // Person: Mick, 22, man of 1000
bind(person2, logPerson)(); // Person: Vlad, 36, undefined