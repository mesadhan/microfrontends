import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import useViewingStatisticsStore from "../stores/useViewingStatisticsStore";


const Home = () => {

    const {userId, createUserIdentity} = useViewingStatisticsStore();

    return (<div className="p-5">
        
        <h1 className="text-3xl font-bold">Hello from React and Module Federation</h1>
        <h1 className="text-3xl font-bold">React Version 18</h1>
        <h1 className="text-3xl font-bold">User ID: {userId}</h1>


        <div className="w-full py-3">
            <div className="inline-block mr-2 mt-2">
            <Link to={'/statistics'} className="focus:outline-none text-orange-600 text-sm py-2.5 px-5 rounded-md border border-orange-600 hover:bg-yellow-50 items-center mt-100">View Statistics</Link>               
            </div>
        </div>
        
    </div>)
}

export default Home;