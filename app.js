const express = require("express");
const app = express();
const ExpressError = require("./ExpressEerror");

// CREATING A CUSTOM ERROR HANDLING
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
};
app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

// app.use((req,res,next)=>{
//     //to use ?(STRING on server this is the syntax)
//     // let {query} = req.query;
//     // console.log(query);

//     console.log("Hi i am 1st middleware");
//     next();// we can also used return next(); so it will not print after next(); anything you define inside  console.log();

//     //note that if after next(); if we want to print then it works easily i have used it and check it it is working
//     // console.log("This is after next()");

//     // res.send("Middleware finished");

// });

// app.use((req,res,next)=>{
//     console.log("Hi i am 2nd middleware");
//     next();
// });

// app.get("/api", checkToken,(req,res)=>{
//     res.send("data");
// });

// CREATING MULTIPLE MIDDLEWARE
// const checkToken = (req,res,next)=> {
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED!")
// };

// app.get("/api",checkToken,(req,res)=>{
//     res.send("data")
// });

// ERROR HANDLING (EXPRESS DEFAULT means IT IS ALREADY COMES WITH EXPRESS)
app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin",(req,res)=>{
    throw new Error(403,"Access to admin is forbidden");
});

// ERROR HANDLING WITH MIDDLEWARE
app.use((err, req, res, next) => {
  let {status = 500 , message = "Some error Occured"} = err;
  res.status(status).send(message);
});

app.get("/", (req, res) => {
  res.send("Hi i am a root");
});

app.get("/random", (req, res) => {
  console.log("this is a random page");

  //Creating a utlity middleware  with Logger and many popular such as morgan
  //middleware only works before sending of response and it is always to be written in the starting of code
  // app.use((req,res,next)=>{
  //     req.time = new Date (Date.now()).toString();
  //     console.log(req.method,req.hostname,req.path,req.time);
  //     next();

  // });

  // 404 this is always to apply at the end  of the page
  // app.use((req,res)=>{
  //     res.status(404).send("Page not found");
  // });
});
app.listen(8080, () => {
  console.log("Server started at port 8080");
});
