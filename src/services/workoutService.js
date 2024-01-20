const {v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

const getAllWorkouts = () => {
  const allWorkout = Workout.getAllWorkouts();
  return allWorkout;
};
const getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId);
  return workout;
};
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};
const updateOneWorkout = (workoutId, change) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, change);
  return updatedWorkout;
};
const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
