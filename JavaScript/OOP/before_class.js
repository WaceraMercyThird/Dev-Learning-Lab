function Animal(name) {
    this.name = name;
};

Animal.prototype.speak = function() {
    console.log(this.name + "Make a sound.")
};


function Dog(name) {
    Animal.call(this, name);
};

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

const dog = new Dog("Rex");
dog.speak()