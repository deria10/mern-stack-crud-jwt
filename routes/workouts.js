const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutcontroller')
const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)
//GET single workout
router.get('/:id', getWorkout)
//POST a new workout
router.post('/', createWorkout)
//DELETE a new workout
router.delete('/:id', deleteWorkout)
//UPDATE a new workout
router.patch('/:id', updateWorkout)
module.exports = router