const Device = require("../models/deviceModel");
const DerviceService = require("../service/deviceService");

exports.addDevice = async (req, res) => {
  try {
    const device = await DerviceService.addDevice(req.body);
    res.status(201).json({status : "success" , message : "successfully added device"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDevice = async (req,res) => {
  try {
    const devices = await DerviceService.getDevice()
    res.status(200).json({status : "success" , message : "successfully fetched devices" , data : devices})

  } catch (error) {
    res.status(400).json({ error: error.message });
 }
}

exports.getDeviceById = async (req,res) =>{
  try {
    const device = await DerviceService.getDeviceById(req.params.id)
    res.status(200).json({status : "success" , message : "successfully fetched devices" , data : device})

  } catch (error) {
    res.status(400).json({ error: error.message });

  }
} 

exports.updateDevice = async (req,res) => {
  try {
    const device = await DerviceService.upadateDevice(req.params.id,req.body)
    res.status(200).json({status : "success" , message : "successfully uspadted device" , data : device})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.DelateDevice = async (req,res) => {
  try {
    const device = await DerviceService.DeleteDevice(req.params.id)
    res.status(200).json({status : "success" , message : "successfully delete device" })

} catch (error) {
    res.status(400).json({ error: error.message });
  }
}


