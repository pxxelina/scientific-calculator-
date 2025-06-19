import React from 'react';

export default function WelcomeHeader() {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient pb-2">
        Welcome to Mocha
      </h1>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
        Your AI-powered web application builder. I'm here to help you create beautiful, 
        functional web apps with just a simple request.
      </p>
    </div>
  );
}
