module.exports = {
    PORT: process.env.PORT || 3000,
    DB: {
        "host":'localhost',
        user: 'postgres',
        password: 'secret',
        database: 'school_QA',
        dialect: 'postgres',
    }
}
