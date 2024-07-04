const Device = require ('../models/deviceModel')

exports.addDevice = async (deviceData)=>{
    const device = new Device(deviceData)
    return await device.save()
}

exports.getDevice = async () => {
    return await Device.find()
}

exports.getDeviceById = async (id) => {
    return await Device.findById(id)
}

exports.upadateDevice = async (id,deviseData) =>{
    return await Device.findByIdAndUpdate(id,deviseData,{new : true})
}

exports.DeleteDevice = async (id) => {
    return await Device.findByIdAndDelete(id)
}