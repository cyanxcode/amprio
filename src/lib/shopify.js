import axios from "axios";

export const shopifyAPI = axios.create({
  baseURL: process.env.SHOPIFY_STORE_DOMAIN,
  headers: {
    "X-Shopify-Storefront-Access-Token":
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
});

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
export async function getProductByID(id) {
  const query = `
  query {                  
  product(id: "gid://shopify/Product/${id}") {
            id
            title
            productType
            description
            variants(first: 4) {
              edges {
                node {
                  id
                  title
                  
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
