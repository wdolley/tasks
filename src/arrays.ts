/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let output: number[] = [];
    if (numbers.length === 0) {
        return numbers;
    } else if (numbers.length === 1) {
        output.push(numbers[0]);
        output.push(numbers[0]);
        return output;
    } else {
        output.push(numbers[0]);
        output.push(numbers[numbers.length - 1]);
        return output;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((x) => x * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let output: number[] = [];
    output = numbers.map((number1: string): number =>
        parseInt(number1) ? parseInt(number1) : 0,
    );
    return output;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let intnumbers = [];
    intnumbers = amounts.map((amount: string): number =>
        isNaN(parseInt(amount.replace("$", ""))) ? 0 : (
            parseInt(amount.replace("$", ""))
        ),
    );
    return intnumbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let output: string[] = [];
    output = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
    output = output.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    return output;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let output: string[] = [];
    output = words.filter((word: string): boolean => word.length < 4);

    return output.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * -then return true.
 */
export function allRGB(colors: string[]): boolean {
    let output: boolean = true;
    let filteredList: string[] = [];
    if (colors.length === 0) {
        return output;
    }
    filteredList = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    if (filteredList.length !== colors.length) {
        output = false;
    }
    return output;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let output: string = "";
    let sum: number = 0;
    if (addends.length === 0) {
        output = "0=0";
        return output;
    } else {
        sum = addends.reduce((a, b) => a + b);
        output = sum + "=" + addends.join("+");
        return output;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let output: number[] = [];
    let negIndex: number = 0;
    let sum = 0;
    negIndex = values.findIndex((value: number): boolean => value < 0);
    if (values.length === 0) {
        output.push(0);
        return output;
    } else if (negIndex === -1) {
        output = [...values];
        output.push(values.reduce((a, b) => a + b, 0));
        return output;
    } else {
        output = [...values];
        sum = values.slice(0, negIndex).reduce((a, b) => a + b, 0);
        output.splice(negIndex + 1, 0, sum);
    }
    return output;
}
