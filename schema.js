const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
  } = require('graphql');
  const User = require('./model/user');
  const Contact = require('./model/contact');
  const UserType = require('./graphql/Usertype');
  const ContactType = require('./graphql/contactType');

  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({});
            }
        },
        contact: {
            type: ContactType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Contact.findById(args.id);
            }
        },
        contacts: {
            type: new GraphQLList(ContactType),
            args: { userId: { type: GraphQLID } },
            resolve(parent, args) {
                if (args.userId) {
                    return Contact.find({ userId: args.userId });
                } else {
                    return Contact.find({});
                }
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString }
            },
            resolve(parent, args) {
                let user = new User({
                    name: args.name,
                    email: args.email
                });
                return user.save();
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type: GraphQLID },
                name: { type: GraphQLString },
                email: { type: GraphQLString }
            },
            resolve(parent, args) {
                return User.findByIdAndUpdate(args.id, {
                    name: args.name,
                    email: args.email
                }, { new: true });  // Returns updated object
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return User.findByIdAndRemove(args.id);
            }
        },
        addContact: {
            type: ContactType,
            args: {
                userId: { type: GraphQLID },
                name: { type: GraphQLString },
                phone: { type: GraphQLString }
            },
            resolve(parent, args) {
                let contact = new Contact({
                    userId: args.userId,
                    name: args.name,
                    phone: args.phone
                });
                return contact.save();
            }
        },
        updateContact: {
            type: ContactType,
            args: {
                id: { type: GraphQLID },
                name: { type: GraphQLString },
                phone: { type: GraphQLString }
            },
            resolve(parent, args) {
                return Contact.findByIdAndUpdate(args.id, {
                    name: args.name,
                    phone: args.phone
                }, { new: true });
            }
        },
        deleteContact: {
            type: ContactType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Contact.findByIdAndRemove(args.id);
            }
        }
    }
});


  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
  });

  