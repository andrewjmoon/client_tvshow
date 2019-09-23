import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';

export default () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Link">
      <h1>Home</h1>
      <Link className="Link" to="/about">
        <p>About</p>
      </Link>
      <Link className="Link" to="/addepisode">
        <p>Add Episode</p>
      </Link>
      <Link className="Link" to="/episoderating">
        <p>Episode Ratings</p>
      </Link>
      <Link className="Link" to="/tvshowepisodes">
        <p>Tv Episodes</p>
      </Link>
    </div>
  );
};
