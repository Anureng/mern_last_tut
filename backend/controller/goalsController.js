//@desc     Get goal
//@route    Get /api/goals
//@access   private
const getgoal=(req,res)=>{
    res.status(200).json({message:'get goal'});
}

//@desc     set goal
//@route    set /api/goals
//@access   private
const setgoal=(req,res)=>{
    res.status(200).json({message:'set goal'});
}

//@desc     update goal
//@route    update /api/goals/:id
//@access   private
const updategoal=(req,res)=>{
    res.status(200).json({message:`update goal ${req.params.id}`});
}

//@desc     delete goal
//@route    delete/api/goals/:id
//@access   private
const deletegoal=(req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`});
}
module.exports={
    getgoal,
    setgoal,
    updategoal,
    deletegoal,
}