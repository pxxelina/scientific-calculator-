import React, { useState, useEffect } from 'react';
import './Calculator.css';
import { ArrowLeft, Calculator, ChevronDown, ChevronUp, Divide, Equal, Heart, Minus, Percent, Plus, RotateCcw, X } from 'lucide-react';

export default function CalculatorApp() {
  const [input, setInput] = useState<string>('0');
  const [result, setResult] = useState<string>('');
  const [memory, setMemory] = useState<number | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);
  const [showScientific, setShowScientific] = useState<boolean>(false);
  const [inRadianMode, setInRadianMode] = useState<boolean>(true);
  
  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Numbers
      if (/^[0-9]$/.test(e.key)) {
        handleNumber(e.key);
      }
      // Operators
      else if (['+', '-', '*', '/', '%'].includes(e.key)) {
        handleOperator(e.key);
      }
      // Enter/Equal
      else if (e.key === 'Enter' || e.key === '=') {
        calculateResult();
      }
      // Decimal
      else if (e.key === '.') {
        handleDecimal();
      }
      // Backspace
      else if (e.key === 'Backspace') {
        handleBackspace();
      }
      // Clear
      else if (e.key === 'Escape') {
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input, waitingForOperand]);

  const handleNumber = (num: string) => {
    if (waitingForOperand) {
      setInput(num);
      setWaitingForOperand(false);
    } else {
      setInput(input === '0' ? num : input + num);
    }
  };

  const handleOperator = (op: string) => {
    if (input !== '0' || result !== '') {
      setInput(input + op);
      setWaitingForOperand(false);
      setResult('');
    }
  };

  const handleDecimal = () => {
    const parts = input.split(/[+\-*/]/);
    const lastPart = parts[parts.length - 1];
    
    if (waitingForOperand) {
      setInput('0.');
      setWaitingForOperand(false);
    } else if (!lastPart.includes('.')) {
      setInput(input + '.');
    }
  };

  const handleBackspace = () => {
    if (input.length === 1 || (input.length === 2 && input.startsWith('-'))) {
      setInput('0');
    } else {
      setInput(input.slice(0, -1));
    }
  };

  const handleClear = () => {
    setInput('0');
    setResult('');
    setWaitingForOperand(false);
  };

  const handleAllClear = () => {
    setInput('0');
    setResult('');
    setMemory(null);
    setWaitingForOperand(false);
  };

  const calculateResult = () => {
    try {
      // Replace × with * and ÷ with / for evaluation
      let expression = input.replace(/×/g, '*').replace(/÷/g, '/');
      
      // Handle percentage calculations
      if (expression.includes('%')) {
        expression = expression.replace(/(\d+\.?\d*)%/g, (match, num) => 
          (parseFloat(num) / 100).toString()
        );
      }
      
      // Use Function constructor as a safer alternative to eval
      // eslint-disable-next-line no-new-func
      const calculate = new Function('return ' + expression);
      const calculatedResult = calculate();
      
      setResult(calculatedResult.toString());
      setInput(calculatedResult.toString());
      setWaitingForOperand(true);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleSquareRoot = () => {
    try {
      const value = parseFloat(input);
      if (value >= 0) {
        const sqrtResult = Math.sqrt(value);
        setInput(sqrtResult.toString());
        setResult(sqrtResult.toString());
        setWaitingForOperand(true);
      } else {
        setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const handleSquare = () => {
    try {
      const value = parseFloat(input);
      const squareResult = value * value;
      setInput(squareResult.toString());
      setResult(squareResult.toString());
      setWaitingForOperand(true);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleMemorySave = () => {
    try {
      const value = parseFloat(input);
      setMemory(value);
    } catch (error) {
      // Handle error
    }
  };

  const handleMemoryRecall = () => {
    if (memory !== null) {
      setInput(memory.toString());
    }
  };

  const handleMemoryClear = () => {
    setMemory(null);
  };

  const handleToggleSign = () => {
    if (input !== '0') {
      setInput(input.startsWith('-') ? input.substring(1) : '-' + input);
    }
  };
  
  // Scientific calculator functions
  const handleSin = () => {
    try {
      const value = parseFloat(input);
      const angleValue = inRadianMode ? value : (value * Math.PI / 180);
      const sinResult = Math.sin(angleValue);
      setInput(sinResult.toString());
      setResult(sinResult.toString());
      setWaitingForOperand(true);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleCos = () => {
    try {
      const value = parseFloat(input);
      const angleValue = inRadianMode ? value : (value * Math.PI / 180);
      const cosResult = Math.cos(angleValue);
      setInput(cosResult.toString());
      setResult(cosResult.toString());
      setWaitingForOperand(true);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleTan = () => {
    try {
      const value = parseFloat(input);
      const angleValue = inRadianMode ? value : (value * Math.PI / 180);
      const tanResult = Math.tan(angleValue);
      setInput(tanResult.toString());
      setResult(tanResult.toString());
      setWaitingForOperand(true);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleLog = () => {
    try {
      const value = parseFloat(input);
      if (value > 0) {
        const logResult = Math.log10(value);
        setInput(logResult.toString());
        setResult(logResult.toString());
        setWaitingForOperand(true);
      } else {
        setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const handleLn = () => {
    try {
      const value = parseFloat(input);
      if (value > 0) {
        const lnResult = Math.log(value);
        setInput(lnResult.toString());
        setResult(lnResult.toString());
        setWaitingForOperand(true);
      } else {
        setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const handlePi = () => {
    setInput(Math.PI.toString());
    setResult(Math.PI.toString());
    setWaitingForOperand(true);
  };

  const handleE = () => {
    setInput(Math.E.toString());
    setResult(Math.E.toString());
    setWaitingForOperand(true);
  };

  const handlePower = () => {
    if (input !== '0') {
      setInput(input + '^');
      setWaitingForOperand(false);
    }
  };

  const handleExp = () => {
    try {
      const value = parseFloat(input);
      const expResult = Math.exp(value);
      setInput(expResult.toString());
      setResult(expResult.toString());
      setWaitingForOperand(true);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleFactorial = () => {
    try {
      const value = parseInt(input);
      if (value >= 0 && Number.isInteger(value)) {
        let factorialResult = 1;
        for (let i = 2; i <= value; i++) {
          factorialResult *= i;
        }
        setInput(factorialResult.toString());
        setResult(factorialResult.toString());
        setWaitingForOperand(true);
      } else {
        setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const handleAbs = () => {
    try {
      const value = parseFloat(input);
      const absResult = Math.abs(value);
      setInput(absResult.toString());
      setResult(absResult.toString());
      setWaitingForOperand(true);
    } catch (error) {
      setResult('Error');
    }
  };

  const toggleAngleMode = () => {
    setInRadianMode(!inRadianMode);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <Calculator className="calculator-icon" />
        <h2>Lina Yassire's Calculator</h2>
      </div>
      
      <div className="calculator-display">
        <div className="input-display">{input}</div>
        <div className="result-display">{result}</div>
      </div>
      
      <div className="memory-status">
        {memory !== null && <span>Memory: {memory}</span>}
        <span className="angle-mode">
          {inRadianMode ? 'RAD' : 'DEG'}
        </span>
      </div>
      
      <div className="scientific-toggle" onClick={() => setShowScientific(!showScientific)}>
        {showScientific ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        <span>{showScientific ? 'Hide Scientific' : 'Show Scientific'}</span>
      </div>

      {showScientific && (
        <div className="scientific-buttons">
          <button className="button scientific" onClick={handleSin}>sin</button>
          <button className="button scientific" onClick={handleCos}>cos</button>
          <button className="button scientific" onClick={handleTan}>tan</button>
          <button className="button scientific" onClick={toggleAngleMode}>{inRadianMode ? "→DEG" : "→RAD"}</button>
          
          <button className="button scientific" onClick={handleLog}>log</button>
          <button className="button scientific" onClick={handleLn}>ln</button>
          <button className="button scientific" onClick={handleExp}>e^x</button>
          <button className="button scientific" onClick={handlePower}>x^y</button>
          
          <button className="button scientific" onClick={handlePi}>π</button>
          <button className="button scientific" onClick={handleE}>e</button>
          <button className="button scientific" onClick={handleFactorial}>x!</button>
          <button className="button scientific" onClick={handleAbs}>|x|</button>
        </div>
      )}
      
      <div className="calculator-buttons">
        <button className="button memory" onClick={handleMemoryClear}>MC</button>
        <button className="button memory" onClick={handleMemoryRecall}>MR</button>
        <button className="button memory" onClick={handleMemorySave}>MS</button>
        <button className="button operator" onClick={() => handleOperator('+')}><Plus size={18} /></button>
        
        <button className="button special" onClick={handleAllClear}>AC</button>
        <button className="button special" onClick={handleClear}><RotateCcw size={18} /></button>
        <button className="button special" onClick={() => handleOperator('%')}><Percent size={18} /></button>
        <button className="button operator" onClick={() => handleOperator('/')}><Divide size={18} /></button>
        
        <button className="button number" onClick={() => handleNumber('7')}>7</button>
        <button className="button number" onClick={() => handleNumber('8')}>8</button>
        <button className="button number" onClick={() => handleNumber('9')}>9</button>
        <button className="button operator" onClick={() => handleOperator('*')}><X size={18} /></button>
        
        <button className="button number" onClick={() => handleNumber('4')}>4</button>
        <button className="button number" onClick={() => handleNumber('5')}>5</button>
        <button className="button number" onClick={() => handleNumber('6')}>6</button>
        <button className="button operator" onClick={() => handleOperator('-')}><Minus size={18} /></button>
        
        <button className="button number" onClick={() => handleNumber('1')}>1</button>
        <button className="button number" onClick={() => handleNumber('2')}>2</button>
        <button className="button number" onClick={() => handleNumber('3')}>3</button>
        <button className="button operator" onClick={() => handleOperator('+')}><Plus size={18} /></button>
        
        <button className="button special" onClick={handleToggleSign}>+/-</button>
        <button className="button number" onClick={() => handleNumber('0')}>0</button>
        <button className="button special" onClick={handleDecimal}>.</button>
        <button className="button calculate" onClick={calculateResult}><Equal size={18} /></button>
        
        <button className="button special" onClick={handleBackspace}><ArrowLeft size={18} /></button>
        <button className="button special" onClick={handleSquareRoot}>√</button>
        <button className="button special" onClick={handleSquare}>x²</button>
      </div>
    </div>
  );
}
