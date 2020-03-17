// Prototype 

const person = {
    name: 'My name',
    age: 25,
    greet: function() {
        console.log('Greet!');
    }
};

const person2 = new Object({
    name: 'My name',
    age: 25,
    greet: function() {
        console.log('Greet!');
    }
});

Object.prototype.sayHello = function() {
    console.log('Hello', this.name);
}

const lena = Object.create(person2);
lena.name = 'Elena';

const emptyObject = Object.create(null);

const str = 'I am string';
str.sayHello();

const str2 = new String('I am string');