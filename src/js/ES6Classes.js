// const animal = {
//     name: 'animal',
//     age: 5,
//     hasTail: true
// }

class Animal {

    static type = 'ANIMAL'; // can get only through сlass (Animal)

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am animal');
    }

    sayThis() {
        console.log(this)
    }

}

// const animal = new Animal({ name: 'animal', age: 5, hasTail: true })

class Cat extends Animal {

    static type = 'CAT'

    constructor(options, addProp) {
        super(options);
        this.color = options.color
    }

    voice() {
        super.voice();
        console.log('I am cat');
    }

    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(newAge) {
        this.age = newAge;
    }

}

const cat = new Cat({
    name: 'animal',
    age: 5,
    hasTail: true,
    color: 'red'
}, 100)

// or 
// class Cat extends Animal {} // without constructor
// const cat = new Cat({ name: 'animal', age: 5, hasTail: true })


class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'block';
    }

}

class Box extends Component {
    constructor(options) {
        super(options.selector);

        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
}

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%';
    }
}

const box1 = new Box({ selector: '#box1', size: 100, color: 'red' })
const box2 = new Box({ selector: '#box2', size: 110, color: 'green' })
const circle = new Circle({ selector: '#circle', size: 120, color: 'blue' })