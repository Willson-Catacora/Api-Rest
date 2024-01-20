const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const PUERTO = process.env.PORT || 3000;

/* app.get('/', (req, res) =>{
    res.send("<h2>It's Working!</h2>");
}); */

app.use(express.json());
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerte ${PUERTO}...`)
});