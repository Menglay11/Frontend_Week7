import React, {useState} from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);


  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value);
    // console.log(event.target.value);
  }

  
  function onB(event) {
    setB(event.target.value);
    // console.log(event.target.value);
  }

  function onCompute() {
    const numA = Number(a);
    const numB = Number(b);

    if ( isNaN(numA) || isNaN(numB) ) {
      setResult("A and B shall be numbers!");
      setIsError(true);
      
    } else {
      setResult(numA + numB);
      setIsError(false);
      return result;
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={onA} value={a} />

      <label>B =</label>
      <input onChange={onB} value={b} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} style={{color: isError ? "red" : "black"}} />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
