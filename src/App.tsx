import { useEffect } from 'react';
import './index.css';
import Calculator from './components/Calculator';

export function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-6" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-3">Lina Yassire's Calculator</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A powerful scientific calculator with advanced mathematical functions
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2 mx-auto">
              <Calculator />
            </div>

            <div className="md:w-1/2">
              <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-indigo-700">How to Use This Calculator</h2>
                
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-indigo-600">Basic Operations</h3>
                    <p>Use the number pad and operator buttons (+, -, ×, ÷) for basic calculations. Press = to get your result.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-indigo-600">Scientific Functions</h3>
                    <p>Click "Show Scientific" to access advanced functions:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><span className="font-medium">Trigonometry:</span> sin, cos, tan (toggle between degrees/radians)</li>
                      <li><span className="font-medium">Logarithms:</span> log (base 10), ln (natural log)</li>
                      <li><span className="font-medium">Constants:</span> π (pi), e (Euler's number)</li>
                      <li><span className="font-medium">Advanced:</span> x² (square), √ (square root), x! (factorial)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-indigo-600">Memory Functions</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><span className="font-medium">MS:</span> Memory Store - saves the current number</li>
                      <li><span className="font-medium">MR:</span> Memory Recall - retrieves the stored number</li>
                      <li><span className="font-medium">MC:</span> Memory Clear - clears the stored number</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-indigo-600">Tips</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Use keyboard input for faster calculations</li>
                      <li>The calculator shows your expression history above the result</li>
                      <li>Switch between degrees and radians for trigonometric functions</li>
                      <li>Clear entry (CE) removes the current input, while AC clears everything</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-12 text-center text-gray-500 text-sm">
            <p>Created by Lina Yassire © {new Date().getFullYear()}</p>
            <p className="mt-1">Your personal scientific calculator for all mathematical needs</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
