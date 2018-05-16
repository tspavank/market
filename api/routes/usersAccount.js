// import { throws } from "assert";

var express = require("express");
var bodyParser = require('body-parser');
var crypto = require('crypto');

var useraccountsModel = require('../models/useraccountsModel');
var authenticationModel = require('../models/authenticationModel');

var accounts = express.Router();
accounts.use(bodyParser.json());
accounts.route('/')

  .get(function (req, res, next) {
    useraccountsModel.find({}, function (err, useraccountsModel) {
      if (err) throw err;
      res.json(useraccountsModel + "working ");
    });
  })

  .post(function (req, res) {
    var data = req.body;
    oneWayHash(data.accInfoPassword, function (hashPassword) {
      useraccountsModel.findOneAndUpdate({ username: data.email, phone_number: data.phonenumber },
        // { $set: { password: hashPassword } }, { new: true }, function (err, doc) {
        { $set: { } }, { new: true }, function (err, doc) {
          if (err) {
            res.status(500);
            res.json(false);
          } else {
            if (doc) {
              findAndSaveAuth(doc.user_id, doc.ZERVPlatformAcctNumber, hashPassword, data, function (result) {
                if (result !== false) {
                  res.status(200);
                  res.json(doc);
                } else {
                  res.status(500);
                  res.json(false);
                }
              })
            } else {
              console.log(doc);
              res.status(500);
              res.json(false);
            }
          }
        });
    })
  })
  .put(function (req, res, next) {
    var data =  req.body;
    useraccountsModel.findOneAndUpdate({ user_id: data.user_id},
      { $set: data }, { new: true, upsert:true }, function (err, doc) {
        res.json(doc);

    });
  })
  .delete(function (req, res, next) {
    useraccountsModel.remove({}, function (err, resp) {
      if (err) throw err
      res.json(resp);
    });
  });
function oneWayHash(data, callback) {
  if (typeof callback === 'function') {
    var hashPassword = crypto.createHash('md5').update(data).digest("hex");
    callback(hashPassword);
  }
}
function findAndSaveAuth(user_id, ZERVPlatformAcctNumber, hashPassword, data, callback) {
  if (typeof callback === 'function') {
    // console.log("confirm : " + ZERVPlatformAcctNumber + " : " +user_id+ " : " + hashPassword +" : " + JSON.stringify(data) );
    // confirm : 1000000000 : 100 : dbba05e11809d7ec291421b1b324f93a : {"email":"m@m.com","accInfoPassword":"123LKJ@#$","phoneCode":"+1","phonenumber":"1231231234"}
    authenticationModel.findOneAndUpdate({ userId: user_id,  userName: data.email, },
      { $set: { encryptedUserPassword: hashPassword, ZERVPlatformAccNumber: ZERVPlatformAcctNumber ,status : 'INACTIVE' } }, { upsert: true, new: true }, function (err, document) {
        if (err) {
          callback(false);
        } else {
          if (document) {
            console.log("FIrst auth : " + JSON.stringify(document));
            callback(true);
          } else {
            console.log("if zp dock not found : " + JSON.stringify(document));
            callback(false);
          }

        }
      });
  }
}
module.exports = accounts;