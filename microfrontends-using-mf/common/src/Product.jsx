
import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "cart/useCartStore";
import CartSidePanel from "cart/CartSidePanel";
// import useProductStore from "./stores/useProductStore";

const products = [
    {
        strDrink: "3-Mile Long Island Iced Tea",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
        idDrink: "15300"
    },
    {
        strDrink: "69 Special",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
        idDrink: "13940"
    },
    {
        strDrink: "A1",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
        idDrink: "17222"
    },
    {
        strDrink: "Abbey Cocktail",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg",
        idDrink: "17834"
    },
    {
        strDrink: "Abbey Martini",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/2mcozt1504817403.jpg",
        idDrink: "17223"
    },
    {
        strDrink: "Ace",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
        idDrink: "17225"
    },
    {
        strDrink: "Adam & Eve",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vfeumw1504819077.jpg",
        idDrink: "17226"
    },
    {
        strDrink: "Addison",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg",
        idDrink: "17228"
    },
]


export default function Products() {


    const {cart, addToCartIfNotInCart} = useCartStore();
    // const {products} = useProductStore();

    return (
        <div className="bg-white">
    
            <CartSidePanel/>
            
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products - {products.length} </h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    {products.length ? products?.map((product, index) => (
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
                            <button onClick={e => addToCartIfNotInCart(product) } className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Add to bag {cart.length}
                            </button>
                            <Link to={{ pathname: `/${product.idDrink}`, state: product.idDrink }} className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Details</Link>
                        </div>

                        </div>)) : <p>No Data Found</p>
                    }


                </div>
            </div>
        </div>
    )
}