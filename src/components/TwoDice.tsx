import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export const TwoDice = () => {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);
    const [result, setResult] = useState<string>("");

    const checkResult = (left: number, right: number) => {
        if (left === 1 && right === 1) {
            setResult("Lose");
        } else if (left === right) {
            setResult("Win");
        } else {
            setResult("");
        }
    };
    const rollLeftDie = () => {
        const newLeftDie = Math.floor(Math.random() * 6) + 1;
        setLeftDie(newLeftDie);
        checkResult(newLeftDie, rightDie);
    };

    const rollRightDie = () => {
        const newRightDie = Math.floor(Math.random() * 6) + 1;
        setRightDie(newRightDie);
        checkResult(leftDie, newRightDie);
    };

    return (
        <div>
            <div data-testid="left-die">{leftDie}</div>
            <div data-testid="right-die">{rightDie}</div>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {result && <div>{result}</div>}
        </div>
    );
};
