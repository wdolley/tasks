import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (val: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue); // Doubles the current value
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (val: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue); // Halves the current value
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10); // Start with 10 as default value

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <div>
                {/* Buttons for doubling and halving */}
                <Doubler dhValue={dhValue} setDhValue={setDhValue} />
                <Halver dhValue={dhValue} setDhValue={setDhValue} />
            </div>
        </div>
    );
}
