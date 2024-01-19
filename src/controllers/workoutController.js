const workoutService = require('../services/workoutService');

const getAllWorkouts = (req , res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send('Get all workouts');
};
const getOneWorkout = (req , res) => {
    const workout = workoutService.getOneWorkout();
    res.send('Get an exidting workout');
};
const createNewWorkout = (req , res) => {
    const createdWorkout = workoutService.createNewWorkout();
    res.send('Create an new workout');
};
const updateOneWorkout = (req , res) => {
    const updatedWorkout = workoutService.updateOneWorkout();
    res.send('Update an new workout');
};
const deleteOneWorkout = (req , res) => {
    workoutService.deleteOneWorkout();
    res.send('Delete an existing workout');   
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};