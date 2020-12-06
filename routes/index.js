var express = require('express');
var router = express.Router();
var session = require('express-session')
var bodyParser = require('body-parser')
var con = require('./condb');
var express = require('express');
var router = express.Router();
var session = require('express-session')
var bodyParser = require('body-parser')
var con = require('./condb');

var app = express()

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

/* GET home page. */
app.get('/', function (req, res, next) {
   res.send({ status: false , data: 'Please log in before making the transaction.'
})   
  // res.render('index', { title: 'Express' });
});


app.post('/login', function (req, res, next) {
  var username =  req.body.user
  if (req.body.user && req.body.pass) {
      
        let sql = `select * from staff_test where username = ? and password = ?`     
        con.query(sql, [req.body.user, req.body.pass], function (err, result) {
          if (result.length > 0) {
             req.session.loggedin = true
             req.session.username = username
                res.send({
                    status: true,
                    data: req.session.username
                })   
            } else {
                res.send({
                    status: false,
                    data: 'not found username & password'
                })   
            }
            res.end(); 
        });
    }else {
        res.send({
            status: false,
            data: 'please complete usernsme and password'
        })  
        res.end(); 
        } 
});

module.exports = app;


// app.get('/', function (req, res) {
  // console.log('xxxxxxxxxxxxxx',__dirname )
    // res.sendFile(path.join(__dirname + '../New-Project/test-client/src/component/Main.js'));
// })


