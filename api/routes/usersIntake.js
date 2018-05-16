var express = require("express");
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var useraccountsModel = require('../models/useraccountsModel');
// var userinterestModel = require('../models/userinterestModel');
var userintakeModel = require('../models/userintakeModel');

var userintake = express.Router();

userintake.use(bodyParser.json());
userintake.route('/')

  .get(function (req, res, next) {
  })

  .post(function (req, res) {
    var data = req.body;
    emailAvailability(data.email, function (result) {
      if (result == true) {
        intaking(data, function (result) {
          if (result !== false) {
            var info = new useraccountsModel({
              username: data.email,
              email_address: data.email,
              phone_number: data.phoneNumber
            })
            info.save(function (err, users) {
              if (err) {
                res.status(403);
                res.json(false);
              } else {
                res.status(200);
                res.json(true);
              }
            });
          }
        })
      } else {
        res.status(403);
        res.json(false);
      }
    })
  })

  .delete(function (req, res, next) {
    userintakeModel.remove({}, function (err, resp) {
      if (err) throw err;
      res.json(resp);
    });
  });

function intaking(data, callback) {
  if (typeof callback === 'function') {
    var info = new userintakeModel({

      legalBusinessName: data.legalBusinessName,
      description: data.description,

      businessTypeSupplier: data.businessType.Supplier,
      businessTypeManufacturer: data.businessType.Manufacturer,
      businessTypeConsumer: data.businessType.Consumer,
      businessTypeDistributor: data.businessType.Distributor,
      businessTypeGovernment: data.businessType.Government,

      country: data.country,
      address: data.address,
      zip: data.zip,
      state: data.state,
      city: data.city,
      email: data.email,
      phoneCode: data.phoneCode,
      phoneNumber: data.phoneNumber,

      comp_case: buy_sell(data.purchasingPreferencesComponentsCase, data.sellingPreferencesComponentsCase),
      comp_projectile: buy_sell(data.purchasingPreferencesComponentsProjectile, data.sellingPreferencesComponentsProjectile),
      comp_gunpowder: buy_sell(data.purchasingPreferencesComponentsGunpowder, data.sellingPreferencesComponentsGunpowder),
      comp_primer: buy_sell(data.purchasingPreferencesComponentsPrimer, data.sellingPreferencesComponentsPrimer),
      ammo_handgun: buy_sell(data.purchasingPreferencesAmmoTypeHandgun, data.sellingPreferencesAmmoTypeHandgun),
      ammo_shortgun: buy_sell(data.purchasingPreferencesAmmoTypeShotgun, data.sellingPreferencesAmmoTypeShotgun),
      ammo_rifle: buy_sell(data.purchasingPreferencesAmmoTypeRifle, data.sellingPreferencesAmmoTypeRifle),
      ammo_rimfire: buy_sell(data.purchasingPreferencesAmmoTypeRimfire, data.sellingPreferencesAmmoTypeRimfire),
      brand_winchester: buy_sell(data.purchasingPreferencesBrandWinchester, data.purchasingPreferencesBrandWinchester),
      brand_remington: buy_sell(data.purchasingPreferencesBrandRemington, data.sellingPreferencesBrandRemington),
      brand_federal: buy_sell(data.purchasingPreferencesBrandFederal, data.sellingPreferencesBrandFederal),
      brand_fiocchi: buy_sell(data.purchasingPreferencesBrandFiocchi, data.sellingPreferencesBrandFiocchi),
      TP_USGOVT: buy_sell(data.purchasingPreferencesTradePartnersUSGoverntment, data.sellingPreferencesTradePartnersUSGoverntment),
      TP_INTGOVT: buy_sell(data.purchasingPreferencesTradePartnersInternational, data.sellingPreferencesTradePartnersInternational),
      saleterm_immediate: buy_sell(data.purchasingPreferencesTermsOfSaleImmediate, data.sellingPreferencesTermsOfSaleImmediate),
      saleterm_lt30days: buy_sell(data.purchasingPreferencesTermsOfSaleWithinthirtyDays, data.sellingPreferencesTermsOfSaleWithinthirtyDays),
      saleterm_gt30days: buy_sell(data.purchasingPreferencesTermsOfSalethirtyDaysOrMore, data.sellingPreferencesTermsOfSalethirtyDaysOrMore)
    })
    info.save(function (err, users) {
      if (err) {
        callback(false);
      } else {
        callback(users);
      }
    });
  }

}
function emailAvailability(emailId, callback) {
  if (typeof callback === 'function') {
    userintakeModel.find({ email: emailId }, function (err, docs) {
      if (docs.length) {
        callback(false);
      } else {
        callback(true);
      }
    });
  }
}
function buy_sell(buy, sell) {
  var obj = { ['buy']: buy, ['sell']: sell };
  return obj;
}

module.exports = userintake;
