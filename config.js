const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "127.0.0.1",
        user: "root",
        password: "SQLAdmin",
        database: "node_example_applications",
    },
    listPerPage: 10,
};
module.exports = config;