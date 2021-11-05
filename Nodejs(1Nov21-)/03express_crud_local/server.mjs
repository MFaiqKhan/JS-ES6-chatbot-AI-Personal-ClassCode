//node class 3 (4-11-21)
import express from "express";
import morgan from "morgan";

// calling express()  which is the main function of the express module from express module and storing it in a variable
const app = express();

// means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
//environment variable is saved in environment which is typicalle secret path, 
//so only people who have access can see what is in the environment variable of certain type.
const port = process.env.PORT || 3000

let users = [];
//.use is a middleware, acts like a pipeline, and request enters from very first middleware(.use) and then downwards to other(.use)
app.use(express.json()) //If body is in json (In restful api body is in json), it will return in json 
app.use(morgan('short')) //every incoming request to be logged, short will log out some values which can be read in npm docs

//Middlewares are functions.
//Below is a function written by hand in a middleware, having 3 parameters, 
//first (req) is a object of request, A client when requesting a server for certain things, those things will available in request object(e.g, header, body etc)
// we have console logged out the body by req.body method, and it will give us body from request object, if there is a body present there otherwise it will log undefined.
// second (res) is response handler or a response object, we will get a response handler(if we threw the request), response will given to the person who requested it, 
//we haven't actually gave the reponse in this code.
//next() is called so request is forwarded to next middleware otherwise request will not go outside and will be left hanging
//second option is to stop the request by calling the response and the process
app.use((req, res, next) => {
    console.log('a request came', req.body);
    next()
})

//In this .get middlware, not every request will enter in it, request should be of get type in order to enter in this middleware
//second the address of  request should be of '/users' to enter in it
app.get('/users', (req,res) => {
    res.send(users)
})

//here address should be of "/user/:id"
//if he asks of '/user/:id(we will actually consider id as a number here), then we get id, so actually we are requesting if here of a user by parameters,
// req.params.id () Requesting the value 'id' using parameter(params))
//so in this code, it is checking in a certain users index does id exist ? if it exist it will give us a response(sending us user) if not then 'else' will executed
app.get('/user/:id', (req,res) => {
    if(users[req.params.id]) {
        res.send(users[req.params.id])
    } else {
        res.status(404).send('user not found')
    }
})

//.post should be used when we have to create a request on a server
//! = not, in this code, in if , there is that req.body.name or email or address is NOT present then it will give us error status of 400 and will send us a response of invalid data
//In else, if all three are present then, it will form a object of a user and in that it will push req of desired data defined
app.post('/user', (req,res) => {
    if (!req.body.name || !req.body.email || !req.body.address){
        res.status(400).send('invalid data');
    } else {
        users.push({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        })

        res.send('users created');
    }
})


//In order to modify a request on a server, .put should be used
// In this, main if is saying that does id exist ? then in all three nested if saying that if the user have send a name to modify then update it to that name and same applies to name and address of that id
//if not then else will executed, in user not found we have to send a res.status too because it's necessary.
app.put ('/user/:id', (req, res) => {
    if (users[req.params.id]) {
        if (req.body.name) {
            users[req.params.id].name = req.body.name
        }
        if (req.body.email) {
            users[req.params.id].email = req.body.email
        }
        if (req.body.address) {
            users[req.params.id].address = req.body.address
        }

        res.send(users[req.params.id])

    } else {
        res.status(404).send('user not found');
    }
})

//.delete should be used to delete a data from the server
//In delete it is saying that if the certain id user exist ? then delete it and replace it with empty object and send a response of user deleted, if it doesn't then user not found.
app.delete('/user/:id', (req,res) => {
    if (users[req.params.id]) {
        users[req.params.id] = {}
        res.send('user deleted')
    } else {
        res.status(404).send('user not found');
    }
})

app.get('/home', (req, res) => {
    res.send('here is your home')
})

app.get('/', (req, res) => {
    res.send('Hi this is a nice little hello server')
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

