const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT=3000 } = process.env;

mongoose.connect(PORT).then(() => {
    app.listen(3000);
    console.log("Database connection successful");
}).catch(error => {
    console.log(error.message);
    process.exit(1);
});