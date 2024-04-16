'use client'
import React, { useEffect, useState, useCallback } from 'react';
import DeleteButton from "./DeleteButton";
import Loading from '../components/loading';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Table() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


            // Make sure to adjust these values according to your caching requirements
        const axiosConfig = {
            // Set the caching strategy for this request
            cache: 'no-store', // Disable caching for this request
        };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/api/deleteAppoiment/${id}`);
            if (response.data.success) {
                toast.success("Deleted Successfully!", { style: { backgroundColor: "#fff", color: '#257378' } });
                setData(data.filter(item => item._id !== id));
            } else {
                toast.error(response.data.error);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    const getAppointments = useCallback(async () => {
        try {
            setIsLoading(true); // Set loading to true before fetching data
            const response = await axios.get('/api/getAppoiment');
            console.log("Request sent");
            setData(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false); // Ensure loading state is updated even in case of error
        }
    }, []);
    
    useEffect(() => {
        getAppointments();
    }, [getAppointments]);



    return (
        <div className="overflow-x-auto">
           {isLoading ? <Loading/> : ( <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select Test</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                    {data.map((item, index) => (
                        <tr key={item._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.name ?? "-"}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.email ?? "-"}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.phone ?? "-"}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.message ?? "No Message"}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.selectTestFor ? item.selectTestFor : "Null"}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button onClick={() => handleDelete(item._id)} className="text-blue-600 hover:text-blue-900 dark:text-white dark:hover:text-gray-300">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>)}
        </div>
    );
}