//creatingclass FourSided. 
class FourSided {
    constructor(name) {
        this.numSides = 4;
                this.name = name;
    }
    //method.
    area() {
        return this.height * this.width;
    }
}


class Square extends FourSided{
    constructor(size) {
        super("square"); //adding the value of name.
        this.height = size;
        this.width = size;
    }
}

let mySquare = new Square(4);
console.log(mySquare.name); //sqaure
console.log(mySquare.area()) 
