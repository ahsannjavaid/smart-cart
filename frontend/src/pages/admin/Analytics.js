import React from 'react'
import { Link } from 'react-router-dom'
import AreaChart from './AreaChart'
import PieChart from './PieChart'
import BarChart from './BarChart'

function Analytics() {
    return (
        <div className='flex flex-col'>
            <div className="logo mt-10 mb-10 flex justify-center">
                <Link to={'/admin/admindashboard'}>
                    <img src="/written.png" width={200} height={40} alt="Logo" />
                </Link>
            </div>
            <Link to={'/admin/admindashboard'} className='text-white bg-orange-500 border-0 py-2 px-4 focus:outline-none hover:bg-orange-600 rounded text-sm md:text-lg text-center mb-10  mx-auto'>Return to Dashboard</Link>
            <div className='px-20'>
                <div className="w-full bg-white rounded-xl shadow-md p-6 mb-12">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Monthly Sales Overview</h2>

                    <AreaChart />

                </div>
                <div className="w-full bg-white rounded-xl shadow-md p-6 mb-12">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Order Status Distribution</h2>

                    <PieChart />

                </div>
                <div className="w-full bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Products by Category</h2>

                    <BarChart />

                </div>
            </div>
        </div>
    )
}

export default Analytics