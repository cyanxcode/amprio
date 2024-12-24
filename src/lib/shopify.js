import axios from "axios";

//set default connection snippet
export const shopifyAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  headers: {
    "X-Shopify-Storefront-Access-Token":
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
});

//get products list by category
export async function getAllProducts(category) {
  const query = `{
          products(query: "product_type:${category} ", first:20) {
            edges{
              node {
                id
                title
                tags
                productType
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
                compareAtPriceRange {
                  minVariantPrice {
                    amount
                  }
                }
                featuredImage {
                  altText
                  url
                }
              }
            }
          }
        }`;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}

//get product detail for product page
export async function getProductByID(id) {
  const query = `
  query {                  
  product(id: "gid://shopify/Product/${id}") {
            id
            title
            productType
            description
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
            compareAtPriceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
          }
        }`;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}

//get produtcs of same category
export async function similarProducts(category) {
  const query = `{
          products(query: "product_type:${category} ", first:4) {
            edges{
              node {
                id
                title
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
                compareAtPriceRange {
                  minVariantPrice {
                    amount
                  }
                }
                featuredImage {
                  altText
                  url
                }
              }
            }
          }
        }`;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}

//fetch by tag

export async function FetchByTag(tag) {
  const query = `{
          products(query: "tags:[${tag}] ", first:4) {
            edges{
              node {
                id
                title
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
                compareAtPriceRange {
                  minVariantPrice {
                    amount
                  }
                }
                featuredImage {
                  altText
                  url
                }
              }
            }
          }
        }`;
  const response = await shopifyAPI.post("", { query });
  return response.data;
}
