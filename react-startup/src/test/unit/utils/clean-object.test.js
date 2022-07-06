import cleanObject from "patterns/design/provider/components/clean-object";


describe("Utils: clean-object", () => {
    test.each`
    input                                                                          | output
    ${[null, 1, undefined, "", [], {}, 2, { test: 1 }]}                            | ${[1, 2, { test: 1 }]}
    ${{ a: "", b: null, c: undefined, d: [], e: {}, f: 0, g: 1 }}                  | ${{ f: 0, g: 1 }}
    ${{ a: "", b: null, c: undefined, d: [], e: {}, f: [1], g: [0], h: [[], {}] }} | ${{ f: [1], g: [0], h: [[], {}] }}
    ${{ a: "", b: null, c: undefined, d: [], e: {}, f: { x: 1, y: {}, z: [] } }}   | ${{ f: { x: 1, y: {}, z: [] } }}
  `(
        "should remove undefined, null, empty string, empty array and empty object values from array or object",
        ({ input, output }) => {
            expect(cleanObject(input)).toEqual(output);
        },
    );
});
