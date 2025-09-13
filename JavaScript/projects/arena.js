class Animal {
    #health

    constructor(name, health) {
        this.name = name;
        this.#health = health;
    }

    speak() {
        console.log(`${this.name} make a sound.`)
    }

    takeDamage(amount) {
        this.#health -= amount;
        console.log(`${this.name} take ${amount} demage. Health: ${this.#health}`)
    }

    getHealth() {
        return this.#health
    }

    isAlive() {
        return this.#health > 0
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks!`);
    }

    attack() {
        const damage = Math.floor(Math.random() * 20) + 10;
        console.log(`${this.name} bites ${enemy.name} for ${damage} damage!`)
        enemy.takeDamage(damage)
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows!`);
    }

    attack(enemy) {
        const damage = Math.floor(Math.random() * 15) + 5;
        console.log(`${this.name} scraches ${enemy.name} for ${damage} damage!`);
        enemy.takeDamage(damage);
    }
}

const Healer = {
    heal(target) {
        const healAmount = Math.floor(Math.random() * 15) + 5;
        console.log(`${this.name} heals ${target.name} for ${healAmount}!`)
        target.takeDamage(-healAmount);
    }
};

const dog = new Dog("Rex", 100);
const cat = new Cat("Kitty", 100)

Object.assign(cat, Healer);

let round = 1;
while (dog.isAlive() && cat.isAlive()) {
    console.log(`\n--- Round ${round} ---`);

    if (cat.isAlive()){
        cat.attack(dog);
        cat.heal(cat);
    }

    round++;
}

if (dog.isAlive()) {
    console.log(`\n${this.name} wins!`);
}else if (cat.isAlive()){
    console.log(`\n${cat.name} wins!`);
}else {
    console.log("\nIt's a tie!");
}