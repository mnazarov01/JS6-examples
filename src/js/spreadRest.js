const citiesRussia = ['SPB', 'Moscow']
const citiesEurope = ['Berlin', 'Paris']

const titlesRussianWithPopulation = {
    Moscow: 10,
    SPB: 3,
    Kazan: 5,
    foo: () => { console.log('hi') }
}

const titlesEuropeWithPopulation = {
    Berlin: 10,
    Kazan: 9,
    Paris: 3,
}

// spread ...
/// array
console.group('Array')

const cities = [...citiesRussia, 'Tokyo', ...citiesEurope]
console.log(cities)
    // or
console.log(citiesRussia.concat(['Tokyo']).concat(citiesEurope))

console.groupEnd()

///

console.group('Object')

console.log({...titlesRussianWithPopulation, ...titlesEuropeWithPopulation })
console.log({...titlesEuropeWithPopulation, ...titlesRussianWithPopulation })

console.groupEnd()

// practice 

const numbers = [5, 34, 12, 33, 17]
console.log(Math.max(...numbers))
    // or
console.log(Math.max.apply(null, numbers))

const divs = document.querySelectorAll('div');
const nodes = [...divs];

console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))

// rest

console.group('Rest')

function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, v) => a + v, 0)
}

//console.log(sum(1, 3, 4, 5, 6));

const nums = [1, 3, 4, 5, 6, 7, 8]
const [a, b, ...rest] = nums

console.log(a, b, rest)
console.log(sum(a, b, ...rest))

const person = { name: 'Max', age: 26, job: 'Fullstack', city: 'SPB' }
const { name, age, ...other } = person

console.log(name, age, other)

console.groupEnd()