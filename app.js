const express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
<<<<<<< HEAD
var ObjectID = require('mongodb').ObjectID;
=======
<<<<<<< HEAD
var ObjectID = require('mongodb').ObjectID;
=======
>>>>>>> fe74960382a2a7d5bb60009cf4b539e865202ec9
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09

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
<<<<<<< HEAD
				dbo.collection('User').findOne({ email: email }, function (err, rslt) {
					if (!rslt) {
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
					}else{
						res.statusCode = 400;
						data = { result: 'User with this email ID already exists!' };
=======
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
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
						res.send(data);
					}
				});
			}
		});
	}
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
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
<<<<<<< HEAD
=======
	console.log(id);
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
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
<<<<<<< HEAD
				dbo.collection('User').updateOne({ _id: id }, { $set: updateUser }, function (err, result) {
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
=======
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
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
			}
		});
	}
});
app.get('/viewProducts', function (req, res) {
	const query = req.query;
<<<<<<< HEAD
	res.setHeader('Access-Control-Allow-Origin', '*');
=======
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
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
<<<<<<< HEAD
					//console.log(result);
=======
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
					if (err) {
						res.statusCode = 400;
						data = { result: 'failed please try again' };
						res.send(data);
					} else {
						if (!result) {
							res.statusCode = 404;
							data = {
<<<<<<< HEAD
								result: 'No product found',
=======
								result:
									'No product found',
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
							};
							res.send(data);
						} else {
							res.statusCode = 200;
							data = { result: result };
<<<<<<< HEAD
							console.log(data);
=======
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
							res.send(data);
						}
					}
				});
		}
	});
});

<<<<<<< HEAD
app.post('/addToFavourite', function (req, res) {
	console.log('request');
	var userId = new ObjectID(req.body.user);
	var fProductId = new ObjectID(req.body.product);
	console.log(userId);
	var data = { result: 'default' };
	res.setHeader('Access-Control-Allow-Origin', '*');
	MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
		if (err) {
			res.statusCode = 500;
			data = { result: 'connection failled: Server Error' };
			res.send(data);
		} else {
			var dbo = db.db('Ecommerce');
			dbo
				.collection('favouriteProducts')
				.findOne({ userId: userId, productId: fProductId }, function (err, fresult) {
					if (!fresult) {
						dbo.collection('Products').findOne({ _id: fProductId }, function (err, presult) {
							var favouriteProduct = {
								userId: userId,
								productId: presult._id,
								productName: presult.productName,
								productPrice: presult.productPrice,
								productImg: presult.productImg,
								availableItems: presult.availableItems,
							};

							dbo.collection('favouriteProducts').insertOne(favouriteProduct, function (err, result) {
								if (err) {
									res.statusCode = 400;
									data = { result: 'failed please try again' };
									console.log(result);
									res.send(data);
								} else {
									res.statusCode = 200;
									data = { result: 'Added Successfully' };
									console.log(result);
									res.send(data);
								}
							});
						});
					} else {
						res.statusCode = 400;
						data = { result: 'product already exist in your favourites' };
						res.send(data);
					}
				});
		}
	});
});
app.post('/viewfavProducts', function (req, res) {
	var userid = new ObjectID(req.body.user);
	const query = req.query;
	res.setHeader('Access-Control-Allow-Origin', '*');
	MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
		if (err) {
			res.statusCode = 500;
			data = { result: 'connection failled: Server Error' };
			res.send(data);
		} else {
			var dbo = db.db('Ecommerce');
			dbo
				.collection('favouriteProducts')
				.find({ userId: userid, ...query })
				.toArray(function (err, result) {
					//console.log(result);
					if (err) {
						res.statusCode = 400;
						data = { result: 'failed please try again' };
						res.send(data);
					} else {
						if (!result) {
							res.statusCode = 404;
							data = {
								result: 'No product found',
							};
							res.send(data);
						} else {
							res.statusCode = 200;
							data = { result: result };
							console.log(data);
							res.send(data);
						}
					}
				});
		}
	});
});
=======
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
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
<<<<<<< HEAD
=======
=======
app.listen(PORT, () => {
	console.log(`listen to me http://localhost:${PORT}`);
>>>>>>> fe74960382a2a7d5bb60009cf4b539e865202ec9
>>>>>>> cbf300b988696e67b1451c30252f85fabfe21a09
});
