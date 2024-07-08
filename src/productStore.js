import { atom } from "nanostores";
import { persistentMap } from "@nanostores/persistent";

export const isProductsOpen = atom(false);

export const productItems = persistentMap('productList',{}, { 
  encode: JSON.stringify,
  decode: JSON.parse,
})

export const addProductItem = ({ id, name, price, onbasket = false, quantity = 1 }) => {
  const existingEntry = productItems.get()[id];
  if (existingEntry) {
    productItems.setKey(id, { 
      ...existingEntry, 
      quantity: existingEntry.quantity + quantity,
    });
  } else {
    productItems.setKey(id, { name, price, onbasket, quantity });
  }
}