function* strGenerator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator();
// str.next().value;

function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const num = numberGen(7);

// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0;
//         return {
//             next() {
//                 if (i < n) {
//                     return { value: ++i, done: false }
//                 }
//                 return { value: void 0, done: true }
//             }
//         }
//     }
// }

function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}


for (let k of iter()) {
    console.log(k)
}