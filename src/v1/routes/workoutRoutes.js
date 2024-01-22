const express = require('express');
const workoutController = require('../../controllers/workoutController');
const recordController = require('../../controllers/recordController');

const router = express.Router();

router.get('/', workoutController.getAllWorkouts);
router.get('/:workoutId', workoutController.getOneWorkout);
router.post('/', workoutController.createNewWorkout);
router.patch('/:workoutId', workoutController.updateOneWorkout);
router.delete('/:workoutId', workoutController.deleteOneWorkout);

router.get('/:workoutId/records', recordController.getRecordForWorkout);

// router.get('/:workoutId/records/members/:members', recordController.getRecordForWorkout);


module.exports = router;