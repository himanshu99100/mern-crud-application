import express from 'express';
import {addstudent,getStudent,getStudentOne,updateStudent,deleteStudnet}from '../controller/userController.js';
const router=express.Router();
router.post('/add',addstudent);
router.get('/all',getStudent);
router.get('/edit/:id',getStudentOne);
router.put('/update/:id',updateStudent)
router.put('/delete/:id',deleteStudnet);
export default router;