import React, { useEffect } from "react";
import {
    useLocation
  } from "react-router-dom";


import useViewingStatisticsStore from "../stores/useViewingStatisticsStore";

export default function StatisticsProvider({ children }) {
 
    let location = useLocation();

    const { userId, createUserIdentity, setUserPageStatistic } = useViewingStatisticsStore();

    useEffect(() => {
        (async () => {
            await setUserPageStatistic(window.location.href);
            await createUserIdentity();
        })()
    }, [location]);

    // console.log("Hello from React and Module Federation");

    return <>{children}</>
};