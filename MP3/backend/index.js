
import cors from "cors"
import mongoose from "mongoose"
import express from "express"
import Axios from "axios";
import bcrypt from 'bcryptjs';
import mongocsvconn from "./mongocsvconn.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'DSADb',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to  database'));

//Routes
app.use('/',mongocsvconn);
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({email: email},(err,user)=>{
        if(user){
            // res.send({message:"User already registered"})
            if(password===user.password){
                res.send({message:"Login successful",user:user})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message:"User not registered"})
            return;
        }
    })
})

app.post("/register", (req, res) => {
    // res.send("My API register")
    const { name, email, password } = req.body
    User.findOne({email: email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }
    })
    const user = new User({
        name,
        email,
        password
    })
   
    user.save(err => {
        if (err) {
            res.send(err)
        }
        else {
            res.send({ message: "Successfully Registered" })
        }
    })
})




app.post("/compile", (req, res) => {
	//getting the required data from the request
	let code = req.body.code;
	let language = req.body.language;
	let input = req.body.input;

	if (language === "python") {
		language="py"
	}

	let data = ({
		"code": code,
		"language": language,
		"input": input
	});
	let config = {
		method: 'post',
		url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};
	//calling the code compilation API
	Axios(config)
		.then((response)=>{
			res.send(response.data)
			console.log(response.data)
		}).catch((error)=>{
			console.log(error);
		});
})
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

userSchema.pre('save',async function (next) {
    try{
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(this.password , salt)
        this.password = hashpassword
        next()
      //  console.log(this.email, this.password)
    }catch(error){
            next(error)
    }
})

const User = new mongoose.model("User", userSchema)



app.listen(4000, () => {
    console.log("Be started at port 4000")
})
