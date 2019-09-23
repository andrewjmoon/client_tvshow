/*
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import AddEpisode from './AddEpisode';
import EpisodeRating from './EpisodeRating';
import TvShow_Episodes from './TvShow_Episodes';
import About from './About';
import { AuthProvider } from '../Auth';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRouter';
import Menu from './Menu';

export default () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Menu />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/episoderating" component={EpisodeRating} />
          <PrivateRoute path="/addepisode" component={AddEpisode} />
          <PrivateRoute path="/tvshowepisodes" component={TvShow_Episodes} />
          <PrivateRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

*/