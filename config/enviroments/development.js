module.exports = {
    PORT: process.env.PORT || 5000,
    DB: {
        "host":'localhost',
        user: 'postgres',
        password: 'secret',
        database: 'school_dev',
        dialect: 'postgres',
    }
}