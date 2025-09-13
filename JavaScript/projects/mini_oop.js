class Animal{
    #health;

    constructor(name, health) {
        this.name = name;
        this.#health =health;
    }

    speak() {
        console.log(`${this.name} make a sound`)
    }

    takeDamage(amount) {
        this.#health -=amount
        console.log(`${this.name} take ${amount} damage. Healing: ${this.#health}`)
    }
    getHealth(){
    return this.#health;
    };

    isAlive(){
        return this.#health > 0;
    };
};

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks!`);
    }

    attack(enemy){
        console.log(`${this.name} bites ${enemy.name}!`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows!`);
    }

    attack(enemy) {
        console.log(`${this.name} scratches ${enemy.name}!`);
        enemy.takeDamage(15);
    }
}

const Healer = {
    heal(target) {
        console.log(`${this.name} heals ${target.name}!`);

        if(target.isAlive()) {
            target.takeDamage(-10);
        }
    }
}

const dog =new Dog("Rex", 100);
const cat = new Cat("kitty", 100)


Object.assign(cat, Healer);

dog.speak();
cat.speak();

dog.attack(cat);
cat.attack(dog);

cat.heal(cat)


// Encapsulation → #health is private.

// Inheritance → Dog and Cat extend Animal.

// Polymorphism → Both override speak() and attack().

// Composition / Mixins → cat gained healing ability dynamically.