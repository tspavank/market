var express = require("express");
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var intakeModel = require('../models/intakeModel');

var userIntrests = express.Router();

userIntrests.use(bodyParser.json());

function buy_sell(buy, sell) {
	var obj = { ['buy']: buy, ['sell']: sell };
	return obj;
}

userIntrests.route('/')

	.get(function (req, res, next) {

		intakeModel.find({}, function (err, intakeModel) {

			if (err) throw err;
			res.json(intakeModel + "working ");

		});

	})

	.post(function (req, res) {

		var data = req.body;
		console.log(JSON.stringify(data));

		var info = new intakeModel({

			legalBusinessName: data.legalBusinessName,
			description: data.description,


			businessTypeSupplier: data.businessType.Supplier,
			businessTypeManufacturer: data.businessTypeManufacturer,
			businessTypeConsumer: data.businessTypeConsumer,
			businessTypeDistributor: data.businessTypeDistributor,
			businessTypeGovernment: data.businessType.Government,


			country: data.country,
			address: data.address,
			zip: data.zip,
			state: data.zip,
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
			saleterm_gt30days: buy_sell(data.purchasingPreferencesTermsOfSalethirtyDaysOrMore, data.sellingPreferencesTermsOfSalethirtyDaysOrMore),


		})


		info.save(function (err, users) {
			if (err) {
				res.send(err);
				res.status(500);
			} else {
				res.status(200);
				res.json(users);
			}
		});

	})

	.delete(function (req, res, next) {

		intakeModel.remove({}, function (err, resp) {

			if (err) throw err;
			res.json(resp);
		});
	});


userIntrests.route('/:promoId')

	.get(function (req, res, next) {

		intakeModel.findById(req.params.promoId, function (err, promotion) {

			if (err) throw err;
			res.json(promotion);

		});
	})

	.put(function (req, res, next) {

		intakeModel.findByIdAndUpdate(req.params.promoId, {

			$set: req.body

		},
			{
				new: true
			}, function (err, promotion) {

				if (err) throw err;
				res.json(promotion);
			});
	})

	.delete(function (req, res, next) {

		intakeModel.findByIdAndRemove(req.params.promoId, function (err, resp) {

			if (err) throw err;

			res.json(resp);
		});

	});


module.exports = userIntrests;