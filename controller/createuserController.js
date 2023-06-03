

const handlenewUser=async(req,res)=>{
    const username=req.body.name;
    const age=req.body.age;

console.log(`request body name variable ${username}`);
res.status(200).json({age,username});
}

module.exports={handlenewUser}