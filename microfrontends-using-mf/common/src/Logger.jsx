import React, { useEffect } from "react";


import useViewingStatisticsStore from "./useViewingStatisticsStore";

export default function Logger({ children }) {

    const { userId, createUserIdentity, setUserPageStatistic } = useViewingStatisticsStore();

    useEffect(() => {
        (async () => {
            await setUserPageStatistic(window.location.href);
            await createUserIdentity();
        })()
    }, []);

    // console.log("Hello from React and Module Federation");

    return <>{children}</>
};