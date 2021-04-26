const express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
<<<<<<< HEAD
var ObjectID = require('mongodb').ObjectID;
=======
>>>>>>> fe74960382a2a7d5bb60009cf4b539e865202ec9

const app = express();
const PORT = 3000;
var url = 'mongodb://localhost:27017';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/registeration', (req, res) => {
	var name = req.body.name.trim();
	var email = req.body.email.trim();
	var pass = req.body.pass.trim();
	var age = req.body.age.trim();
	var phone = req.body.phone.trim();
	var data = { result: 'default' };
	res.setHeader('Access-Control-Allow-Origin', '*');
	if (name == '' || email == '' || pass == '' || age == '' || phone == '') {
		res.statusCode = 400;
		data = { result: 'empty values' };
		res.send(data);
	} else {
		MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
			if (err) {
				res.statusCode = 500;
				data = { result: 'connection failled: Server Error' };
				res.send(data);
			} else {
				var dbo = db.db('Ecommerce');
				var newUser = {
					name: name,
					email: email,
					age: age,
					phoneNumber: phone,
					password: pass,
				};
				dbo.collection('User').insertOne(newUser, function (err, result) {
					if (err) {
						res.statusCode = 400;
						data = { result: 'Registeration failed please try again' };
						res.send(data);
					} else {
						res.statusCode = 200;
						data = { result: 'Registeration Successfull' };
						res.send(data);
					}
				});
			}
		});
	}
});

<<<<<<< HEAD
app.post('/userLogin', (req, res) => {
	var email = req.body.email.trim();
	var pass = req.body.pass.trim();
	var data = { result: 'default' };
	res.setHeader('Access-Control-Allow-Origin', '*');
	if (email == '' || pass == '') {
		res.statusCode = 400;
		data = { result: 'empty values' };
		res.send(data);
	} else {
		MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
			if (err) {
				res.statusCode = 500;
				data = { result: 'connection failled: Server Error' };
				res.send(data);
			} else {
				var dbo = db.db('Ecommerce');
				var newUser = {
					email: email,
					password: pass,
				};
				dbo.collection('User').findOne(newUser, function (err, result) {
					if (err) {
						res.statusCode = 400;
						data = { result: 'Login failed please try again' };
						res.send(data);
					} else {
						if (!result) {
							res.statusCode = 404;
							data = {
								result:
									'incorrect email or password or either you are not registered please register first',
							};
							res.send(data);
						} else {
							console.log(result);
							res.statusCode = 200;
							data = { result: result };
							res.send(data);
						}
					}
				});
			}
		});
	}
});

app.post('/editData', function (req, res) {
	var id = new ObjectID(req.body.id);
	var name = req.body.name.trim();
	var email = req.body.email.trim();
	var pass = req.body.pass.trim();
	var age = req.body.age.trim();
	var phone = req.body.phone.trim();
	var data = { result: 'default' };
	console.log(id);
	res.setHeader('Access-Control-Allow-Origin', '*');
	if (name == '' || email == '' || pass == '' || age == '' || phone == '') {
		res.statusCode = 400;
		data = { result: 'empty values' };
		res.send(data);
	} else {
		MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
			if (err) {
				res.statusCode = 500;
				data = { result: 'connection failled: Server Error' };
				res.send(data);
			} else {
				var dbo = db.db('Ecommerce');
				var updateUser = {
					email: email,
					name: name,
					age: age,
					phoneNumber: phone,
					password: pass,
				};
				dbo
					.collection('User')
					.updateOne({ _id: id }, { $set: updateUser }, { new: true }, function (err, result) {
						if (err) {
							res.statusCode = 400;
							data = { result: 'Registeration failed please try again' };
							console.log(result);
							res.send(data);
						} else {
							res.statusCode = 200;
							data = { result: 'Data Updated Successfull', updated: updateUser };
							console.log(result);
							res.send(data);
						}
					});
			}
		});
	}
});
app.get('/viewProducts', function (req, res) {
	const query = req.query;
	MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
		if (err) {
			res.statusCode = 500;
			data = { result: 'connection failled: Server Error' };
			res.send(data);
		} else {
			var dbo = db.db('Ecommerce');
			dbo
				.collection('Products')
				.find(query)
				.toArray(function (err, result) {
					if (err) {
						res.statusCode = 400;
						data = { result: 'failed please try again' };
						res.send(data);
					} else {
						if (!result) {
							res.statusCode = 404;
							data = {
								result:
									'No product found',
							};
							res.send(data);
						} else {
							res.statusCode = 200;
							data = { result: result };
							res.send(data);
						}
					}
				});
		}
	});
});

// add dummy products using postman
app.post('/addproducts', function (req, res) {
	var pName = req.body.productName.trim();
	var price = req.body.productPrice;
	var img = req.body.productImg.trim();
	var avalible = req.body.avalibleItems;
	MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
		if (err) {
			res.statusCode = 500;
			data = { result: 'connection failled: Server Error' };
			res.send(data);
		} else {
			var dbo = db.db('Ecommerce');
			var newProduct = {
				productName: pName,
				productImg: img,
				productPrice: price,
				availableItems: avalible,
			};
			dbo.collection('Products').insertOne(newProduct, function (err, result) {
				if (err) {
					res.statusCode = 400;
					data = { result: 'failed please try again' };
					console.log(result);
					res.send(data);
				} else {
					res.statusCode = 200;
					data = { result: 'product Added successfully' };
					console.log(result);
					res.send(data);
				}
			});
		}
	});
});
app.listen(PORT, () => {
	console.log(`app listening at http://localhost:${PORT}`);
=======
app.listen(PORT, () => {
	console.log(`listen to me http://localhost:${PORT}`);
>>>>>>> fe74960382a2a7d5bb60009cf4b539e865202ec9
});
