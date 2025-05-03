import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { API_BASE_URL } from '../../config';

export default function BarChartComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchOrdersStatusSummary() {
            try {
                const rawResponse = await fetch(`${API_BASE_URL}/categories-count`);
                const response = await rawResponse.json();
                setData(response.filter(x => x.category !== 'Watches'));
            } catch (error) {
                console.error(error);
            }
        }
        fetchOrdersStatusSummary();
    }, []);

    return (
        <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#dd6b20" />
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
}
