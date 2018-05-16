var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userinterestSchema = new Schema({
	
	
	      userid: String,
		  ZERVPlatformAcctNumber:Number,
		  alert_id:Number,
		  alert_name:String,
		  transactiontype:String,
		  comp_case:Boolean,
		  comp_projectile:Boolean,
		  comp_gunpowder:Boolean,
		  comp_primer:Boolean,
		  ammo_handgun:Boolean,
		  ammo_shortgun:Boolean,
		  ammo_rifle:Boolean,
		  ammo_rimfire:Boolean,
		  brand_winchester:Boolean,
		  brandRemington:Boolean,
		  brandFederal:Boolean,
		  brandFiocchi:Boolean,
		  brandHornaday:Boolean,
		  brandX:Boolean,
		  brandY:Boolean,
		  brandZ:Boolean,
		  TpUsgovt:Boolean,
		  TpIntgovt:Boolean,
		  TpUsCommercial:Boolean,
		  TpINTCommercial:Boolean,
		  saletermImmediate:Boolean,
		  saletermLt30Days:Boolean,
		  saletermGt30Days:Boolean,



});
var userinterestModel = mongoose.model('userintrest', userinterestSchema);

module.exports = userinterestModel;
