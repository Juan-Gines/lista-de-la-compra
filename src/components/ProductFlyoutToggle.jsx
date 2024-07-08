import { useStore } from '@nanostores/react';
import { isProductsOpen, productItems } from '../productStore.js';
import list from '../icons/list.svg';

const ProductFlyoutToggle = () => {
  const $isProductsOpen = useStore(isProductsOpen);
  const $products = useStore(productItems);
  
  const productsCount = Object.keys($products).length;
  return (    
    <button className='relative inline-flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center' onClick={() => isProductsOpen.set(!$isProductsOpen)}>
      <img src={list.src} className='text-slate-300 size-6' alt="Icono del botón lista de productos" />
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{productsCount}</div> 
    </button>    
  );
};

export default ProductFlyoutToggle;