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
app.use(express.json());
