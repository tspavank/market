var mongoose = require('mongoose');
var addInterestSchema = require('./addInterest.model');

create.alert(function (data, cb) {
    var alert = new this(data);
    alert.save(cb);
});
create.buying(function (data, cb) {
    var buying = new this(data);
    alert.save(cb);

});
create.purchasingprefrence(function (data, cb) {
    var purchasingprefrence  = new this(data);
    alert.save(cb);

    getByComponents.comp(function(query, cb){
        this.findOne(query, cb);

    })
//sdss
    getByAmmoTypes.function(query, cb){
        this.findById(query, cb);
    }
    getByBrand.function(query, cb){
        this.findById(query, cb);
    
    }
    getByTradePartners.function(query, cb){
        this.findById(query, cb);
    }
    //comment
    getByTermsOfSale.function(query, cb){
        this.findById(query, cb);

        update.function(query, updateData, cb){
            this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb)
        }

}

    var addInterestModel = mongoose.model('User', addInterestSchema);

    module.exports = addInterestModel;