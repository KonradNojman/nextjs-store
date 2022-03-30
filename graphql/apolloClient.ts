import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl1bwcnw525r001yu3tw5h3fe/master",
  cache: new InMemoryCache(),
});
