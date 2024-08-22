import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

const app=express();    
const port=3000;
app.use(express.static("Public"));

app.get("/",(req,res) => {
    res.render("Signin.ejs" );
});

app.use(bodyParser.urlencoded({ extended: true }));     //define bodyparser

const admin ={                  //defining admin credentials
    username:"admin",
    password: "123456"
}

app.post("/signin", (req,res)=>{
    
    try{
        if(req.body.username == admin.username && req.body.password == admin.password){
        console.log("its here")
        res.redirect("/admin")
    }
        else res.redirect("/user")
    
    
    } catch(error){
        console.log(error)
        res.render("signin.ejs")
    }
})

app.use("/admin", adminRoutes)          //Defining admin and user middleware for redirection
app.use("/user", userRoutes)            //All the rest of the admin and user related command will be directed from there.
 

app.listen(port, () => {
    console.log(`The server is running on ${port}`)
});