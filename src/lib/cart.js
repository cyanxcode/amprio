import { shopifyAPI } from "./shopify";

//create a new cart
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

//add item to cart
export async function AddToCart(cartID, variantID, quantity) {
  const query = `
    mutation {
      cartLinesAdd(cartId: "${cartID}", lines: [{merchandiseId: "${variantID}", quantity: ${quantity}}] ) {
        cart {
          id
        }
      }
    }
  `;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}

//import all items of a cart
export async function getCart(cartID) {
  const query = `{
    cart (id: ${cartID}) {
      id
      lines(first: 10) {
        edges {
          node {
            id
            merchandise{
              ... on ProductVariant {
                id
                product{
                  title
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                }
                title
              }
            }
            quantity
            cost{
              totalAmount{
                amount
              }
            }
          }
        }
      }
    }
  }
  `;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}

//update quantity of item

export async function updateCart(cartID, variantID, quantity) {
  const query = ` mutation {
    cartLinesUpdate(
    cartId: ${cartID}
    lines: {
      id: "${variantID}"
      quantity: ${quantity}
    }) {
      cart{
        cost {
          totalAmount{
            amount
          }
        }
      }
    }
  }
  `;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}

// Checkout
export async function Checkout(cartID) {
  const query = ` 
  query checkoutURL {
    cart(id: ${cartID}){
      checkoutUrltotalPriceV2 {
      amount
      currencyCode
    }
    subtotalPriceV2 {
      amount
      currencyCode
    }
    totalTaxV2 {
      amount
      currencyCode
    }
    }
  }
  `;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}

//Remove from cart

export async function removeFromCart(cartID, lineIds) {
  const query = ` mutation {
    cartLinesRemove(
    cartId: ${cartID},
    lineIds: ["${lineIds}"]) {
      cart{
        id
      }
    }
  }
  `;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}
