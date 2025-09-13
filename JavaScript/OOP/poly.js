class Shape{
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius
    }
    area() {
        return Math.PI*this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(side){
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side
    }
}

class SquareRoot extends Shape{
    constructor(root){
        super();
        this.root =root;
    }

    area() {
        return this.root * this.root * this.root
    }
}

const shapes = [new Circle(5), new Square(4), new SquareRoot(2)];

shapes.forEach(s => console.log(s.area()));
//Classic polymorphism — one interface, many implementations.