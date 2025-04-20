import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    currencySelect = "usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {
            const amountInputId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currencySelect}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}

                >
                    {currencyOptions.map((curren) => (   //here when we run the loop without passing the key then react will make alot of hit rewuest which is not good for performance
                        <option key={curren} value={curren}>                 
                            {curren}
                        </option>

                    ))}       
                              
                </select>
            </div>
        </div>
    );
}

export default InputBox;

//useId hook 
//useid is a react hook used for generating unique Id's that can be passedto accesibility attributes.

// const id = useId();

//Do not call useId for generating keys in the list . keys should be generating from your data. 