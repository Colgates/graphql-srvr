const { users } = require('./users');

const resolvers = {
    Query: {
        users: () => users
    },

    Mutation: {
        addUser: (parent, args) => {
            users.push({
                id: users.length + 1,
                first_name: args.first_name,
                last_name: args.last_name,
                gender: args.gender,
                email: args.email,
                password: args.password,
                ip_address: args.ip_address,
                job_title: args.job_title
            })
            return users[users.length - 1]
        }
    }
};

exports.resolvers = resolvers; 