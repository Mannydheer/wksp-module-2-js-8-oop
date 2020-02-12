class Dog {
    constructor() {
        this.hunger = 0;
    }
    
    remaining = () => {
        //.food and .amount does not exicst. 
        console.log(this.food.amount)
    }
 }

 let fido = new Dog();
 fido.remaining();