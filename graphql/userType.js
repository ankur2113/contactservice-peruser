const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = require('graphql');
const ContactType = require('./contactType');
const Contact = require('../model/contact');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        contacts: {
            type: new GraphQLList(ContactType),
            resolve(parent, args) {
                return Contact.find({ userId: parent.id });
            }
        }
    })
});

module.exports = UserType;
