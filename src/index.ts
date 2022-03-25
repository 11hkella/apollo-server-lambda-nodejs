import { ApolloServer } from 'apollo-server-lambda';
import { graphqlSchema } from './gql-schema';
import { graphqlContext } from './gql-context';

const { typeDefs, resolvers } = graphqlSchema();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: graphqlContext
});

export const handler = server.createHandler();