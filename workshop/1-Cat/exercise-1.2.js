// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, Boots' name is not part of its object.
// Update the Cat class to accept have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you instantiate the boots object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

// By the way, Boots is a Simaese cat...




class Cat {
    //now have a name and breed parameter that will be passed. 
    constructor(name, breedtype) {
        this.species = 'Cat'
        this.type = name;
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.breed = breedtype;
    }

}

//now pass boots name and breed as ARGUMENTS> 

let boots = new Cat("boots", 'siamese');
console.log(boots);



//OUTPUT.

// Cat {
//     species: 'Cat',
//     type: 'boots',
//     tiredness: 0,
//     hunger: 0,
//     loneliness: 0,
//     breed: 'siamese'
//   }