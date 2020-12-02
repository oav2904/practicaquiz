import gql from 'graphql-tag';

export const BOOKS_QUERY = gql`
    query($name: String) {
        books(orderBy: { createdAt: asc }) {
            id
            name
            description
            price
            author
        }
    }
`;