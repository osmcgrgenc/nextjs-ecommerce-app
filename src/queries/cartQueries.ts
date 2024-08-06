import { gql } from '@apollo/client';

export const GET_CART = gql`
  query GET_CART {
    cart {
      contents {
        nodes {
          key
          product {
            node {
              id
              productId: databaseId
              name
              description
              type
              onSale
              slug
              averageRating
              reviewCount
              image {
                id
                sourceUrl
                srcSet
                altText
                title
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  srcSet
                  altText
                  title
                }
              }
            }
          }
          variation {
            node {
              id
              variationId: databaseId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice
              image {
                id
                sourceUrl
                srcSet
                altText
                title
              }
            }
            attributes {
              id
              name
              value
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
      }
      appliedCoupons {
        code
        discountAmount
        discountTax
      }
      subtotal
      subtotalTax
      shippingTax
      shippingTotal
      total
      totalTax
      feeTax
      feeTotal
      discountTax
      discountTotal
    }
  }
`;

export const UPDATE_CART_QUANTITY = gql`
  mutation UPDATE_CART_QUANTITY($key: String!, $quantity: Int!) {
    updateCartQuantity(input: { key: $key, quantity: $quantity }) {
      cart {
        contents {
          nodes {
            key
            quantity
            total
          }
        }
      }
    }
  }
`;

export const REMOVE_COUPON = gql`
  mutation REMOVE_COUPON($code: String!) {
    removeCoupon(input: { code: $code }) {
      cart {
        appliedCoupons {
          code
        }
      }
    }
  }
`;
