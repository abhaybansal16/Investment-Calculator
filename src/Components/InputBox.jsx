
export default function InputBox({ onSelect, Value })
{
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" min={0} value= {Value.initialInvestment} onChange = {(event) => onSelect('initialInvestment',event.target.value)} required/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" min={0} value= {Value.annualInvestment} onChange = {(event) => onSelect('annualInvestment',event.target.value)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" min={0} value= {Value.expectedReturn} onChange = {(event) => onSelect('expectedReturn',event.target.value)} required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" min={1} value= {Value.duration} onChange = {(event) => onSelect('duration',event.target.value)} required/>
                </p>
            </div>
        </section>
    );

}