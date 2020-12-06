var express = require('express');
var router = express.Router();
var session = require('express-session')
var bodyParser = require('body-parser')
var con = require('./condb');

router.post('/register', function (req, res, next) {

    var saveregister = async function () { 
        try { 
            var Sql = `insert into staff_test (firstName , lastName , username , password) values (? , ? , ? , ?)`
            await con.query(Sql, [req.body.data.rfirstName , req.body.data.rlastName , req.body.data.rusername , req.body.data.rpassword])
        } catch (e) {
            throw e
        }
    }
    
    return saveregister() 
        
        .then(function () {  
            con.commit(function () {
                res.send({
                    status: true, 
                    data: 'insert success'
                }); 
            });  
        })
        .catch(function (e) {
            con.rollback(function (e) {
                res.send({
                    status: false,
                    error: e
                });
            });
        })
})

module.exports = router;
