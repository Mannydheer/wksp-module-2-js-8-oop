class Student {
    constructor() {
        this.excitement = 1;
    }

    learn = () => {
        this.excitement = this.excitement  + 5;
    }

    //reference methods with this.learn - must do this to retarget a function. 
    writeCode = () => { this.learn(); }
}

let bob = new Student();
bob.writeCode();