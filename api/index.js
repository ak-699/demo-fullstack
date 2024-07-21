import express from "express"
import cors from "cors"

const app = express();

app.use(cors())

app.get("/api/", (req, res) => {
    res.json({message:"hello from server"});
})

app.get("/api/test", (req, res) => {
    res.json({message: "this is a response from server"});
})

app.listen(5000, "0.0.0.0",()=>{
    console.log("connected to port: 5000")
})