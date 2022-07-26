class Dog {
    constructor(name) {
        this.name = name;
    }
}

const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!")
}

const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
    wal() {
        super.walk();
    },
    sleep() {
        super.sleep();
    }
};

let pet1 = new Dog("Daisy");

pet1 = Object.assign(dogFunctionality, animalFunctionality);
pet1 = Object.assign(Dog.prototype, dogFunctionality);


export default pet1;

pet1.bark();
pet1.wagTail();
pet1.play();
pet1.walk();
pet1.sleep();