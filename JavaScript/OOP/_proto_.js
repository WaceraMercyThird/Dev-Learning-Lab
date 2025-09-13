const animal = {
    speak() {
        console.log(`${this.name} make a sound`);
    }
};

const dog = {
    name: "Rex",
    _proto_:animal,

    speak() {
        console.log(`${this.name} barks`);
    }
};

const cat = Object.create(animal);

cat.name = "Reggy";
cat.speak()

dog._proto_.speak()
dog.speak()