var express = require('express');
var router = express.Router();
var con = require('./condb');

// 
  router.post('/shop', function (req, res, next) {
    let sql = `select * from shop_test where id = ?`
    con.query(sql, [req.body.shop_id] , function (err, result) {
        res.send({
            status: true,
            data: result
        })
    })
})

  router.post('/save', function (req, res, next) {
// 
    var saveshop = async function () { 
        try { 
            var Sql = `insert into shop_test (name) values (?)`
            await con.query(Sql, [req.body.name])
        } catch (e) {
            throw e
        }
    }
    
    return saveshop() 
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
// 
  router.post('/edit', function (req, res, next) {
// 
    var updateshop = async function () { 
        try { 
            var Sql = `update shop_test set name = ? where id = ?`
            await con.query(Sql, [req.body.name , req.body.id])
        } catch (e) {
            throw e
        }
    }
    
    return updateshop() 
        
        .then(function () {  
            con.commit(function () {
                res.send({
                    status: true,
                    data: 'update success'
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
// 
// 
  router.post('/delete', function (req, res, next) {
 
    var deleteshop = async function () { 
        try { 
            var Sql = `delete from shop_test where id = ?`
            await con.query(Sql, [req.body.id])
        } catch (e) {
            throw e
        }
    }
    
    return deleteshop() 
        
        .then(function () {  
            con.commit(function () {
                res.send({
                    status: true, 
                    data: 'delete success'
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
