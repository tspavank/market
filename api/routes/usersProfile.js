var express = require("express");
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var useraccountsModel = require('../models/useraccountsModel');
var userinterestModel = require('../models/userinterestModel');
var userProfile = express.Router();

userProfile.use(bodyParser.json());


userProfile.route('/:userid')

	.get(function (req, res, next) {
		var userId = parseInt(req.params.userid);
		useraccountsModel.find({ 'userid': userId }, function (err, details) {
			if (err) throw err;
			return res.json(details);
		});
	})

	.post(function (req, res) {
		var response = { status: false, msg: 'failed' };
		var data = req.body.info;
		var userId = req.body.userId;

		if (typeof req.body.info == "undefined" || typeof req.body.userId == "undefined") {
			return res.send(response);
		}

		// return res.send(req.body);
		/* return res.send({data: userId}); */
		if (typeof data != "undefined") {
			useraccountsModel.findOneAndUpdate({ userid: userId }, data, function (err, useraccountsModel) {
				if (err) {
					response.status = false;
					response.msg = err;
					return res.send(response);
				}
				else if (!err) {
					response.status = true;
					response.msg = 'success';
					return res.send(response);
				}
			});
		}
		else {
			return res.send(response);
		}
	});


userProfile.route('/sam')

	.get(function (req, res, next) {

		res.send('hit');

	});

userProfile.route('/company')

	.get(function (req, res, next) {

		res.send('hit');

	})

	.post(function (req, res, next) {
		var response = { status: false, msg: 'failed' };
		var data = req.body.info;
		var userId = req.body.userId;
		// return res.send(req.body);
		if (typeof req.body.info == "undefined" || typeof req.body.userId == "undefined") {
			return res.send(response);
		}

		if (typeof data != "undefined") {
			useraccountsModel.findOneAndUpdate({ userid: userId }, data, function (err, useraccountsModel) {
				if (err) {
					response.status = false;
					response.msg = err;
					return res.send(response);
				}
				else if (!err) {
					response.status = true;
					response.msg = 'success';
					return res.send(response);
				}
			});
		}
		else {
			return res.send(response);
		}
	});


userProfile.route('/docupload')
	.post(function (req, res, next) {

		var fs = require('fs');
		var multer = require('multer');

		var docUploadFileName = '';
		var docUploadOriginalFileName = '';
		var otherData = {};
		var userObject = this;

		var storage = multer.diskStorage({
			destination: function (req, file, callback) {
				callback(null, './public/profile_documents');
			},
			filename: async function (req, file, callback) {
				otherData = req.body;
				docUploadOriginalFileName = file.originalname;
				var file_extension = docUploadOriginalFileName.split('.').pop();
				var timeInMs = new Date().getTime();
				docUploadFileName = timeInMs + '.' + file_extension;
				callback(null, docUploadFileName);
			}
		});

		var upload = multer({ storage: storage }).single('myfile');


		/* --------------
		 * upload file
		 * --------------
		 */

		upload(req, res, async function (err) {

			var otherInfo = req.body.data;
			var documentUrl = 'profile_documents/' + docUploadFileName;

			if (err) {
				console.log('upload err', err);
				return res.end("Error uploading file.");
			}
			else {
				var responseObj = {
					status: true,
					statusMessage: "Success",
					documentUrl: documentUrl
				};

				return res.send(responseObj);
			}

		});

	});




userProfile.route('/token')

	.get(function (req, res, next) {

		res.send('hit');

	})
	.post(function (req, res, next) {
		var data = req.body;
		useraccountsModel.findOneAndUpdate({ userid: data.userid },
			{ $set: data }, { new: true }, function (err, doc) {
			})
	})

userProfile.route('/intrests')

	.get(function (req, res, next) {


		res.send('hit');

	})



	.post(function (req, res, next) {


		var data = req.body;
		console.log(JSON.stringify(data));
		userinterestModel.findOneAndUpdate({ userid: data.userid },
			{ $set: data }, { new: true }, function (err, data) {
				if (err) {
					res.send(err + "not working");
				} else {
					res.json(data);
				}
			})
	});

module.exports = userProfile;