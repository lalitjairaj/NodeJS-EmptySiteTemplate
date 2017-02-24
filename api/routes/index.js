/**
 * Created by a598519 on 20-02-2017.
 */
var express = require('express');
var router = express.Router();
var ctrlPlanner = require('../controllers/planner.controllers');
var ctrlMenu = require('../controllers/menu.controllers');
router
    .route('/planner/Vehicles')
    .get(ctrlPlanner.getVehiclesForPlanner);

router
    .route('/planner/Drivers')
    .get(ctrlPlanner.getDriversForPlanner);

router
    .route('/menu/:lang')
    .get(ctrlMenu.getMenu);



module.exports = router;