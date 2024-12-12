import express from 'express';
const app = express();

const PORT = 80;
const HOST = '0.0.0.0'

app.get("/", (req, res) => {
    res.send("Welcome Home!");
})


app.listen(PORT, HOST, () => { console.log(`Server Running on PORT ${PORT}`) });