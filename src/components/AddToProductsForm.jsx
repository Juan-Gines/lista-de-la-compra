import { addProductItem, isProductsOpen } from '../productStore.js';

export default function AddToCartForm({ item, children }) {  

  function addToProducts(e) {
    e.preventDefault();
    isProductsOpen.set(true);
    addProductItem(item);
  }

  return (
    <form onSubmit={addToProducts}>
      {children}
    </form>
  )
}