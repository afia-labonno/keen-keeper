'use client'
import { TimelineContext } from '@/context/TimelineContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const StatsPage = () => {
    const { logs } = useContext(TimelineContext);

    if (!logs || logs.length === 0) {
        return (
            <div className='max-w-5xl mx-auto p-20 card shadow-md'>
                <p className='text-center text-3xl text-gray-500'>
                    No data available for chart</p>
            </div>
        );
    };

    const counts = {
        call: 0,
        text: 0,
        video: 0,
    };

    logs.forEach((log) => {
        if (counts[log.type] !== null) {
            counts[log.type]++;
        }
    })

    const chartData = [
        { name: "Call", value: counts.call, fill: '#0018F9' },
        { name: "Text", value: counts.text, fill: '#009000' },
        { name: "Video", value: counts.video, fill: '#C21E56' },
    ]
    return (
        <div className='container mx-auto py-10 px-20 lg:px-[120px] shadow-lg border border-base-200 my-6'>

            <h2 className='text-4xl text-green-900 font-bold text-center my-8'>
                Friendship Analytics
            </h2>

            <div className='card max-w-4xl mx-auto rounded-md shadow-lg bg-gray-100 h-[400px] flex justify-center items-center mb-6'>

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={120}
                            label
                        />
                        <Tooltip />
                        <Legend />
                    </PieChart>

                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default StatsPage;