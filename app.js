const express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

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

app.listen(PORT, () => {
	console.log(`listen to me http://localhost:${PORT}`);
});
