
const express = require('express');
const app = express();
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql');

const port = process.env.PORT || 5000;





const schema = buildSchema(`
    type Query {
         hello : String
         welcome(name : String): String
    }
`)

const root = {

    hello: () => {
        return 'hello world'
    },
    welcome: (args) => {

        return `Hello ${args.name} welcome to graphql`

    }
}



app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
}))


app.listen(port, () => {
    console.log('server running on port 5000')
})