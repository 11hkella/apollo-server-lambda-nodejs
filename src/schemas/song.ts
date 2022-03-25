const { gql } = require('apollo-server-lambda');

export const typeDefs = gql`
  type Song {
    song: String
    artist: String
    songReleaseDate: String
    playCount: Int
    metricA: Int
    metricB: Int
    metricC: Int
    metricD: Int
    metricE: Int
    metricF: Int
    metricG: Int
    metricH: Int
    metricI: Int
    metricJ: Int
    metricK: Int
    metricL: Int
    metricM: Int
    metricN: Int
    metricO: Int
    metricP: Int
  }

  extend type Query {
    songs: [Song]
  }
`;

export const resolvers = {
  Query: {
    songs: (_, { }, { SongService }) => SongService.songs()
  },
};