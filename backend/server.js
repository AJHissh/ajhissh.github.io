const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const path = require('path')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/user-posts', require('./routes/user-posts'))
app.use('/api/users', require('./routes/userRoutes'))

   if (process.env.NODE_ENV == "production") {
    app.use(express.static("/app/build"));
    app.use(express.static("/app/src/components"));

    app.get("*", (req, res) => {
        res.sendFile("/ajhissh.github.io/build/index.html");
    })
}

// if (process.env.NODE_ENV == "production") {
//     app.use(express.static(path.join(__dirname, "build")));
//     app.use(express.static(path.join(__dirname, "src", "components")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "build", "index.html"));
//     });
// }



app.use(errorHandler)
   

app.listen(port, () => console.log(`Server start on port: ${port}`))
