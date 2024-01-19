const getAllWorkouts = (req , res) => {
    res.send('Get all workouts');
};
const getOneWorkout = (req , res) => {
    res.send('Get an exidting workout');
};
const createNewWorkout = (req , res) => {
    res.send('Create an new workout');
};
const updateOneWorkout = (req , res) => {
    res.send('Update an new workout');
};
const deleteOneWorkout = (req , res) => {
    res.send('Delete an existing workout');   
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};