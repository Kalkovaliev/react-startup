import { Counter } from "../../../../../patterns/design/singleton";

describe("pattern: singletonCounter", () => {

    it("incrementing 1 time should be 1", () => {
        Counter.increment();
        expect(Counter.getCount()).toBe(1);
    });

    it("incrementing 3 extra times should be 4", () => {
        Counter.increment();
        Counter.increment();
        Counter.increment();
        expect(Counter.getCount()).toBe(4);
    });

    it("decrementing 1 times should be 3", () => {
        Counter.decrement();
        expect(Counter.getCount()).toBe(3);
    });

});

