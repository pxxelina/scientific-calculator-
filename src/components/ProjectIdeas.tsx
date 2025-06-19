import React from 'react';

const projects = [
  "Personal portfolio website",
  "E-commerce product showcase",
  "Recipe finder application",
  "Task management dashboard",
  "Weather forecast viewer",
  "Social media profile page",
  "Interactive data visualization",
  "Photo gallery with filters",
  "Real estate property browser",
  "Travel itinerary planner"
];

export default function ProjectIdeas() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Project Ideas</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 cursor-pointer transition-colors"
          >
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}
