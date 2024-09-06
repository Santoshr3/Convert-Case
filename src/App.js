import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const toSentenceCase = () => {
    const text = inputText.trim().toLowerCase();
    const result = text.charAt(0).toUpperCase() + text.slice(1);
    setOutputText(result);
  };

  const toLowerCase = () => {
    setOutputText(inputText.toLowerCase());
  };

  const toUpperCase = () => {
    setOutputText(inputText.toUpperCase());
  };

  const toCapitalizedCase = () => {
    const result = inputText
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setOutputText(result);
  };

  const toAlternatingCase = () => {
    const result = inputText
      .split('')
      .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
      .join('');
    setOutputText(result);
  };

  const toTitleCase = () => {
    const result = inputText
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setOutputText(result);
  };

  const toInverseCase = () => {
    const result = inputText
      .split('')
      .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
      .join('');
    setOutputText(result);
  };

  const downloadText = () => {
    const blob = new Blob([outputText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'text.txt');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  };

  const clearText = () => {
    setInputText('');
    setOutputText('');
  };

  return (
    <div className="App">
      <h1>Convert Case - Text Transform</h1>
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text here..."
      />
      <div className="buttons">
        <button onClick={toSentenceCase}>Sentence Case</button>
        <button onClick={toLowerCase}>Lower Case</button>
        <button onClick={toUpperCase}>UPPER CASE</button>
        <button onClick={toCapitalizedCase}>Capitalized Case</button>
        <button onClick={toAlternatingCase}>aLtErNaTiNg cAsE</button>
        <button onClick={toTitleCase}>Title Case</button>
        <button onClick={toInverseCase}>InVeRsE CaSe</button>
        <button onClick={downloadText}>Download Text</button>
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
        <button onClick={clearText}>Clear</button>
      </div>
      <textarea
        value={outputText}
        readOnly
        placeholder="Transformed text will appear here..."
      />
    </div>
  );
}

export default App;
