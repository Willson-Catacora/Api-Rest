const express =  require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

router
    .get('/', workoutController.getAllWorkouts)
    .get('/:workoutId', workoutController.getoOneWorkout)
    .post('/:workoutId', workoutController.createWorkout)
    .patch('/:workoutId', workoutController.updateOneWorkout)
    .delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = router;