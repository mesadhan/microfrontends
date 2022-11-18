import React, { useEffect } from "react";


import useViewingStatisticsStore from "../stores/useViewingStatisticsStore";

import '../index.scss';
import { Link } from "react-router-dom";


const ViewingStatistics = () => {
    const { userId, visitedPagesStatistics } = useViewingStatisticsStore();

    const parseDate = (date) => {
        const parsedDate = new Date(date);
        return parsedDate.toLocaleDateString();
    }

    // return <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans py-6">
    return <div class="min-w-screen min-h-screen flex justify-center bg-gray-100 font-sans py-6">
        <div className="container">
        
            <div class="w-full py-3">
                <div class="inline-block mr-2 mt-2">
                <Link className="focus:outline-none text-yellow-600 text-sm py-2.5 px-5 rounded-md border border-yellow-600 hover:bg-yellow-50 items-center mt-100" href="/" to={'/'}>Back Home</Link>               
                </div>
            </div>
        
            <table className="min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Page</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Visits</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">First visited</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Last visited</th>
                </tr>
            </thead>
            <tbody className="block md:table-row-group">
                
                {visitedPagesStatistics.map((page, index) => (

                    <tr key={index} className="border border-grey-500 md:border-none block md:table-row">
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 font-bold">{page.url} </span></td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 font-bold">{page.counter} </span></td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 font-bold">{parseDate(page.created_at)} </span></td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 font-bold">{parseDate(page.updated_at)} </span></td>
                    </tr>

                ))}
            </tbody>
	</table>

  
    
        </div>
    </div>
};

export default ViewingStatistics;