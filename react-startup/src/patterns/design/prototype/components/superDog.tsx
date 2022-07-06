import Dog from "./dog";

class SuperDog extends Dog {
    constructor(name: string) {
        super(name);
    }

    fly() {
        return "Flying!";
    }
}

export default SuperDog;