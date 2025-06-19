import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-12 text-center text-gray-500 text-sm">
      <p>© {currentYear} Mocha. AI-powered web application builder.</p>
      <p className="mt-1">Ready to build something amazing together!</p>
    </footer>
  );
}
