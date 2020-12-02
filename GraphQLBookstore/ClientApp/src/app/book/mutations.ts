import gql from 'graphql-tag';

export const CREATE_BOOK = gql`
    mutation($input: BookInput!) {
        createAuthor(input: $input) {
            id
            name
            description
            price
            author
        }
    }
`;

export const UPDATE_BOOK = gql`
    mutation($id: ID!, $input: BookInput!) {
        updateAuthor(id: $id, input: $input) {
            id
            name
            description
            price
            author
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation($id: ID!) {
        deleteAuthor(id: $id) {
            id
        }
    }
`;