const Workout = require('../database/Workout');

const getAllWorkouts = () => {
  const allWorkout = Workout.getAllWorkouts();
  return allWorkout;
};
const getOneWorkout = () => {
  return;
};
const createNewWorkout = () => {
  return;
};
const updateOneWorkout = () => {
  return;
};
const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
