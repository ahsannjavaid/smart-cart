import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

const Orders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            const token = JSON.parse(localStorage.getItem('myuser'))?.token;

            if (!token) {
                navigate('/');
                return;
            }

            let a = await fetch(`${API_BASE_URL}/myorders`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            let res = await a.json();
            setOrders(res.orders);
        };

        fetchOrders();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container  mx-auto min-h-screen">
            <h1 className="font-semibold text-2xl text-center p-8">My Orders</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table
                                className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                <thead
                                    className="border-b border-neutral-200 text-black font-medium ">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Order Id</th>
                                        <th scope="col" className="px-6 py-4">Email</th>
                                        <th scope="col" className="px-6 py-4">Amount</th>
                                        <th scope="col" className="px-6 py-4">Details</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {orders.map((item) => {
                                        return <tr key={item._id}
                                            className="border-b border-neutral-200 text-black transition duration-300 ease-in-out hover:bg-neutral-100  dark:hover:bg-neutral-400">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{item.orderId}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.amount}</td>
                                            <td className="whitespace-nowrap px-6 py-4"><Link to={'/order/?id=' + item._id}> Details </Link></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Orders;
