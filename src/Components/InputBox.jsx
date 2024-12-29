import { useState } from "react";
export default function InputBox()
{
    const[Value, setValue] = useState({
        initialInvestment : 15000,
        annualInvestment : 300,
        expectedReturn : 5,
        duration : 10,
    }
    );

    function handleChange(inputIdentifier, newValue)
    {
        setValue((prevValue) => {
            return{
                ...prevValue,
                [inputIdentifier] : newValue
            };
        });
    }
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="number">Initial Investment</label>
                    <input type="number" value= {Value.initialInvestment} onChange = {(event) => handleChange('initialInvestment',event.target.value)} required/>
                </p>
                <p>
                    <label htmlFor="number">Annual Investment</label>
                    <input type="number" value= {Value.annualInvestment} onChange = {(event) => handleChange('annualInvestment',event.target.value)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="number">Expected Return</label>
                    <input type="number" value= {Value.expectedReturn} onChange = {(event) => handleChange('expectedReturn',event.target.value)} required/>
                </p>
                <p>
                    <label htmlFor="number">Duration</label>
                    <input type="number" value= {Value.duration} onChange = {(event) => handleChange('duration',event.target.value)} required/>
                </p>
            </div>
        </section>
    );

}