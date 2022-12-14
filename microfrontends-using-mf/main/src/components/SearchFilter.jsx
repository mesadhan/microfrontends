import React, {useEffect, useState} from "react";

import useProductStore from 'common/useProductStore';
import useCartStore from 'common/useCartStore';

export default function SearchFilter() {

  const {
    cart,
    toggleCartPanel,
    addToCartIfNotInCart,
    setCartPanelVisibility
  } = useCartStore();

  const {getFilteredList} = useProductStore();

  const [formData, setFormData] = useState({
    category: '',
    glass: '',
    ingredient: ''
  })

  const {categories, fetchCategories} = useProductStore()
  const {ingredients, fetchIngredients} = useProductStore()
  const {glasses, fetchGlasses} = useProductStore()
  const [query, setQuery] = useState('')

  useEffect(() => {
    (async () => {
      await fetchCategories()
      await fetchIngredients()
      await fetchGlasses()

      getFilteredList('category', 'Cocktail', '');
      setFormData({
        category: 'Cocktail',
        glass: '',
        ingredient: ''
      })
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
    setCartPanelVisibility(false)

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
      <div className="container" style={{'marginTop': '40px'}}>
          <div className="row">
            <div className="col">
              <label>Select Category </label><br/>
              <select className="form-control" id="grid-category"
                      onChange={onInputChange} name="category"
                      value={formData.category}>
                <option value=""></option>
                {categories?.map((category, index) => {
                  return <option key={index}
                                 value={category.strCategory}>{category.strCategory}</option>
                })}

              </select>
            </div>
            <div className="col">
              <label>Select Ingredients </label><br/>
              <select className="form-control" id="grid-ingredient"
                      onChange={onInputChange} name="ingredient"
                      value={formData.ingredient}>
                <option value=""></option>
                {ingredients?.map((ingredient, index) => {
                  return <option key={index}
                                 value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>
                })}
              </select>
            </div>
            
            <div className="col">
              <label>Select Glass </label><br/>
              <select className="form-control" id="grid-glass"
                      onChange={onInputChange} name="glass"
                      value={formData.glass}>
                <option value=""></option>
                {glasses?.map((glass, index) => {
                  return <option key={index}
                                 value={glass.strGlass}>{glass.strGlass}</option>
                })}
              </select>
            </div>
            <div className="col">
              <label>Search </label><br/>
              <input onChange={onInputChange} className="form-control"
                     id="grid-first-name" type="text" placeholder=""
                     value={query} name="search"/>
            </div>

          </div>
        </div>
  )
}