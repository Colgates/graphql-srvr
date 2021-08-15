
const { ApolloServer, gql } = require('apollo-server')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { users } = require('./src/users')

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
`

const resolvers = {
    Query: {
        users: () => users
    }
}

const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    introspection: true, 
    playground: true, 
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });