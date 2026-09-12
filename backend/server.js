import api from './route/api.js'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'

const app = express();
const Port = 5000;
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/api', api)
app.get('/', (req, res) => {
    res.send("Hello")
})

connectDB()
app.listen(Port, () => {
    console.log("Server start at " + Port)
})
