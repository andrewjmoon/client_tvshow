import gql from 'graphql-tag';

const getEpisode = gql`
  {
    episodes {
      id
      show
      season
      title
      rating
    }
  }
`;

const ADD_EPISODE = gql`
  mutation(
    $show: String!
    $season: String!
    $title: String!
    $rating: String!
  ) {
    addEpisode(show: $show, season: $season, title: $title, rating: $rating) {
      show
      season
      title
      rating
    }
  }
`;
const Delete_Episode = gql`
  mutation($id: ID!) {
    deleteEpisode(id: $id) {
      id
    }
  }
`;
export { ADD_EPISODE, getEpisode, Delete_Episode };
