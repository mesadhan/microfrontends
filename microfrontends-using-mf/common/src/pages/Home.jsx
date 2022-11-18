import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import useViewingStatisticsStore from "../stores/useViewingStatisticsStore";


const Home = () => {

    const {userId, createUserIdentity} = useViewingStatisticsStore();

    return (<div >
        
        <h1 className="text-3xl font-bold">Hello from React and Module Federation</h1>
        <h1 className="text-3xl font-bold">React Version 18</h1>
        <h1 className="text-3xl font-bold">User ID: {userId}</h1>

        <Link to={'/statistics'}>Show more statistics</Link>
        
    </div>)
}

export default Home;