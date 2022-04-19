const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI)
        const conn = await mongoose.connect(`mongodb+srv://zalapenos:.=Kencana13579@testdb.lnvhm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {

        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB;