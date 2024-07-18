import express from "express"
import cors from "cors"

const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.json({message:"hello from server"});
})

app.listen(5000, ()=>{
    console.log("connected to port: 5000")
})