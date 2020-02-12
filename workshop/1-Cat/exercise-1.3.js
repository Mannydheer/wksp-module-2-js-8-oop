// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.


// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.


class Cat {
    //now have a name and breed parameter that will be passed. 
    constructor(name, breedtype) {
        this.species = 'Cat'
        this.type = name;
        this.tiredness = 50;
        this.hunger = 50;
        this.loneliness = 50;
        this.breed = breedtype;
        this.happiness = 0;
    }
    //Sleep method update. 
    //sleep accepts hours. 
    sleep = (hours) => {
        //updated tiredness.
        this.tiredness = this.tiredness - 5*hours
        this.happiness += 5 + this.tiredness;
    }
    eat = (grams) => {
        this.hunger = this.hunger - 0.20*grams;
        this.happiness += 30 + this.hunger;
    }
    play = (min) => {
        this.loneliness = this.loneliness - min*3;
        this.happiness += 20 + this.hunger
        
    }
    smile = () => {
        if (this.happiness > 50) {
            this.happiness = 'Happy';
        }
        else {
            this.happiness = 'Sad';
        }
    }

}

let boots = new Cat();
//will call sleep and pass it 10 hours. 
boots.sleep(10);
//will call eat method and pass it grams. 
boots.eat(10);
//will call play method and pass it min. 
boots.play(10);
//will call smile method and pass it a happiness. 

boots.smile()


console.log(boots);