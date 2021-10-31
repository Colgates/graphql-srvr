const { gql } = require('apollo-server');

const typeDefs = gql`

    type User {
        id: Int!
        first_name: String!
        last_name: String!
        gender: String!
        email: String!
        password: String!
        ip_address: String!
        job_title: String!
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(first_name: String!, last_name: String!, gender: String!, email: String!, password: String!, ip_address: String!, job_title: String!): User!
    }
`;

exports.typeDefs = typeDefs;