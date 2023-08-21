const { GraphQLSchema } = require('graphql');
const RootQuery = require('../graphql/rootQuery');
const Mutation = require('../graphql/mutation');

const graphqlController = {
    schema: new GraphQLSchema({
        query: RootQuery,
        mutation: Mutation
    }),
    graphiql: true
};

module.exports = graphqlController;
