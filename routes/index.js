var express = require('express');
var router = express.Router();

const { db } = require('../database.js');
/* GET home page. */
router.get('/getProductList', function (req, res, next) {
  db.all('SELECT * FROM product;', (err, info) => {
    // console.log(err, info)
    console.log('获取商品列表')
    res.json(info);

  })
});
router.get('/getProduct', function (req, res, next) {
  if (!req.query.id) {
    res.json('传入Id不正确')
    return
  }
  db.all(`SELECT * FROM product where product.id=${req.query.id};`, (err, info) => {
    console.log(err)
    res.json(info[0]);
  })
});

router.post('/updateProduct', function (req, res, next) {
  const { name, price, image, description = '', category, id } = req.body
  db.run(`UPDATE product
          SET name='${name}',price='${price}',image='${image}',category='${category}', description='${description}',updateTime=datetime('now', 'localtime')
          WHERE product.id=${id};`, (err, info) => {
    db.all(`SELECT * FROM product where product.id=${id};`, (err, info) => {
      console.log(err)
      res.json(info[0]);
    })
  })
});

router.post('/addProduct', function (req, res, next) {
  const { name, price, image, description = '', category } = req.body
  db.run(`INSERT INTO product (name, price, image, category, description, createTime, updateTime)
          VALUES('${name}','${price}','${image}','${category}', '${description}',datetime('now', 'localtime'), datetime('now', 'localtime'));`, (err, info) => {
    db.all(`select * from product order by id DESC limit 1;`, (err, info) => {
      console.log(err, info)
      res.json(info[0]);
    })
  })
});

router.delete('/deleteProduct', function (req, res, next) {
  db.run(`DELETE FROM product WHERE product.id=${req.query.id};`, (err, info) => {
    console.log(err, info)
    res.json(err);
  })
});
// db.close();
module.exports = router;
