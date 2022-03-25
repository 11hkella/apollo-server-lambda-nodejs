const { gql } = require('apollo-server-lambda');

export const typeDefs = gql`
  type Song {
    song: String
    artist: String
    songReleaseDate: String
    playCount: Number;
    metricA: Number;
    metricB: Number;
    metricC: Number;
    metricD: Number;
    metricE: Number;
    metricF: Number;
    metricG: Number;
    metricH: Number;
    metricI: Number;
    metricJ: Number;
    metricK: Number;
    metricL: Number;
    metricM: Number;
    metricN: Number;
    metricO: Number;
    metricP: Number;
  }

  extend type Query {
    songs: Song[]
  }
`;

export const resolvers = {
  Query: {
    songs: (_, { }, { SongService }) => SongService.songs()
  },
};