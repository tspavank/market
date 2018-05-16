var express = require("express");
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var useraccountsModel = require('../models/useraccountsModel');
var userinterestModel = require('../models/userinterestModel');

var userintake = express.Router();

userintake.use(bodyParser.json());
userintake.route('/')



  .get(function (req, res, next) {
    useraccountsModel.find({ email_address: "" }, function (err, docs) {
      if (docs.length) {
        res.send('Name exists already', null);
      } else {
        // user.save(function(err){
        res.send("u can insert");
        // });
      }
    });

    res.send("/users/intake");
  })

  .post(function (req, res) {


    var data = req.body;
    emailAvailability(data.email, function (result) {
      if (result == true) {
        var info = new useraccountsModel({
          description: data.description,
          address_1: data.address,
          country: data.country,
          zip_code: data.zip,
          city: data.city,
          state: data.state,
          email_address: data.email,
          phone_number: data.phoneNumber,
          legalBusinessName: data.legalBusinessName,
          username: data.email  
          // password: data.email
        })

        var userAccount = info.save();

        userAccount.then(function (doc) {
          if (data.transactionType.buy == true) {
            buyInsertion(doc, data, function (result) { console.log(result._id); });
          }
          if (data.transactionType.sell == true) {
            sellInsertion(doc, data, function (result) { console.log(result._id); });
          }

          /// user_has to recive invitation_link pending 
          res.status(200);
          res.json(doc);
        })
      } else {  
        res.status(500);
        res.json(false);
      }
    })
  })

  .delete(function (req, res, next) {
    useraccountsModel.remove({}, function (err, resp) {
      if (err) throw err;
      res.json(resp);
    });
  });

function buyInsertion(doc, data, callback) {
  if (typeof callback === 'function') {
    var info = new userinterestModel({
      userid: doc._id,
      comp_case: data.purchasingPreferencesComponentsCase,
      comp_projectile: data.purchasingPreferencesComponentsProjectile,
      comp_gunpowder: data.purchasingPreferencesComponentsGunpowder,
      comp_primer: data.purchasingPreferencesComponentsPrimer,
      ammo_handgun: data.purchasingPreferencesAmmoTypeHandgun,
      ammo_shortgun: data.purchasingPreferencesAmmoTypeShotgun,
      ammo_rifle: data.purchasingPreferencesAmmoTypeRifle,
      ammo_rimfire: data.purchasingPreferencesAmmoTypeRimfire,
      brand_winchester: data.purchasingPreferencesBrandWinchester,
      brand_remington: data.purchasingPreferencesBrandRemington,
      brand_federal: data.purchasingPreferencesBrandFederal,
      brand_fiocchi: data.purchasingPreferencesBrandFiocchi,
      TP_USGOVT: data.purchasingPreferencesTradePartnersUSGoverntment,
      TP_INTGOVT: data.purchasingPreferencesTradePartnersInternational,
      saleterm_immediate: data.purchasingPreferencesTermsOfSaleImmediate,
      saleterm_lt30days: data.purchasingPreferencesTermsOfSaleWithinthirtyDays,
      saleterm_gt30days: data.purchasingPreferencesTermsOfSalethirtyDaysOrMore
    })
    info.save(function (err, users) {
      if (err) {
        callback(err);
      } else {
        // console.log(users);
        callback(users);
      }
    })
  }
};

function sellInsertion(doc, data, callback) {

  if (typeof callback === 'function') {
    var info = new userinterestModel({
      userid: doc._id,
      comp_case: data.purchasingPreferencesComponentsCase,
      comp_projectile: data.sellingPreferencesComponentsProjectile,
      comp_gunpowder: data.sellingPreferencesComponentsGunpowder,
      comp_primer: data.sellingPreferencesComponentsPrimer,
      ammo_handgun: data.sellingPreferencesAmmoTypeHandgun,
      ammo_shortgun: data.sellingPreferencesAmmoTypeShotgun,
      ammo_rifle: data.sellingPreferencesAmmoTypeRifle,
      ammo_rimfire: data.sellingPreferencesAmmoTypeRimfire,
      brand_winchester: data.purchasingPreferencesBrandWinchester,
      brand_remington: data.sellingPreferencesBrandRemington,
      brand_federal: data.sellingPreferencesBrandFederal,
      brand_fiocchi: data.sellingPreferencesBrandFiocchi,
      TP_USGOVT: data.sellingPreferencesTradePartnersUSGoverntment,
      TP_INTGOVT: data.sellingPreferencesTradePartnersInternational,
      saleterm_immediate: data.sellingPreferencesTermsOfSaleImmediate,
      saleterm_lt30days: data.sellingPreferencesTermsOfSaleWithinthirtyDays
    })
    info.save(function (err, users) {
      if (err) {
        callback(err);
      } else {
        // console.log(users);
        callback(users);
      }
    })
  }
};
function emailAvailability(emailId, callback) {
  if (typeof callback === 'function') {
    useraccountsModel.find({ email_address: emailId }, function (err, docs) {
      if (docs.length) {
        callback(false);
      } else {
        callback(true);
      }
    });
  }
}


module.exports = userintake;
