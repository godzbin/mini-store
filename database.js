const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.resolve(__dirname, 'store.db')

const db = new sqlite3.Database(dbPath, (err) => {
	db.run(`create table product(
  id integer PRIMARY KEY autoincrement, 
  name VARCHAR(255), 
  price FLOAT, 
  image BLOB, 
  category TEXT, 
  createTime datetime default (datetime('now', 'localtime')),
  updateTime datetime default (datetime('now', 'localtime')),
  description TEXT);`, function () {
		// console.log('create table product')
		// db.run(`insert into product values
		// (null, "shan屏11111", 1223, '', '类别2', datetime('now', 'localtime'), datetime('now', 'localtime'), 'miaoshu1232131');`, () => {
		// db.all(`select * from product;`, function (err, res) {
		// 	if (!err)
		// 		console.log(JSON.stringify(res));
		// 	else
		// 		console.log(err);
		// })
		// })
		// db.run("insert into product values()")
	})
	if (err) {
		restore
		return console.error(err.message);
	}
	console.log('Connected to the in-memory SQlite database.');
});
console.log(db)

module.exports = { db };