import create from "zustand";
import { devtools } from 'zustand/middleware'



const useProductStore = create((set) => ({
    
    products: [],
    categories: [],
    ingredients: [],
    glasses: [],
    productDetails: [],
    
    productDetailById: async (id) => {
      const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const res = await fetch(apiUrl);
      const data = await res.json();

      console.log('asdfsafsafasfsda', data?.drinks);

      return set((state) => ({ productDetails: data?.drinks }));
    },
    fetchCategories: async () => {
      const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const res = await fetch(apiUrl);
      const data = await res.json();
      set((state) => ({ categories: data?.drinks }));
    },
    fetchIngredients: async () => {
      const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
      const res = await fetch(apiUrl);
      const data = await res.json();
      set((state) => ({ ingredients: data?.drinks }));
    },
    fetchGlasses: async () => {
      const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'
      const res = await fetch(apiUrl);
      const data = await res.json();
      set((state) => ({ glasses: data?.drinks }));
    },

    getFilteredList: async(filterName, filterValue, query) => {

      console.log('filterName', filterName, 'filterValue', filterValue, 'query', query);
       
      let apiUrl = ''
      let productsTemp = []

      const config = {
        'category': 'c',
        'ingredient': 'i',
        'glass': 'g'
      }

      if(filterName && !query) {
        apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${config[filterName]}=${filterValue}`;
      }
      else if(query) {
        apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
      }
    

      try {
          const res = await fetch(apiUrl);
          if(res){
            const data = await res.json();
            productsTemp = [...new Set(productsTemp.concat(...data?.drinks))];  
          }
      }catch (error) {
        console.log('error', error.message);
      }

      return set((state) => ({ products: productsTemp }));
      
    }
    
}));

export default useProductStore;