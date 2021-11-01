import express from "express";

const app = express();
const port = process.env.PORT || 3000 

app.get('/home', (req,res) => {
    res.send('Welcome to my server, Mr Faiq khan');
})
app.get('/about', (req,res) => {
    res.send('Somewhere in the world');
})
app.get('/Contact', (req,res) => {
    res.send('no contact');
})
app.get('/', (req,res) => {
    res.send('Navigate to Home page pls');
})

app.listen(3000,() => {
    console.log("The port is running");
});