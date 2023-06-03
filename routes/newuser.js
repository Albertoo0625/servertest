const express=require('express');
const router=express.Router();
const loginController=require('../controller/createuserController')
router.post('/',loginController.handlenewUser)

module.exports=router;