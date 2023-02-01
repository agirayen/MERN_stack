const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'get from controller' });
});

const postGoals =asyncHandler( async(req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Pls enter txt field');
    }
    res.status(200).json({message: 'create from controller' });
});

const putGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: `put goals controller ${req.params.id}` });
});
const deleteGoals =asyncHandler (async(req, res) => {
    res.status(200).json({message: `delete goals controller ${req.params.id}` });

});

module.exports = { 
    getGoals, 
    postGoals, 
    putGoals,
    deleteGoals
};