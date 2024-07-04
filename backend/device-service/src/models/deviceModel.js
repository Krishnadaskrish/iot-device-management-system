const mongoose = require('mongoose')

const deviceShema = new mongoose.Schema({
    name : {
        type : String ,
        require : true , 
    },
    type : {
        type : String ,
        require : true
    },
    status : {
        type : String ,
        require : true ,
        enum : ['active' , 'inactive'] ,
        default : 'inactive'
    } ,
    createdAt : {
        type : Date ,
        default : Date.now ,
    }


})


const Device = mongoose.model('Device',deviceShema)

module.exports = Device