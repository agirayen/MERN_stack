const asyncHandler = require('express-async-handler')
const Goal = require("../model/goalModel")

const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

const postGoals =asyncHandler( async(req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Pls enter txt field');
    }
    const goal = await Goal.create({
        text:req.body.text,
    })
    res.status(200).json(goal);
});

const putGoals = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    })

    res.status(200).json(updateGoal);
});
const deleteGoals =asyncHandler (async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()
    res.status(200).json({ id: req.params.id });

});

module.exports = { 
    getGoals, 
    postGoals, 
    putGoals,
    deleteGoals
};