import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import type { Skill } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  const chartData = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Skill Level',
        data: skills.map(skill => skill.level),
        fill: true,
        backgroundColor: 'rgba(35, 116, 225, 0.2)',
        borderColor: '#2374E1',
        tension: 0.4,
        pointBackgroundColor: '#2374E1',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="fb-card p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="flex items-center p-3 rounded-lg bg-fb-hover"
          >
            <span className="text-2xl mr-3">{skill.icon}</span>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-fb-button rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full"
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color 
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="h-[300px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SkillCard;