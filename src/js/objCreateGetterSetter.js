const person = Object.create({
    calculateAge() {
        console.log('Age:', this.age);
    }
}, {
    name: {
        value: 'Vladilen',

        // we can't enumerate this key in 
        // object if enumerable = false(default) 
        enumerable: true,

        // we can't change this key in object 
        // if writable = false (default)
        writable: true,

        // we can't delete this key from object
        // if configurable = false (default)
        configurable: true,

    },
    birthYear: {
        value: 1993,
        writable: true,
    },

    age: {
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            this.birthYear = new Date().getFullYear() - value;
        }
    }

})

for (let key in person) {

    if (person.hasOwnProperty(key)) { // does the key belongs the object
        console.log('Key', key, person[key])
    }


}

person.name = 'Maksim';
console.log(person);

delete person.name;
console.log(person);

/*
const person2 = {
    name: 'Vladilen',
    birthYear: 1993
}

console.log(person2);
for (let key in person2) {
    console.log('Key', key)
} // we can get keys for this object they're a enable
*/