class Dog {
    constructor() {
        this.hunger = 0;
    }
    
    run = () => {
        this.eat();
        //eat function does not exist/
    }
    
    food = () => {
        this.hunger = this.hunger - 10;
    }
 }

 let fido = new Dog();
 fido.run();
