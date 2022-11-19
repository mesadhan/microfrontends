import create from "zustand";
import {devtools, persist} from 'zustand/middleware'

const BASE_API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const useProductStore = create(
    persist((set, get) => ({

      products: [],
      categories: [],
      ingredients: [],
      glasses: [],
      productDetails: [],

      productDetailById: async (id) => {
        const apiUrl = `${BASE_API_URL}/lookup.php?i=${id}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        return set((state) => ({productDetails: data?.drinks}));
      },
      fetchCategories: async () => {
        if(get().categories.length > 0) return;
        const apiUrl = `${BASE_API_URL}/list.php?c=list`
        const res = await fetch(apiUrl);
        const data = await res.json();
        set((state) => ({categories: data?.drinks}));
      },
      fetchIngredients: async () => {
        if(get().ingredients.length > 0) return;
        const apiUrl = `${BASE_API_URL}/list.php?i=list`
        const res = await fetch(apiUrl);
        const data = await res.json();
        set((state) => ({ingredients: data?.drinks}));
      },
      fetchGlasses: async () => {
        if(get().glasses.length > 0) return;
        const apiUrl = `${BASE_API_URL}/list.php?g=list`
        const res = await fetch(apiUrl);
        const data = await res.json();
        set((state) => ({glasses: data?.drinks}));
      },

      getFilteredList: async (filterName, filterValue, query) => {

        console.log('message', {filterName, filterValue, query});

        let apiUrl = ''
        let productsTemp = []

        const config = {
          'category': 'c',
          'ingredient': 'i',
          'glass': 'g'
        }

        if (filterName && !query) {
          apiUrl = BASE_API_URL+`/filter.php?${config[filterName]}=${filterValue}`;
        } else if (query) {
          apiUrl = BASE_API_URL+`/search.php?s=${query}`;
        }

        try {
          const res = await fetch(apiUrl);
          if (res) {
            const data = await res.json();
            productsTemp = [...new Set(productsTemp.concat(...data?.drinks))];
          }
        } catch (error) {
          console.log('error', error.message);
        }

        return set((state) => ({products: productsTemp}));

      },

    }), {
      name: 'product-store', // unique name
      getStorage: () => sessionStorage,
    })
);

export default useProductStore;