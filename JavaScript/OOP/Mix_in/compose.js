//Composition over Inheritance
// Instead of extending, you can compose behaviors:

function createCar(name) {
    return {
        name,
        drive() {
            console.log(`${this.name} is driving!`)
        }
    };
};

function createElectricFeature() {
    return {
        charge() {
            console.log(`Battery charging...`)
        }
    };
}

const tesla = {...createCar("Tesla"), ...createElectricFeature()}

tesla.drive();
tesla.charge()