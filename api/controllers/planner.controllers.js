/**
 * Created by a598519 on 20-02-2017.
 */
var vehicledata = require('../data/planner-vehicle-data.json');
var driverdata = require('../data/planner-driver-data.json');





module.exports.getVehiclesForPlanner=function(req,res){
res.status(200).json(vehicledata);
};

module.exports.getDriversForPlanner=function(req,res){
res.status(200).json(driverdata);
};