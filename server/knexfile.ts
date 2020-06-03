import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host: 'db',
        port: 5432,
        user: 'postgres',
        password: 'password',
        database: 'postgres',
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};