import { gql } from '@apollo/client';

export const WRITE_REVIEW = gql`
  mutation WRITE_REVIEW($productId: Int!, $review: String!, $rating: Int!) {
    writeReview(input: { productId: $productId, review: $review, rating: $rating }) {
      review {
        id
        content
        rating
      }
    }
  }
`;
