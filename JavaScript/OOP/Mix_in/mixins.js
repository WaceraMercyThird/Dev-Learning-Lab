//Multiple Inheritance Hack 
// no mutliple extends, but can mix in behaviors

let CanFly = {
    fly() {
        console.log(`${this.name} is flying!`)
    }
};

let CanSwim = {
    swim() {
        console.log(`${this.name} is swimming!`)
    }
}

let CanWalk = {
    walk() {
        console.log(`${this.name} is walking!`)
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }
    
}


Object.assign(Animal.prototype, CanFly,CanSwim, CanWalk);

const duck = new Animal("Duck");
duck.fly();
duck.swim();
duck.walk();