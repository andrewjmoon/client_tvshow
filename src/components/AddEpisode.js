import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { ADD_EPISODE, getEpisode } from '../queries/queries';
import { Link } from 'react-router-dom';

const initialState = {
  show: '',
  season: '',
  title: '',
  rating: ''
};

export default class AddEpisode extends React.Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = (event, addEpisode) => {
    event.preventDefault();
    addEpisode().then(({ data }) => {
      this.clearState();
    });
  };

  updateCache = (cache, { data: { addEpisode } }) => {
    const { getAllEpisodes } = cache.readQuery({ query: getEpisode });

    cache.writeQuery({
      query: getEpisode,
      data: {
        getAllEpisodes: getAllEpisodes.concat([addEpisode])
      }
    });
  };

  render() {
    const { show, season, title, rating } = this.state;
    return (
      <div className="Link">
        <Link className="Link" to="/">
          <p>Home</p>
        </Link>
        <Mutation
          mutation={ADD_EPISODE}
          variables={{ show, season, title, rating }}
          refetchQueries={() => {
            return [
              {
                query: getEpisode,
                variables: { show, season, title, rating }
              }
            ];
          }}
        >
          {(addEpisode, { data, loading, error }) => {
            return (
              <div>
                <form onSubmit={event => this.handleSubmit(event, addEpisode)}>
                  <input
                    type="text"
                    name="show"
                    onChange={this.handleChange}
                    value={show}
                    placeholder="show"
                  />
                  <br />
                  <input
                    type="text"
                    name="season"
                    onChange={this.handleChange}
                    value={season}
                    placeholder="season"
                  />
                  <br />
                  <input
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={title}
                    placeholder="title"
                  />
                  <br />
                  <input
                    type="text"
                    name="rating"
                    onChange={this.handleChange}
                    value={rating}
                    placeholder="rating"
                  />
                  <br />
                  <button type="submit">Submit</button>
                </form>
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}
