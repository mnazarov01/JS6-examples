let obj = {
    name: 'Maksim',
    age: 25
}

const entries = [
    ['name', 'Maksim'],
    ['age', 25]
]


//console.log(Object.entries(obj));
//console.log(Object.fromEntries(entries))

// =================== MAP ==========================

const map = new Map(entries)
console.log(map.get('name'))

map
    .set('newField', 42)
    .set(obj, 'value of object')
    .set(NaN, '??')

console.log(map.get(obj))

map.delete('age')
console.log(map.has('age'))
console.log(map.size);

// map.clear();
// console.log(map.size);

// ========================

// for (let entry of map.entries()) {
//     console.log(entry)
// }
// or
// for (let entry of map) {
//     console.log(entry)
// }
// or 
// map.forEach((value, key, m) => {
//     console.log(value, key)
// })
// or with(key, value)
// for (let [key, value] of map.entries()) {
//     console.log(key, value)
// }

// or with(value)
// for (let value of map.values()) {
//     console.log(value)
// }

// or with(keys)
// for (let key of map.keys()) {
//     console.log(key)
// }

// ==========================

const arr = [...map];
console.log(arr)
    // or
    // const arr = Array.from(map);
    // console.log(arr)

const mapObj = Object.fromEntries(map.entries())
console.log(mapObj) // key obj equals '[object Object]' now


// =================== SET ========================== 

const set = new Set([1, 2, 3, 4, 4, 4, 6, 6, 6]);
console.log(set);

// set.add(10).add(20).add(20);
// console.log(set);
// console.log(set.has(20), set.has(42))
// console.log(set.size);
// console.log(set.delete(1));
// console.log(set.size);
// set.clear();
// console.log(set.size);

// same functions
console.log(set.values());
console.log(set.keys());
//
console.log(set.entries());

for (let key of set) { console.log(key) };

const uniqValue = [...new Set([1, 2, 3, 3, 4, 5, 6, 6, 6])];
console.log(uniqValue)


// =================== WEAK MAP ==========================

// set get delete has
const weakMap = new WeakMap([
    [obj, 'fdfdfdfd']
]);
console.log(weakMap.get(obj));
//obj = null;
//console.log(weakMap.get(obj));

// =================== WEAK SET ==========================

const users = [
    { name: 'M' },
    { name: 'A' },
    { name: 'L' }
]

const weakSet = new WeakSet();
weakSet.add(users[0]).add(users[1])

users.splice(1, 1);

console.log(weakSet.has(users[0]))
console.log(weakSet.has(users[1]))