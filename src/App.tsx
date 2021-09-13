import React, { useEffect, useState } from 'react';
import './App.css';
import { AddNumberLimit } from './components/AddNumberLimit';
import Table from './components/Table/Index';
import { Footer } from './components/Footer';
import { generatePrimeNumbers } from './utils/generatePrimeNumbers';

function App() {
  const [numberInput, setNumberInput] = useState<number>(30);
  const primeNumbers = generatePrimeNumbers(numberInput);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput(+e.target.value);
  };

  useEffect(() => {
    if (numberInput && numberInput > 150) {
      alert('This computation might take a while because number is too large!');
    }
    if (numberInput && numberInput < 1) {
      alert('Please enter a valid input!');
    }
  }, [numberInput]);

  return (
    <div className="App">
      <h1>Prime Numbers Multiplication Table</h1>
      <AddNumberLimit onChange={handleChange} />
      <Table primeNumbers={primeNumbers} />
      <Footer />
    </div>
  );
}

export default App;
