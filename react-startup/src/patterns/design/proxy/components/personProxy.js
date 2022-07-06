const person = {
    name: "John Doe",
    age: 44,
    nationality: "Macedonian",
};
//2nd argument represents handler, most common are get(access) and set(modify) property
const personProxy = new Proxy(person, {

    get: (obj, prop) => {
        if (!obj[prop]) {
            console.log(`Property doesn't exist`);
        } else {
            console.log(`The value of ${prop} is ${obj[prop]}`);
            // return obj[prop];
            return Reflect.get(obj, prop);
        }
    },

    set: (obj, prop, value) => {
        if (prop === "age" && typeof value !== "number") {
            console.log(`Sorry, you can only pass numeric values for age.`);
        } else if (prop === "name" && value.length < 2) {
            console.log(`You need to provide a valid name.`);
        } else {
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
            //Instead of this line  obj[prop] = value; include this line
            Reflect.set(obj, prop, value);

        }
    }

});

export default personProxy;
