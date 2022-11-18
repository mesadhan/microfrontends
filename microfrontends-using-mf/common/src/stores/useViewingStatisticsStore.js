import create from "zustand";
import { persist } from 'zustand/middleware'

const useViewingStatisticsStore = create(persist(

    (set, get) => ({
        userId: null,
        visitedPagesStatistics: [],
        setUserPageStatistic: (url) => {
            const { visitedPagesStatistics } = get();
            const pageInfo = {
                url,
                counter: 1,
                created_at: new Date(),
                updated_at: new Date(),
            }
            const isPageVisited = visitedPagesStatistics.find(page => page.url === url);
            if (isPageVisited) {
                const newVisitedPagesStatistics = visitedPagesStatistics.map(page => {
                    if (page.url === url) {
                        return {
                            ...page,
                            counter: page.counter + 1,
                            updated_at: new Date(),
                        }
                    }
                    return page;
                })
                return set({ visitedPagesStatistics: newVisitedPagesStatistics });
            } else {
                return set({ visitedPagesStatistics: [...visitedPagesStatistics, pageInfo] });
            }
        },
        createUserIdentity: async () => {

            if(get().userId !=null) return;

            try{
                const apiUrl = 'https://api.ipify.org/?format=json'
                const res = await fetch(apiUrl);
                const data = await res.json();
    
                const userIDRaw = data?.ip.replace(/\./g, '');
    
                return set((state) => ({ userId: userIDRaw }));

            }catch(err){
                console.log(err);
            }
            return 'anonymous';
        }


    }), {
        name: 'user-viewing-statistic', // unique name
        //getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
      })
);

export default useViewingStatisticsStore;
