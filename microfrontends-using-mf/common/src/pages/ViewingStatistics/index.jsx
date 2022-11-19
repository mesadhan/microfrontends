import React, { useEffect } from "react";


import useViewingStatisticsStore from "../../stores/useViewingStatisticsStore";

import './index.scss';


import { Link } from "react-router-dom";


const ViewingStatistics = () => {
    const { userId, visitedPagesStatistics } = useViewingStatisticsStore();

    const parseDate = (date) => {
        const parsedDate = new Date(date);
        return parsedDate.toLocaleDateString();
    }


    // return <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans py-6">
    return <div className="container-fluid">

            <Link className="" href="/" to={'/'}>Back Home</Link>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="">Page</th>
                        <th className="">Visits</th>
                        <th className="">First visited</th>
                        <th className="">Last visited</th>
                    </tr>
                </thead>
                <tbody className="">

                    {visitedPagesStatistics.map((page, index) => (

                        <tr key={index} className="">
                            <td className=""><span className="">{page.url} </span></td>
                            <td className=""><span className="">{page.counter} </span></td>
                            <td className=""><span className="">{parseDate(page.created_at)} </span></td>
                            <td className=""><span className="">{parseDate(page.updated_at)} </span></td>
                        </tr>

                    ))}
                </tbody>
            </table>



    </div>
};

export default ViewingStatistics;