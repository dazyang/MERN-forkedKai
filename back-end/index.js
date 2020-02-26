// import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
const { GraphQLServer } = require("graphql-yoga")
const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true })

// Creating a schema on MongDb
const Todo = mongoose.model("Todo", {
  // mongoDB auto-generates ID
  text: String,
  complete: Boolean
})

//GraphQL Schema
// hello takes one argument 'name', String is the dataType, and return String Type
const typeDefs = `
  type Query {
    hello(name: String): String!
    todos:[Todo]
  }
  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
  }
  type userProfiles {
    id: ID!
    username: String!
    score: Int!
    recipes: String!
  }
  type Mutation {
    createTodo(text: String!): Todo
    updateTodo(id: ID!, text: String!, complete: Boolean!): Boolean
    removeTodo(id: ID!): Boolean
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    todos: () => Todo.find()
  },
  Mutation: {
    // resolver functions
    createTodo: async (_, { text }) => {
      // creating an instance 
      const todo = new Todo({text, complete: false});
      // .save() returns a promise
      await todo.save()
      // and then returning it
      return todo 
    },
    updateTodo: async (_, {id, text, complete}) => {
      await Todo.findByIdAndUpdate(id, {text}, {complete})
      return true
    },
    removeTodo: async (_, { id }) => {
      await Todo.findByIdAndRemove(id)
      return true
    }
  }
}

const server = new GraphQLServer({typeDefs, resolvers})
// once connected to the MongoDB, it will start graphQL server
mongoose.connection.once("open", function() {
  server.start(() => console.log('Server is running on localhost:4000'))
})