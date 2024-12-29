import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result ({ userInput })
{
    const Results = calculateInvestmentResults(userInput);
    const initialInvestment = Results[0].valueEndOfYear - Results[0].interest - Results[0].annualInvestment;
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Values</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>{Results.map((yearData) => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment*yearData.year - initialInvestment;
                const investedCapital = yearData.valueEndOfYear - totalInterest;
                return(
                    <tr key={yearData.year}> 
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(investedCapital)}</td>
                    </tr>
                );
                
            })}
                </tbody>
        </table>        
    );
}