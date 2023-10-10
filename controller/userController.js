import students from "../model/userSchema.js";

export const addstudent = async (req, res) => {
  const student = req.body;
  try {
    const newStudent = new students(student);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
    console.log("sucessfully inserted")
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(409).json({ message: "Student could not be added due to a conflict." });
  }
};

export const getStudent = async (req,res) => {
  try {
    const studentDetail = await students.find({});
    res.status(200).json(studentDetail);
  } catch (error) {
    res.status(404).json(error);
  }
};
export const getStudentOne = async (req,res) => {
  try {
    const studentId = req.params.id;
    const studentDetail = await students.findOne({_id:studentId});
    res.status(200).json(studentDetail);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const updateStudent = async (req,res) => {
  try {
    const studentId = req.params.id;
    const updatedData = req.body;
    const validateData=new students(updatedData);
    const studentDetail = await students.updateOne(
      { _id: studentId },
      { $set: validateData }
    );
    res.status(200).json({ message: 'Student updated successfully' });
   
  } catch (error) {
    res.status(404).json(error);
  }
};
export const deleteStudnet = async (req,res) => {
  try {
    const studentId = req.params.id;
    const studentDetail = await students.deleteOne({_id:studentId});
    res.status(200).json(studentDetail);
  } catch (error) {
    res.status(404).json(error);
  }
};
