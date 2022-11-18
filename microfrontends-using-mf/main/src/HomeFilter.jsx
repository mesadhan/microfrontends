import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import useProductStore from 'common/useProductStore';
import useCartStore from 'cart/useCartStore';
import Header from "common/Header";


export default function HomeFilter() {

    const {count, toggleCartPanel} = useCartStore();
    const { products, getFilteredList } = useProductStore();

    const [formData, setFormData] = useState({
        category: '',
        glass: '',
        ingredient: ''
    })

    const { categories, fetchCategories } = useProductStore()
    const { ingredients, fetchIngredients } = useProductStore()
    const { glasses, fetchGlasses } = useProductStore()
    const [query, setQuery] = useState('')

    useEffect(() => {
        (async () => {
            await fetchCategories()
            await fetchIngredients()
            await fetchGlasses()
        })()
    }, [])

    // const onSearchChange = (e) => {
    //     setQuery(e.target.value.trim())
    //     getFilteredList(filterMeta.filterName, filterMeta.filterValue, e.target.value.trim())
    // };

    const onInputChange = (e) => {

        // setFilterMeta({
        //     'filterName': e.target.name,
        //     'filterValue': e.target.value
        // })

        if (e.target.name === 'search') {
            setQuery(e.target.value.trim())
        } else {
            setQuery('')
        }

        setFormData({
            ...{
                category: '',
                glass: '',
                ingredient: ''
            },
            [e.target.name]: e.target.value
        })


        getFilteredList(e.target.name, e.target.value, query)
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log('searchQuery: ', formData)
        getFilteredList(formData)

    }

    return (


        <>

            <Header/>


            <div className="flex justify-center">

                <div className="px-4 py-2 m-2">
                    <label>Select Ingredients </label><br />
                    <select className="border h-10" id="grid-ingredient" onChange={onInputChange} name="ingredient" value={formData.ingredient}>
                        <option value=""></option>
                        {ingredients?.map((ingredient, index) => {
                            return <option key={index} value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>
                        })}
                    </select>
                </div>
                <div className="px-4 py-2 m-2">
                    <label>Select Category </label><br />
                    <select className="border h-10" id="grid-category" onChange={onInputChange} name="category" value={formData.category}>
                        <option value=""></option>
                        {categories?.map((category, index) => {
                            return <option key={index} value={category.strCategory}>{category.strCategory}</option>
                        })}

                    </select>
                </div>
                <div className="px-4 py-2 m-2">
                    <label>Select Glasses </label><br />
                    <select className="border h-10" id="grid-glass" onChange={onInputChange} name="glass" value={formData.glass}>
                        <option value=""></option>
                        {glasses?.map((glass, index) => {
                            return <option key={index} value={glass.strGlass}>{glass.strGlass}</option>
                        })}
                    </select>
                </div>

                <div className="px-4 py-2 m-2">
                    <label>Search </label><br />
                    <input onChange={onInputChange} className="p-2 h-10 border" id="grid-first-name" type="text" placeholder="" value={query} name="search" />
                </div>




            </div>

            <hr />


            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products - {products.length} </h2>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                        {products?.length ? products?.map((product, index) => (
                            <div key={product.idDrink} className="group">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img
                                        src={product.strDrinkThumb}
                                        alt={product.strDrink}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.strDrink}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.idDrink}</p>

                                <div>
                                    <button onClick={e => addToCartIfNotInCart(product)} className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        Add to bag {cart.length}
                                    </button>
                                    <Link to={{ pathname: `/${product.idDrink}`, state: product.idDrink }} className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Details</Link>
                                </div>

                            </div>)) : <p>No Data Found</p>
                        }


                    </div>
                </div>
            </div>




        </>


    )
}