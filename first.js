
const express = require('express')
const mongoose = require('mongoose');
const MdAuth = require("./mdAuth")
var cors = require('cors')
const uri = "mongodb+srv://manish:sirohi@cluster0.syij2.mongodb.net/freshmeal?retryWrites=true&w=majority";
mongoose.connect(uri)
  .then((result) => console.log("connected"))
  .catch((err) => console.log(err))
var path = require('path');
const app = express()
const port = 3000
var options = {
  root: path.join(__dirname)
};
app.use(express.static(path.join(__dirname, 'public')));
app.get('/add',(req,res) => {
})
app.get('/', (req, res) => {
  try {
    if(req.query.type=="S"){
      console.log("sin")
      const mdAuth = new MdAuth({
        userName: req.query.user,
        userEmail: req.query.email,
        userPass : req.query.password
      })
      mdAuth.save()
    }
  } catch(err) {
    console.log(err)
  }
  res.sendFile('sirohi.html',options)
})

app.get('/fetch', (req, res) => {
    console.log("login")
    MdAuth.findOne({userName: req.query.user, userPass: req.query.password}).then((result) => {
      console.log(result)
      res.json(result)
    }).catch((err) => {
      console.log(err)
    })
})
app.get('/login', (req, res) => {
  res.sendFile('login.html',options)
})
app.get('/signin', (req, res) => { 
  res.sendFile('singin.htm',options)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})