const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = require('graphql');

const ContactType = new GraphQLObjectType({
    name: 'Contact',
    fields: () => ({
        id: { type: GraphQLID },
        userId: { type: GraphQLID },
        name: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

module.exports = ContactType;
