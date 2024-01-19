exports.config = {
    port: process.env.PORT || '5000',
    database: process.env.DATABASE || 'mongodb://localhost:27017/test_wikicat'
}