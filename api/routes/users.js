var express = require("express");
var bodyParser = require('body-parser');

var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var useraccountsModel = require('../models/useraccountsModel');
var authenticationModel = require('../models/authenticationModel');
var users= express.Router();
users.use(bodyParser.json());

users.route('/:userId')
    .get(function (req, res, next) {
        var userId = req.params.userId;
        useraccountsModel.find({ user_id: userId }, function (err, details) {
            if (err) throw err;
            res.json(details);
        });
    });

module.exports = users;