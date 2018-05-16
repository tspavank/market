var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usermfaSchema = new Schema({
	
});
var usermfaModel = mongoose.model('usermfa', usermfaSchema);

module.exports = usermfaModel;
