var express = require("express");
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var alerts = require('../alerts');
var purchasingprefrences =require('../models/listproducts');

var alersdetails = express.Router();

alertdetails.use(bodyParser.json());


alertdetails.route('/')

    .get(function (req, res, next) {

        res.send('hit');

    })

    .post(function (req, res, next) {

        var data = req.body;
            var info = new alerts ({

            

            alertName:data.alertName,
            
            })

            info.save(function(err,data){
                if (err){
                    res.send(err+"not working");
                }else{
                    res.json(data);
                }
        })                  
            
        var info = new alerts({


        components:data.components,
        ammoType:data.ammoType,
        brand:data.brand,
        tradePartners:data.tradePartners,
        termsOfSale:data.termaOfSale,
        
        })

        info.save(function(err,data){
            if (err){
                res.send(err+"not working");
            }else{
                res.json(data);
            }
    })                  
        



        res.send('hit');

    });


    

module.exports = alertdetails;