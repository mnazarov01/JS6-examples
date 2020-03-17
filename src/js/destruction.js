function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

// const [sum, sub, mult] = calcValues(42, 10);
// console.log(sum, sub, mult);

// const [sum, , mult, ...other] = calcValues(42, 10);
// console.log(sum, mult, other);

const [sum, sub = 'sub', mult, ...other] = calcValues(42, 10);
console.log(sum, sub, mult, other);

const person = {
    name: 'max',
    age: 25,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

// const {
//     name: firstName = 'have not a name',
//     age,
//     car = 'have not a car',
//     address: { city: homeTown, country }
// } = person;

// console.log(firstName, age, car, homeTown, country)

// const { name, ...info } = person;
// console.log(name, info);

function logPerson({ name: firstName = 'have not a name', age }) {
    console.log(firstName + ' ' + age);
}

logPerson(person)