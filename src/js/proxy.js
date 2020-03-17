// Object
const person = {
    name: 'Vladilen',
    age: 25,
    job: 'Fullstack'
}

const op = new Proxy(person, {
    get(target, prop) {
        if (!(prop in target)) {
            return prop.split('_').map(p => target[p]).join(' ')
        }
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`Target has't ${prop}`);
        }
    },
    has(target, prop) {
        return ['name', 'age', 'job'].includes(prop);
    },
    deleteProperty(target, prop) {
        console.log('Deteling prop', prop);
        return delete target[prop]
    }
})

// Functions
const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('target', target, 'thisArg', thisArg, 'args', args)
        return target.apply(thisArg, args).toUpperCase()
    }
})

// Classes and new 
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('construct ...');

        // return Person instence
        //return new target(...args)
        // return Proxy includes instance Person
        return new Proxy(new target(...args), {
            get(t, p) {
                return t[p] + ' magic';
            }
        })
    }
})

const p = new PersonProxy('maxim', 24);
//