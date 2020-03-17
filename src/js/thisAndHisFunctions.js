function hello() {
    console.log('Hello', this);
}

// global context 
hello();
//


const person3 = {
    name: 'Vlad',
    age: 25,
    sayHello: hello,


    // this === window
    // or sayHelloWindow: hello.bind(this)  /// bind for global object window
    sayHelloWindow: hello.bind(window),
    //

    sayHelloDocument: hello.bind(document),

    logInfo: function(job, phone) {
        // this === person3
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

// context this for object person3
person3.sayHello();

const lena2 = {
    name: 'Elena',
    age: 24,
    // with context for lena2
    logInfo2: person3.logInfo,
    // with global context 
    logInfo3: person3.logInfo.bind(this)
}

//  bind context for lena2 from person3 with call
// the bind is returning function with context for the first argument
console.group('bind');
const fnLenaInfoLog = person3.logInfo.bind(lena2);
fnLenaInfoLog('Frontend', '54333353');
// or 
//  person3.logInfo.bind(lena2)('Frontend', '54333353');
// or 
//  const fnLenaInfoLog = person3.logInfo.bind(lena2, 'Frontend', '54333353') // with properties for logInfo
//  fnLenaInfoLog();
console.groupEnd();

/// call for lena2 
/// the call is calling function for the first argument 
console.group('call');
person3.logInfo.call(lena2, 'frondend', '3432432432');
console.groupEnd();

// apply for lena2
console.group('apply');
person3.logInfo.apply(lena2, ['frondend', '3432432432']);
console.groupEnd();


/// ========== practice =======

const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function(n) {
    // instance of array
    return this.map(function(i) {
        return i * n;
    })
}
console.log(array.multBy(5));

// arrow function don't support this context 
// Array.prototype.multByWithArrow = (n) => {
//     return this.map(i => i * n);
// }
// console.log(array.multByWithArrow(5));

const nObj = {
    sayThis: function() {
        console.log('this is', this)
    },
}

Object.prototype.sayThis2 = function() {
    console.log('this is', this)
}

function NObj() {

    this.sayThis = function() {
        console.log('this is', this)
    }

}