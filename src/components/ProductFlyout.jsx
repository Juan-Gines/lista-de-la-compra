import { useStore } from '@nanostores/react';
import { isProductsOpen, productItems } from '../productStore.js';

const ProductFlyout = () => {
  const $isProductsOpen = useStore(isProductsOpen);
  const $productItems = useStore(productItems);  

  return $isProductsOpen ? (
    <aside className='absolute right-0 top-0 bg-slate-200'>
      {Object.keys($productItems).length ? (
        <ul>
          {Object.entries($productItems).map(([key, productItem]) => (
            <li
              key={key}
              >              
              <h3>{productItem.name}</h3>
              <p>Precio: {productItem.price}</p>
              <p>Subtotal: {productItem.price * productItem.quantity}</p>
              <p>En la cesta</p>
              <p>Cantidad: {productItem.quantity}</p>
            </li>
          ))}
        </ul>
      ) : <p>¡Tu lista está vacía!</p>}
    </aside>
  ) : null;
}

export default ProductFlyout;