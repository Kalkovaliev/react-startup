import Dog from "./components/dog";
import SuperDog from "./components/superDog";

const Prototype = () => {

    const dog1 = new Dog("Daisy");
    const dog2 = new Dog("Max");
    const dog3 = new Dog("Spot");

    const superDog = new SuperDog("Maxy");
    superDog.bark();
    superDog.fly();

    console.log(Dog.prototype);

    //This is how we create prototype
    // Dog.prototype.play = () => console.log("Play");


    const dog = {
        bark() {
            console.log(`Woof!`);
        }
    };

    const pet1 = Object.create(dog);

    pet1.bark(); // Woof!
    console.log("Direct properties on pet1: ", Object.keys(pet1));
    console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));

    return (
        <div>
            <div>
                <h2>Prototype Pattern</h2>
                <p>Share properties among many objects of the same type.</p>
                <p>The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain. </p>
                <p>The prototype pattern is very powerful when working with objects that should have access to the same properties. Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, since all instances have access to the prototype object.</p>
                <p>The Object.create method lets us create a new object, to which we can explicitly pass the value of its prototype.</p>
            </div>
        </div>
    );
}

export default Prototype;
