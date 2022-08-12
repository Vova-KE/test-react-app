import { useState, useCallback } from "react";
import CounterBody from "./CounterBody";
import CounterStepSelect from "./CounterStepSelect";

const Counter = () => {
    const [value, setValue] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => setValue(prev => prev + step);
    const decrement = () => setValue(prev => prev - step);

    const handleStepChange = useCallback(
        (e) => setStep(Number(e.currentTarget.value))
        , []
    );

    return (
        <div>
            <button onClick={decrement}>-</button>
            <CounterBody value={value} />
            <button onClick={increment}>+</button>
            <CounterStepSelect value={step} onStepChange={handleStepChange}/>

            {/* <select value={step} onChange={handleStepChange}>
                <option value='1'>1</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select> */}
        </div>
    )
};

export default Counter;