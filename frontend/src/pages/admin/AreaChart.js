import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { API_BASE_URL } from "../../config";

export default function AreaChartComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMonthlySales() {
            try {
                const rawResponse = await fetch(`${API_BASE_URL}/monthly-sales`);
                const response = await rawResponse.json();
                setData(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMonthlySales();
    }, []);

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 50,
                        left: 30,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="monthName" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total Sales (PKR)" stroke="#E65100" fill="#E65100" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
