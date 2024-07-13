import { useStore } from "@nanostores/react";
import { category } from "../productStore";
import { useEffect, useState } from "react";

const ProductList = ({categoriesIds}) => {
  const $category = useStore(category);
  const [productList, setproductList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchProducts = async (category) => {
    await fetch(`http://localhost:3000/api/categories/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setproductList(data)
        setLoading(false)
      })
      .catch((err) => console.error(err));   
}
  useEffect(() => {
    if (categoriesIds.includes($category)) {
      setLoading(true);
      fetchProducts($category);
    }
    return () => {
      
    };
  }, [$category]);

  if (error)
    return <div className='text-red-600'>* {error}</div>;
  if(loading)
    return <p>Cargando productos...</p>

  return (
    <section>
      <h1>Productos</h1>
      {productList ? (
        productList.categories.map((category) => (
          <article className="p-5" key={category.id}>
            <h2>{category.name}</h2>            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
              {category.products.map((product) => (
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a className="" href="#">
                    <figure className="flex place-content-center">
                      <img className="p-2 rounded-t-lg" src={product.thumbnail} alt="product image" />
                    </figure>
                  </a>
                  <div className="px-5 pb-5">
                      <a href="#">
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.display_name}</h5>
                      </a>                      
                      <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {product.price_instructions.unit_price}
                          </span>
                          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añade a la lista</a>
                      </div>
                  </div>
              </div>
              ))}
            </div>
          </article>
        ))
      )
      :
      (
        <h2>Elige una categoria</h2>
      )
      }
    </section>
  )
  
}


export default ProductList;