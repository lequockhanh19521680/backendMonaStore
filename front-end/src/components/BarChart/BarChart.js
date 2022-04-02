import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Nhẫn',
            data: [20, 30, 50, 40, 60, 80, 100],
            backgroundColor: '#0e9f6e',
        },
        {
            label: 'Dây chuyền',
            data: [30, 20, 10, 70, 65, 85, 10],
            backgroundColor: '#0694a2',
        },
        {
            label: 'Bông tai',
            data: [10, 35, 55, 48, 48, 34, 64],
            backgroundColor: '#3f83f8',
        },
        {
            label: 'Lắc tay',
            data: [24, 12, 54, 75, 13, 57, 70],
            backgroundColor: '#ff5a1f',
        },
        {
            label: 'Đồng hồ',
            data: [23, 43, 23, 56, 86, 32, 100],
            backgroundColor: '#e2ba48',
        },
    ],
};

export default function BarChart() {
    return <Bar options={options} data={data} />;
}
