
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var intakeformSchema = new Schema({


	legalBusinessName: String,
	description: String,
	businessTypeSupplier: Boolean,
	businessTypeManufacturer: Boolean,
	businessTypeConsumer: Boolean,
	businessTypeDistributor: Boolean,
	businessTypeGovernment: Boolean,
	country: String,
	address: String,
	zip: String,
	state: String,
	city: String,
	email: String,
	phoneCode: String,
	phoneNumber: String,

	comp_case: Object,
	comp_projectile: Object,
	comp_gunpowder: Object,
	comp_primer: Object,
	ammo_handgun: Object,
	ammo_shortgun: Object,
	ammo_rifle: Object,
	ammo_rimfire: Object,
	brand_winchester: Object,
	brand_remington: Object,
	brand_federal: Object,
	brand_fiocchi: Object,
	brand_hornaday: Object,
	brand_x: Object,
	brand_y: Object,
	brand_z: Object,
	TP_USGOVT: Object,
	TP_INTGOVT: Object,
	TP_USCommercial: Object,
	TP_INTCommercial: Object,
	saleterm_immediate: Object,
	saleterm_lt30days: Object,
	saleterm_gt30days: Object,


});
var intakeModel = mongoose.model('intakeform', intakeformSchema);

module.exports = intakeModel;


