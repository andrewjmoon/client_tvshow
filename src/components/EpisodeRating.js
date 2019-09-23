import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import { getEpisode, Delete_Episode } from '../queries/queries';
import { Link } from 'react-router-dom';

const handleDelete = deleteEpisode => {
  const confirmDelete = window.confirm(
    'Are you sure you want to delete this recipe?'
  );
  if (confirmDelete) {
    deleteEpisode().then(({ data }) => {
      console.log(data);
    });
  }
};

const EpisodeRating = () => (
  <div className="Link">
    <Link className="Link" to="/">
      <p>Home</p>
    </Link>
    <Query query={getEpisode}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.episodes.map(({ id, show, season, title, rating }) => (
          <div key={id}>
            <p>
              {show}-Season: {season}, Episode: {title}, Rating: {rating}
            </p>
            <Mutation
              mutation={Delete_Episode}
              variables={{ id }}
              refetchQueries={() => [{ query: getEpisode }]}
            >
              {deleteEpisode => (
                <button onClick={() => handleDelete(deleteEpisode)}>
                  Remove
                </button>
              )}
            </Mutation>
          </div>
        ));
      }}
    </Query>
  </div>
);
export default EpisodeRating;
