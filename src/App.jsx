import { useState } from "react";
import Header from "./Components/Header"
import InputBox from "./Components/InputBox"
import Result from "./Components/Result";

function App() {

  const[Value, setValue] = useState({
    initialInvestment : 15000,
    annualInvestment : 300,
    expectedReturn : 5,
    duration : 10,
}
);

function handleSelect(inputIdentifier, newValue)
{
    setValue((prevValue) => {
        return{
            ...prevValue,
            [inputIdentifier] : +newValue //+ symbol changes it into number form from string type as javascript automatically takes it as a string type
        };
    });
}
  return (
    <>
      <Header />
      <InputBox Value={Value} onSelect = {handleSelect}/>
      <Result userInput = {Value} />
    </>
  )
}

export default App
