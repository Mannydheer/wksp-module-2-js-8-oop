// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.
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

    wait = (min) => {
  
    }
    }

}


let boots = new Cat();
boots.wait(2000);


// B) Make Boots wait 20 minutes and call then console.log(boots);

console.log(boots);