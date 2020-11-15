var mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');


var userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        maxlength: 15,
        trim: true
    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true
    },
// for password setup
    encry_password: {
        type: String,
        required: true

    },
    salt: String,
     role: {
         type: Number,
         default: 0

     }, /* Array to push value of purchases */
     purchases : {
         type: Array,
         default: []
     }
});
//virtual field known as password
userSchema.virtual("password")
    .set(function(password){
        this._password = password // _ convention for pvt variable 
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password)
    })
    .get(function() {
        return this._password
    })

// convert plain password to securePassword
userSchema.method = {

    authenticate: function(plainpassword){
        return this.securePassword(plainpassword) === this.encry_password
    },

    securePassword: function(plainpassword) {
        if (!password) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
            .update('plainpassword')
            .digest('hex');

        } catch (err) {
            return "";
        }
    
    }
};



module.exports = mongoose.model("User", userSchema)