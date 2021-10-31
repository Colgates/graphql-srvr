
const { ApolloServer, } = require('apollo-server')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { typeDefs } = require('./src/schema')
const { resolvers } = require('./src/resolvers')

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