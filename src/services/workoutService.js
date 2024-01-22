const {v4: uuid } = require('uuid');
const Workout = require('../database/Workout');

const getAllWorkouts = (filterParams) => {
  try{
    const allWorkout = Workout.getAllWorkouts(filterParams);
    return allWorkout;
  }catch(error){
    throw error;
  }
};
const getOneWorkout = (workoutId) => {
  try{
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  }catch(error){
    throw error;
  }
};
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
  };
  try{
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  }catch(error){
    throw error;
  }
};
const updateOneWorkout = (workoutId, change) => {
  try{
    const updatedWorkout = Workout.updateOneWorkout(workoutId, change);
    return updatedWorkout;
  }catch(error){
    throw error;
  }
};
const deleteOneWorkout = (workoutId) => {
  try{
    Workout.deleteOneWorkout(workoutId);
  }catch(error){
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
