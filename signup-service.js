const user = require('../models/signup-model');
exports.createObj = (payload)=>{
    return new user({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phoneNo: payload.phoneNo,
        passord: payload.passord
    })
}
exports.saveData = (obj)=>{
    return obj.save()
}