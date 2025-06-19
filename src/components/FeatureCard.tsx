import React from 'react';
import { Clipboard } from 'lucide-react';

interface FeatureCardProps {
  icon: Clipboard;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-indigo-100 mb-4">
        <Icon className="text-indigo-600" size={22} />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
