import React from 'react';
import { User, ClipboardList, TrendingUp, Target, Zap } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Personal Mentor Assignment",
    description: "From Day 1, you're assigned a dedicated mentor who knows YOUR name, pace, and goals.",
    items: ["Not juggling 50 other students", "Available specifically for YOU", "Genuinely cares about YOUR success"],
    icon: 'user'
  },
  {
    title: "Personalized Study Strategy",
    description: "Your mentor creates YOUR custom strategy based on your level, strengths, and goals.",
    items: ["Weekly priority list", "Subject-specific approaches", "Smart timetable", "Flexible adjustments"],
    icon: 'clipboard'
  },
  {
    title: "Weekly Progress Tracking",
    description: "Every week, your mentor reviews progress and provides guidance based on data.",
    items: ["Which concepts mastered?", "Where are you struggling?", "Immediate course correction"],
    icon: 'trending'
  },
  {
    title: "Exam Preparation Guidance",
    description: "Your mentor guides you through the entire exam journey from registration to counselling.",
    items: ["Registration reminders", "Form filling help", "Exam strategy"],
    icon: 'target'
  },
  {
    title: "Motivation & Strategy Sessions",
    description: "Regular encouragement, stress management, and live sessions with Dr. Anshuman Sir.",
    items: ["Confidence building", "Stress management", "Success stories access"],
    icon: 'zap'
  }
];

const IconMap: Record<string, React.ReactNode> = {
  user: <User className="w-10 h-10 text-purple-800" />,
  clipboard: <ClipboardList className="w-10 h-10 text-orange-500" />,
  trending: <TrendingUp className="w-10 h-10 text-blue-500" />,
  target: <Target className="w-10 h-10 text-pink-500" />,
  zap: <Zap className="w-10 h-10 text-yellow-500" />,
};

export const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 justify-center">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
            {IconMap[feature.icon]}
          </div>
          <h3 className="text-xl font-bold text-blue-600 mb-3">{feature.title}</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {feature.description}
          </p>
          <ul className="space-y-2">
            {feature.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-blue-500 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};