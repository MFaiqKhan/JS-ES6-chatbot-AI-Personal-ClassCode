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
    res.send('<h1> Hello Heroku -- Navigate to Home, about or contact pls </h1>');
})

app.listen(port,() => {
    console.log(`The port is running on ${port}`);
});


//Now in order to deploy this to cloud heroku we will create a procfile and add web: npm start to it
//all the other process will be done by heroku dashboard.
//This is my class code repo so I will not add this to heroku but make a seprate repo and upload it to
//heroku