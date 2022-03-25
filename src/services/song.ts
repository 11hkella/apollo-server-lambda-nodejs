export const songService = ({ event }) => ({
  userById: ({ id }) => ({
    id,
    name: 'John Doe'
  }),
  addUser: ({ name }) => ({
    id: Date.now(),
    name
  })
});