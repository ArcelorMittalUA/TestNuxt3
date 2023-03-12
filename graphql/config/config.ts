import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionResult from './fragmentTypes.json'
import { defineApolloClient } from '@nuxtjs/apollo'


const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionResult
  })
  
  export default defineApolloClient({
    cache: new InMemoryCache({ fragmentMatcher }),
  )}