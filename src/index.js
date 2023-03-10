const { GraphQLServer, PubSub } = require("graphql-yoga");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    pubsub,
  },
});

// here i changed the endpoint and playground url as well...
const options = {
  port: 3000,
  endpoint: '/graphql',
  playground: '/playground',
};

server.start(options, ({ port }) => {
  console.log(
    `Graphql Server started, listening on port ${port} for incoming requests.`
  );
});
