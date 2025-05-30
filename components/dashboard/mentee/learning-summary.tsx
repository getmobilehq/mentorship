'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// Mock data for pie chart
const pieData = [
  { name: 'Completed', value: 12, color: 'hsl(var(--chart-1))' },
  { name: 'In Progress', value: 3, color: 'hsl(var(--chart-2))' },
  { name: 'Not Started', value: 5, color: 'hsl(var(--chart-3))' },
];

// Mock data for bar chart
const barData = [
  { name: 'Week 1', completed: 3, target: 3 },
  { name: 'Week 2', completed: 4, target: 3 },
  { name: 'Week 3', completed: 2, target: 3 },
  { name: 'Week 4', completed: 3, target: 3 },
];

export default function LearningSummary() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card rounded-lg p-4 border">
          <h3 className="text-sm font-medium mb-3">Learning Modules Progress</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-4 border">
          <h3 className="text-sm font-medium mb-3">Weekly Progress</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" fontSize={12} />
                <YAxis tickCount={4} fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" name="Completed" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" name="Target" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}