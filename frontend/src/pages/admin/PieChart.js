import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { API_BASE_URL } from '../../config';

const COLORS = ['#00C49F', '#0088FE', '#dd6b20'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function PieChartComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchOrdersStatusSummary() {
            try {
                const rawResponse = await fetch(`${API_BASE_URL}/status-summary`);
                const response = await rawResponse.json();
                setData(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchOrdersStatusSummary();
    }, []);

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        formatter={(value, name) => [`${name}: ${value}`, '']} 
                        labelFormatter={(label) => `Status: ${label}`} 
                    />
                    <Legend
                        layout="vertical"
                        align="center"
                        verticalAlign="bottom"
                        iconType="circle"
                        wrapperStyle={{ paddingLeft: 20 }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}