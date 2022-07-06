import { isNil, isEmpty, anyPass, filter } from "ramda";

/**
 * Removes any undefined, null, empty string, empty array and empty object values from a given object or array
 * @param {Object|Array} input The input object or array
 * @returns {Object|Array}
 */
const cleanObject = <T>(input: T): Partial<T> => {
    const isNullishOrEmpty = (value: any): boolean => !anyPass([isNil, isEmpty])(value);
    return filter(isNullishOrEmpty, input);
};

export default cleanObject;
