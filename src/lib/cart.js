import { shopifyAPI } from "./shopify";

export async function createCart() {
  const query = `
    mutation{
      cartCreate {
        cart{
         id
        }
      }
    }
  `;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}

export async function AddToCart(cartID, variantID, quantity) {
  const query = `
    mutation {
      cartAdd(input: { lineItems: [{variantId: ${variantID}, quantity: ${quantity}}], id: ${cartID}}) {
        cart {
          id
        }
      }
    }
  `;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}
