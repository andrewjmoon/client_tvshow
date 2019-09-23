import React from 'react';
import './App.css';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Routes from './components/Routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuth0 } from './react-auth0-wrapper';
import Menu from './components/Menu';
import PrivateRoute from './components/PrivateRouter';
import {
  Home,
  About,
  EpisodeRating,
  AddEpisode,
  TvShow_Episodes
} from './components';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.REACT_APP_URI
});
const client = new ApolloClient({
  cache,
  link
});

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Menu />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path="/episoderating" component={EpisodeRating} />
            <PrivateRoute path="/addepisode" component={AddEpisode} />
            <PrivateRoute path="/tvshowepisodes" component={TvShow_Episodes} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
